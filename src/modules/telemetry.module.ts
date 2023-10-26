import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TelemetryService } from 'src/services/telemetry.service';
import { TelemetryResolver } from 'src/resolvers/telemetry.resolver';
import { TelemetrySchema } from 'src/schemas/telemetry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Equipment', schema: TelemetrySchema }]),
  ],
  providers: [TelemetryService, TelemetryResolver],
})
export class TelemetryModule {}
