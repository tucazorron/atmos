import { Module } from '@nestjs/common';
import { TelemetryModule } from './modules/telemetry.module';
import { MongooseConfigModule } from './modules/mongoose.module';
import { GraphqlModule } from './modules/graphql.module';

@Module({
  imports: [
    TelemetryModule,
    GraphqlModule,
    MongooseConfigModule,
  ],
})
export class AppModule {}
