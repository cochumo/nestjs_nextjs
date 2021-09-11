import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Car {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;
}