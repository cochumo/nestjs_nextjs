import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Car {
  @Field(() => ID)
  id: number;

  @Field()
  brand: string;

  @Field()
  carName: string;

  @Field()
  category: string;

  @Field({ nullable: true })
  memo?: string;
}
