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
            name: "New York City Marathon",
            location: "New York, USA",
            distance: RacesEnum.Trka5km,
            races: [
              { distance: RacesEnum.Trka5km, date: new Date("2023-05-15") },
              { distance: RacesEnum.Trka10km, date: new Date("2023-05-16") },
            ],
            date: new Date("2023-05-14"),
          },
          {
            id: 2,
            name: "London Marathon",
            location: "London, UK",
            distance: RacesEnum.Trka10km,
            races: [
              { distance: RacesEnum.Trka10km, date: new Date("2023-06-20") },
              { distance: RacesEnum.Trka21km, date: new Date("2023-06-21") },
            ],
            date: new Date("2023-06-19"),
          },
          {
            id: 3,
            name: "Berlin Marathon",
            location: "Berlin, Germany",
            distance: RacesEnum.Trka21km,
            races: [
              { distance: RacesEnum.Trka21km, date: new Date("2023-07-25") },
              { distance: RacesEnum.Trka41km, date: new Date("2023-07-26") },
            ],
            date: new Date("2023-07-24"),
          },
          {
            id: 4,
            name: "Chicago Marathon",
            location: "Chicago, USA",
            distance: RacesEnum.Trka5km,
            races: [
              { distance: RacesEnum.Trka5km, date: new Date("2023-09-10") },
              { distance: RacesEnum.Trka10km, date: new Date("2023-09-11") },
            ],
            date: new Date("2023-09-09"),
          },
          {
            id: 5,
            name: "Tokyo Marathon",
            location: "Tokyo, Japan",
            distance: RacesEnum.Trka10km,
            races: [
              { distance: RacesEnum.Trka10km, date: new Date("2023-10-15") },
              { distance: RacesEnum.Trka21km, date: new Date("2023-10-16") },
            ],
            date: new Date("2023-10-14"),
          },
          {
            id: 6,
            name: "Paris Marathon",
            location: "Paris, France",
            distance: RacesEnum.Trka21km,
            races: [
              { distance: RacesEnum.Trka21km, date: new Date("2023-11-12") },
              { distance: RacesEnum.Trka41km, date: new Date("2023-11-13") },
            ],
            date: new Date("2023-11-11"),
          },
          {
            id: 7,
            name: "Boston Marathon",
            location: "Boston, USA",
            distance: RacesEnum.Trka5km,
            races: [
              { distance: RacesEnum.Trka5km, date: new Date("2024-04-15") },
              { distance: RacesEnum.Trka10km, date: new Date("2024-04-16") },
            ],
            date: new Date("2024-04-14"),
          },
          {
            id: 8,
            name: "Sydney Marathon",
            location: "Sydney, Australia",
            distance: RacesEnum.Trka10km,
            races: [
              { distance: RacesEnum.Trka10km, date: new Date("2024-07-08") },
              { distance: RacesEnum.Trka21km, date: new Date("2024-07-09") },
            ],
            date: new Date("2024-07-07"),
          },
          {
            id: 9,
            name: "Rome Marathon",
            location: "Rome, Italy",
            distance: RacesEnum.Trka21km,
            races: [
              { distance: RacesEnum.Trka21km, date: new Date("2024-09-21") },
              { distance: RacesEnum.Trka41km, date: new Date("2024-09-22") },
            ],
            date: new Date("2024-09-20"),
          },
          {
            id: 10,
            name: "Rio de Janeiro Marathon",
            location: "Rio de Janeiro, Brazil",
            distance: RacesEnum.Trka5km,
            races: [
              { distance: RacesEnum.Trka5km, date: new Date("2024-11-15") },
              { distance: RacesEnum.Trka10km, date: new Date("2024-11-16") },
            ],
            date: new Date("2024-11-14"),
          },
        ]
      };
    }
  }