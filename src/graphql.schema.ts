import { Resolver, Query, Args } from '@nestjs/graphql';
import { DateTime, DeviceData, EquipmentInfo, Metrics } from './graphql.schema';

@Resolver()
export class AppResolver {

  @Query(() => DeviceData)
  async getDeviceData(@Args('mac') mac: string): Promise<DeviceData> {
    // Retrieve and return device data for the specified MAC address
    // You can fetch data from your data source, e.g., database or MQTT broker
    // Replace this with your actual data retrieval logic
    const deviceData = /* Fetch device data based on 'mac' */;

    return deviceData;
  }

  @Query(() => EquipmentInfo)
  async getEquipmentInfo(@Args('mac') mac: string): Promise<EquipmentInfo> {
    // Retrieve and return equipment information for the specified MAC address
    // You can fetch equipment information from your data source
    // Replace this with your actual data retrieval logic
    const equipmentInfo = /* Fetch equipment information based on 'mac' */;
    return equipmentInfo;
  }

  @Query(() => Metrics)
  async getMetrics(
    @Args('mac') mac: string,
    @Args('startTime') startTime: DateTime,
    @Args('endTime') endTime: DateTime
  ): Promise<Metrics> {
    // Retrieve and return metrics based on 'mac', 'startTime', and 'endTime'
    // You can calculate and fetch metrics based on the given time period
    // Replace this with your actual metrics calculation and retrieval logic
    const metrics = /* Calculate and fetch metrics based on 'mac', 'startTime', and 'endTime' */;
    return metrics;
  }
}
export { DateTime, DeviceData, EquipmentInfo, Metrics };

