import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RacesEnum } from './Enums/race-distance.enum';

@Injectable({
  providedIn: 'root'
})

export class UserService implements InMemoryDbService {
    constructor() { }
    createDb() {
      return {
        users: [
          {
            id: 1,
            name: 'Marko Markovski',
            age: 55,
            raceCount: 3
          },
          {
            id: 2,
            name: 'Tome Tomeski',
            age: 32,
            raceCount: 1
          },
          {
            id: 3,
            name: 'Martin Stolevski',
            age: 21,
            raceCount: 7
          }
        ]
      };
    }
  }

export class MarathonsService implements InMemoryDbService {
    constructor() { }
    createDb() {
      return {
        marathons: [
          {
            id: 1,
            name: 'Skopje 5km Race',
            Location: 'Skopje',
            distance: RacesEnum.Trka5km
          },
          {
            id: 2,
            name: 'Prilep Marathon',
            Location: 'Prilep',
            distance: RacesEnum.Trka21km
          },
          {
            id: 3,
            name: 'Belgrad Marathon',
            Location: 'Belgrad',
            distance: RacesEnum.Trka41km
          }
        ]
      };
    }
  }