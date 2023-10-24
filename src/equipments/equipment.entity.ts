import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Equipment {
  @Field(() => String)
  mac: string;
}
