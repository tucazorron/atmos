import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Telemetry } from "src/entities/telemetry.entity";
import { MqttListenerService } from "src/services/mqtt-listener.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Telemetry]),
  ],
  providers: [MqttListenerService],
})
export class MqttModule {}
