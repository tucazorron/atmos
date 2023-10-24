import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class CreateEquipmentDto {
  @Field()
  readonly mac: string;
}
