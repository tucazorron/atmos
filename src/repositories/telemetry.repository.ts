import { getRepositoryToken } from '@nestjs/typeorm';
import { Telemetry } from 'src/entities/telemetry.entity';

export class TelemetryRepository {
  static async createTelemetry(topic: string, message: Buffer) {
    const payload = JSON.parse(message.toString());
    const telemetry = new Telemetry(payload);
    telemetry.mac = topic;
    await getRepositoryToken(Telemetry).save(telemetry);
  }
}
