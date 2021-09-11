import { Resolver, Query, Args } from '@nestjs/graphql';
import { Car } from './car';

const carTable = [
  {
    id: '1',
    title: '鯖の味噌煮',
  },
  {
    id: '2',
    title: 'ミートソーススパゲティ',
  },
  {
    id: '3',
    title: '豚の生姜焼',
  },
];

@Resolver('Cars')
export class CarsResolver {
  @Query(() => [Car])
  async cars(): Promise<Car[]> {
    return carTable;
  }
}
