import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Telemetry } from 'src/entities/telemetry.entity';

@Injectable()
export class TelemetryService {
  constructor(
    @InjectRepository(Telemetry)
    private readonly telemetryRepository: Repository<Telemetry>,
  ) {}

  async calculateAverageTemperature(start: Date, end: Date): Promise<number[]> {
    const startTimestamp = start.getTime();
    const endTimestamp = end.getTime();

    const telemetrys = await this.telemetryRepository.find({
      where: {
        date: Between(new Date(startTimestamp), new Date(endTimestamp)),
      },
    });

    const filteredTelemetry = telemetrys.filter((telemetry) => {
      const telemetryDate = new Date(telemetry.date).getTime();
      return telemetryDate >= startTimestamp && telemetryDate <= endTimestamp;
    });

    const temperatures1 = filteredTelemetry.map(
      (telemetry) => telemetry.temp_1,
    );
    const temperatures2 = filteredTelemetry.map(
      (telemetry) => telemetry.temp_2,
    );

    const sum1 = temperatures1.reduce((a, b) => a + b, 0);
    const sum2 = temperatures2.reduce((a, b) => a + b, 0);

    const averageTemperature1 = sum1 / temperatures1.length;
    const averageTemperature2 = sum2 / temperatures2.length;

    return [averageTemperature1, averageTemperature2];
  }

  async getLatestTelemetryByMac(mac: string): Promise<Telemetry | null> {
    const telemetry = await this.telemetryRepository.findOne({
      where: { mac },
      order: { date: 'DESC' },
    });
    return telemetry;
  }

  async calculateActiveTime(): Promise<number[]> {
    const telemetrys = await this.telemetryRepository.find();
    const filteredTelemetry = telemetrys.filter((telemetry) => {
      const telemetryDate = new Date(telemetry.date).getTime();
      return telemetryDate >= new Date('2021-01-01').getTime();
    });

    const compressorBuffer = filteredTelemetry.map(
      (telemetry) => telemetry.compressor_buffer,
    );
    const evapFanBuffer = filteredTelemetry.map(
      (telemetry) => telemetry.evap_fan_buffer,
    );
    const defrostBuffer = filteredTelemetry.map(
      (telemetry) => telemetry.defrost_buffer,
    );
    const openDoorBuffer = filteredTelemetry.map(
      (telemetry) => telemetry.open_door_buffer,
    );

    const compressorTime = compressorBuffer.filter(
      (buffer) => buffer === '1',
    ).length;
    const evapFanTime = evapFanBuffer.filter((buffer) => buffer === '1').length;
    const defrostTime = defrostBuffer.filter((buffer) => buffer === '1').length;
    const openDoorTime = openDoorBuffer.filter(
      (buffer) => buffer === '1',
    ).length;

    return [compressorTime, evapFanTime, defrostTime, openDoorTime];
  }
}
