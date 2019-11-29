export type FuelType = 'Petrol' | 'Diesel';
export type MileageUnitType = 'km';

export interface Mileage {
  number: number;
  unit: MileageUnitType;
}

export interface Car {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  color: string;
  mileage: Mileage;
  fuelType: FuelType;
  pictureUrl: string;
}
