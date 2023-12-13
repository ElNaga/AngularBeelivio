import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RacesEnum } from './enums/race-distance.enum';
import { MarathonsDb } from './models/marathon.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService  {
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

export class MarathonsService {
    constructor() { }
    createDb(): MarathonsDb {
      return {
        marathons: [
          {
            id: 1,
            name: 'Skopje 5km Race',
            location: 'Skopje',
            distance: RacesEnum.Trka5km,
            date: new Date("2015-03-25")
          },
          {
            id: 2,
            name: 'Prilep Marathon',
            location: 'Prilep',
            distance: RacesEnum.Trka21km,
            date: new Date("2024-03-25")
          },
          {
            id: 3,
            name: 'Belgrad Marathon',
            location: 'Belgrad',
            distance: RacesEnum.Trka41km,
            date: new Date("2019-07-30")
          },
          {
            id: 4,
            name: 'Veles Marathon',
            location: 'Veles',
            distance: RacesEnum.Trka41km,
            date: new Date("2019-07-30")
          },
          {
            id: 5,
            name: 'Ohrid Marathon',
            location: 'Ohrid',
            distance: RacesEnum.Trka41km,
            date: new Date("2019-07-30")
          }
        ]
      };
    }
  }