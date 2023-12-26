import { RacesEnum } from '../enums/marthon-enums.enum';

export interface Marathon {
  id: number;
  name: string;
  location: string;
  distance: RacesEnum | number;
  races: Race[];
  description: string;
  date: Date;
}

export interface MarathonsDb {
  marathons: Marathon[];
}

export interface Race {
  distance: RacesEnum | number;
  date: Date;
}