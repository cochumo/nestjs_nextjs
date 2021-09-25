import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@ObjectType()
export class Car {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  brand: string;

  @Column()
  @Field()
  carName: string;

  @Column({ length: '15' })
  @Field()
  category: string;

  @Column()
  @Field({ nullable: true })
  memo?: string;

  @CreateDateColumn()
  @Field()
  createdAt: Date;
}
