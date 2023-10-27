import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Telemetry {
  @PrimaryGeneratedColumn()
  date: Date;

  @Column()
  mac: string;

  @Column()
  temp_1: number;

  @Column()
  temp_2: number;

  @Column()
  rssi: number;

  @Column()
  compressor_buffer: string;

  @Column()
  evap_fan_buffer: string;

  @Column()
  defrost_buffer: string;

  @Column()
  open_door_buffer: string;

  constructor(telemetry: Partial<Telemetry>) {
    Object.assign(this, telemetry);
  }
}
