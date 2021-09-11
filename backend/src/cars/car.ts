import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Car {
  @Field(() => ID)
  id: string;

  @Field()
  brand: string;

  @Field()
  carName: string;

  @Field()
  category: string;
}
