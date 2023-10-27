import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telemetry } from 'src/entities/telemetry.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'zorron.atmos',
      password: 'Atmos@2023',
      database: 'your_database',
      entities: [Telemetry],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
