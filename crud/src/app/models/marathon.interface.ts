import { RacesEnum } from '../enums/marthon-enums.enum';

export interface Marathon {
  id: number;
  name: string;
  location: string;
  distance: RacesEnum;
  races: Race[];
  description: string;
  date: Date;
}

export interface MarathonsDb {
  marathons: Marathon[];
}

export interface Race {
  distance: RacesEnum;
  date: Date;
}