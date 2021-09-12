import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  brand: string;

  @Field()
  carName: string;

  @Field()
  @MaxLength(15)
  category: string;

  @Field({ nullable: true })
  memo?: string;
}
