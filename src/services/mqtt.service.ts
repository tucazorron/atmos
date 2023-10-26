import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Telemetry, TelemetryDocument } from '../schemas/telemetry.schema';
import mqtt from 'mqtt';

@Injectable()
export class MqttListenerService {
  private mqttClient: any;

  constructor(@InjectModel(Telemetry.name) private telemetryModel: Model<TelemetryDocument>) {
    this.mqttClient = mqtt.connect('mqtt://broker.hivemq.com');

    this.mqttClient.on('connect', () => {
      this.mqttClient.subscribe('rcd-cr-atmos/<MAC>');
    });

    this.mqttClient.on('message', (topic, message) => {
      this.saveDataToMongoDB(topic, message.toString());
    });
  }

  private async saveDataToMongoDB(topic: string, message: string): Promise<void> {
    const newData = new this.telemetryModel({ topic, message });
    await newData.save();
  }
}
