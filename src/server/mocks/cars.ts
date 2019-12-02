import faker from 'faker';
import { colors } from './colors';
import { manufacturers } from './manufacturers';
import { Car as ICar, FuelType } from '@/types/Car';
import { Manufacturer as IManufacturer } from '@/types/Manufacturer';

export const cars: Array<ICar> = [];

for (let i = 0; i < 1000; i++) {
  const stockNumber = i;
  const manufacturer: IManufacturer = faker.random.arrayElement(manufacturers);
  const model = faker.random.arrayElement(manufacturer.models);
  const color: string = faker.random.arrayElement(colors);
  const mileageNumber = faker.random.number();
  const fuelType: FuelType = faker.random.arrayElement(['Petrol', 'Diesel']);

  cars.push({
    stockNumber,
    manufacturerName: manufacturer.name,
    modelName: model.name,
    color,
    mileage: {
      number: mileageNumber,
      unit: 'km',
    },
    fuelType,
    pictureUrl: '/images/car.svg',
  });
}
