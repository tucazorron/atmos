import { Module } from '@nestjs/common';
import { TelemetryModule } from './modules/telemetry.module';
import { DatabaseModule } from './modules/database.module';
import { MqttModule } from './modules/mqtt.module';

@Module({
  imports: [DatabaseModule, MqttModule, TelemetryModule],
})
export class AppModule {}
