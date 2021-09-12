import { Injectable } from '@nestjs/common';
import { Car } from './car';
import { NewCarInput } from './dto/newCar.input';

let cars = [
  {
    id: 1,
    brand: 'Alfa Romeo',
    carName: '4C Gr.3',
    category: 'Gr.3',
    createdAt: new Date(),
  },
  {
    id: 2,
    brand: 'BMW',
    carName: 'BMW M3 Coupé',
    category: 'N 400',
    createdAt: new Date(),
  },
  {
    id: 3,
    brand: 'Ferrari',
    carName: 'LaFerrari',
    category: 'N1000',
    createdAt: new Date(),
  },
] as Car[];

@Injectable()
export class CarsService {
  findAll(): Promise<Car[]> {
    return Promise.resolve(cars);
  }

  findOneById(id: number): Promise<Car> {
    const car = cars.find((car) => car.id === id);
    return Promise.resolve(car);
  }

  create(data: NewCarInput): Promise<Car> {
    const car: Car = {
      id: Date.now(),
      ...data,
      createdAt: new Date(),
    };
    cars.push(car);

    return Promise.resolve(car);
  }

  async remove(id: number): Promise<boolean> {
    cars = cars.filter((car) => car.id !== id);
    return true;
  }
}
