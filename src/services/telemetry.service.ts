import { Injectable } from '@nestjs/common';
import { Telemetry } from '../entities/telemetry.entity';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class TelemetryService {
  constructor(
    @InjectModel('Telemetry') private readonly TelemetryModel: Model<Telemetry>,
  ) {}

  async getAverageTemperature(
    period: string,
    start: Date,
    end: Date,
  ): Promise<number> {
    const query = {
      $gte: start,
      $lte: end,
    };
    const telemetrys = await this.findAll({
      timestamp: query,
    });
    const temperature = telemetrys.map((telemetry) => telemetry.temp_1);
    return temperature.reduce((a, b) => a + b, 0) / temperature.length;
  }

  async getActiveTime(mac: string): Promise<number> {
    const telemetrys = await this.findAll({
      mac,
    });
    const telemetrysByDate = telemetrys.map((telemetry) => telemetry.date);
    const telemetrysByDateSet = new Set(telemetrysByDate);
    return telemetrysByDateSet.size;
  }

  private async findAll(filter: FilterQuery<Telemetry>): Promise<Telemetry[]> {
    return await this.TelemetryModel.find(filter).exec();
  }
}
