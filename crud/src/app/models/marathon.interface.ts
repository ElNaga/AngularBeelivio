import { RacesEnum } from '../enums/race-distance.enum';

export interface Marathon {
  id: number;
  name: string;
  location: string;
  distance: RacesEnum;
  date: Date;
}

export interface MarathonsDb {
  marathons: Marathon[];
}
