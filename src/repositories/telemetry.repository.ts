import { getRepositoryToken } from '@nestjs/typeorm';
import { Telemetry } from 'src/entities/telemetry.entity';
import { Repository } from 'typeorm';

export class TelemetryRepository {
  static async createTelemetry(topic: string, message: Buffer) {
    const payload = JSON.parse(message.toString());
    const telemetry = new Telemetry(payload);
    telemetry.mac = topic;
    await Repository<Telemetry>.save(telemetry);
  }
}
