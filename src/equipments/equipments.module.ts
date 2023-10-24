import { Module } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { EquipmentsResolver } from './equipments.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipmentSchema } from './equipments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Equipment', schema: EquipmentSchema }]),
  ],
  providers: [EquipmentsService, EquipmentsResolver]
})
export class EquipmentsModule {}
