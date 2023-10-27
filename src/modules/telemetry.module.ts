import { Module } from '@nestjs/common';
import { TelemetryService } from 'src/services/telemetry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telemetry } from 'src/entities/telemetry.entity';
import { TelemetryController } from 'src/controllers/temperature.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Telemetry])],
  controllers: [TelemetryController],
  providers: [TelemetryService],
})
export class TelemetryModule {}
