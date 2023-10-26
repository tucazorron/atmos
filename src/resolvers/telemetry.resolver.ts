import { Args, Query, Resolver } from '@nestjs/graphql';
import { TelemetrySchema } from '../schemas/telemetry.schema';
import { TelemetryService } from 'src/services/telemetry.service';
import { Telemetry } from 'src/entities/telemetry.entity';

@Resolver(() => TelemetrySchema)
export class TelemetryResolver {
  constructor(private service: TelemetryService) {}

  @Query(() => [Telemetry])
  averageTemperature(period: string, start: Date, end: Date): Promise<number> {
    return this.service.getAverageTemperature(period, start, end);
  }

  @Query(() => [Telemetry])
  activeTime(mac: string): Promise<number> {
    return this.service.getActiveTime(mac);
  }
}
