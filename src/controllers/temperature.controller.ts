import { Controller, Get, Param } from '@nestjs/common';
import { TelemetryService } from '../services/telemetry.service';
import { Telemetry } from 'src/entities/telemetry.entity';

@Controller('api')
export class TelemetryController {
  constructor(private readonly telemetryService: TelemetryService) {}
  @Get('temperature')
  calculateAverageTemperature(
    @Param('start') start: Date,
    @Param('end') end: Date,
  ): Promise<number[]> {
    return this.telemetryService.calculateAverageTemperature(start, end);
  }

  @Get('equipment-info/:mac')
  getLatestTelemetryByMac(
    @Param('mac') mac: string,
  ): Promise<Telemetry | null> {
    return this.telemetryService.getLatestTelemetryByMac(mac);
  }

  @Get('active-time')
  calculateActiveTime(): Promise<number[]> {
    return this.telemetryService.calculateActiveTime();
  }
}
