import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TelemetryDocument = Document<Telemetry>;

@Schema()
export class Telemetry {
  @Prop()
  mac: string;

  @Prop()
  temp_1: number;

  @Prop()
  temp_2: number;

  @Prop()
  rssi: number;

  @Prop()
  date: number;

  @Prop()
  compressor_buffer: string;

  @Prop()
  evap_fan_buffer: string;

  @Prop()
  defrost_buffer: string;

  @Prop()
  open_door_buffer: string;
}

export const TelemetrySchema = SchemaFactory.createForClass(Telemetry);
