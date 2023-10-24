import { Module } from '@nestjs/common';
import { EquipmentsModule } from './equipments/equipments.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EquipmentsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ],
})
export class AppModule {}
