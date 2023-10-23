import { GraphQLModule } from '@nestjs/graphql';
import {
  DeviceDataResolver,
  EquipmentInfoResolver,
  MetricsResolver,
  AppResolver,
} from './graphql.schema';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      resolvers: [AppResolver],
    }),
  ],
  providers: [DeviceDataResolver, EquipmentInfoResolver, MetricsResolver],
})
export class AppModule {}
