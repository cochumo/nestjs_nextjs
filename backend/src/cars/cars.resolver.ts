import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Car } from './car';
import { CarsService } from './cars.service';
import { NewCarInput } from './dto/newCar.input';

@Resolver((of) => Car)
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  cars(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Query((returns) => Car)
  async getCar(@Args({ name: 'id', type: () => Int }) id: number) {
    const car = await this.carsService.findOneById(id);
    if (!car) {
      throw new NotFoundException(id);
    }
    return car;
  }

  @Mutation((returns) => Car)
  addCar(@Args('newCar') newCar: NewCarInput): Promise<Car> {
    return this.carsService.create(newCar);
  }

  @Mutation((returns) => Boolean)
  async removeCar(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.carsService.remove(id);
  }
}
