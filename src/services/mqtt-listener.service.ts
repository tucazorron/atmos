import { Injectable } from '@nestjs/common';
import * as mqtt from 'mqtt';
import { TelemetryRepository } from 'src/repositories/telemetry.repository';

@Injectable()
export class MqttListenerService {
  listenMqtt() {
    const client = mqtt.connect('mqtt://broker.hivemq.com');

    client.on('connect', () => {
      client.subscribe('/rcd-cr-atmos/#');
    });

    client.on('message', (topic, message) => {
      TelemetryRepository.createTelemetry(topic, message);
    });
  }
}
