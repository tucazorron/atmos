import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EquipmentsService } from './equipments.service';
import { Equipment } from './equipment.entity';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { EquipmentInput } from './inputs/equipment.input';

@Resolver(() => Equipment)
export class EquipmentsResolver {
  constructor(private equipmentsService: EquipmentsService) {}

  @Query(() => [CreateEquipmentDto])
  equipments(): Promise<Equipment[]> {
    return this.equipmentsService.findAll();
  }

  @Mutation(() => [CreateEquipmentDto])
  async createEquipment(@Args('input') input: EquipmentInput) {
    return this.equipmentsService.create(input);
  }

}
