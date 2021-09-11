import { Resolver, Query, Args } from '@nestjs/graphql';
import { Car } from './car';

const carTable = [
  {
    id: 1,
    brand: 'Alfa Romeo',
    carName: '4C Gr.3',
    category: 'Gr.3',
  },
  {
    id: 2,
    brand: 'BMW',
    carName: 'BMW M3 Coupé',
    category: 'N 400',
  },
  {
    id: 3,
    brand: 'Ferrari',
    carName: 'LaFerrari',
    category: 'N1000',
  },
];

@Resolver('Cars')
export class CarsResolver {
  @Query(() => [Car])
  async cars(): Promise<Car[]> {
    return carTable;
  }
}
