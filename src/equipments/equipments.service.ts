import { Injectable } from '@nestjs/common';
import { Equipment } from './equipment.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { Model } from 'mongoose';

@Injectable()
export class EquipmentsService {
  constructor(
    @InjectModel('Equipment') private readonly equipmentModel: Model<Equipment>,
  ) {}

  async create(createEquipmentDto: CreateEquipmentDto): Promise<Equipment> {
    const createdEquipment = new this.equipmentModel(createEquipmentDto);
    return await createdEquipment.save();
  }

  async findAll(): Promise<Equipment[]> {
    return await this.equipmentModel.find().exec();
  }
}
