import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field((type) => [String])
  brand: string;

  @Field((type) => [String])
  carName: string;

  @Field()
  @MaxLength(15)
  category: string;

  @Field((type) => [String])
  memo: string;
}
