import { RacesEnum } from '../enums/race-distance.enum';

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