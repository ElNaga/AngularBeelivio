import { RacesEnum } from '../enums/race-distance.enum';

export interface Marathon {
  id: number;
  name: string;
  Location: string;
  distance: RacesEnum;
}

export interface MarathonsDb {
  marathons: Marathon[];
}
