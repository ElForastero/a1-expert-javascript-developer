export interface Model {
  uuid: string;
  name: string;
}

export interface Manufacturer {
  uuid: string;
  name: string;
  models: Array<Model>;
}
