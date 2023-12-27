import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BloodType, RacesEnum } from './enums/marthon-enums.enum';
import { MarathonsDb } from './models/marathon.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor() { }
  createDb() {
    return {
      users: [
        {
          id: 1,
          name: 'Marko Markovski',
          age: 55,
          raceCount: 3,
          userDetails: [{
            marathonIds: [1],
            emergencyContact: '911',
            bloodtype: BloodType.O_POSITIVE,
          }]
        },
        {
          id: 2,
          name: 'Tome Tomeski',
          age: 32,
          raceCount: 1,
          userDetails: [{
            marathonIds: [1],
            emergencyContact: '911',
            bloodtype: BloodType.O_POSITIVE,
          }]
        },
        {
          id: 3,
          name: 'Martin Stolevski',
          age: 21,
          raceCount: 7,
          userDetails: [{
            marathonIds: [1],
            emergencyContact: '911',
            bloodtype: BloodType.O_POSITIVE,
          }]
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
            { distance: RacesEnum.Trka21km, date: new Date("2023-05-16") },
          ],
          date: new Date("2023-05-14"),
          description: "The New York City Marathon is one of the world's largest and most famous marathons, attracting runners from all over the globe. The course takes you through all five boroughs of New York City, offering a diverse and exciting running experience."
        },
        {
          id: 2,
          name: "London Marathon",
          location: "London, UK",
          distance: RacesEnum.Trka10km,
          races: [
            // { distance: RacesEnum.Trka10km, date: new Date("2023-06-20") },
            { distance: RacesEnum.Trka21km, date: new Date("2023-06-21") },
          ],
          date: new Date("2023-06-19"),
          description: "The London Marathon is one of the major marathons in the world, known for its scenic route that takes runners past famous landmarks like the Tower Bridge and Buckingham Palace."
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
          description: "The Berlin Marathon is renowned for its flat and fast course, making it a favorite among elite and recreational runners. It's a great opportunity to set personal records."
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
          description: "The Chicago Marathon is known for its vibrant atmosphere and enthusiastic crowd support. Runners can enjoy the scenic views of the city's iconic architecture along the course."
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
          description: "The Tokyo Marathon offers a unique blend of traditional Japanese culture and modern city life. Runners can experience the rich history and futuristic architecture of Tokyo while participating in the race."
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
          description: "The Paris Marathon is one of the most scenic marathons in the world, offering runners stunning views of iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral."
        }, {
          id: 6,
          name: "Paris Marathon",
          location: "Paris, France",
          distance: RacesEnum.Trka21km,
          races: [
            { distance: RacesEnum.Trka21km, date: new Date("2023-11-12") },
            { distance: RacesEnum.Trka41km, date: new Date("2023-11-13") },
          ],
          date: new Date("2023-11-11"),
          description: "The Paris Marathon is one of the most scenic marathons in the world, offering runners stunning views of iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral."
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
          description: "The Boston Marathon is one of the oldest and most prestigious marathons in the world, known for its challenging course and historic route that passes through various neighborhoods of Boston."
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
          description: "The Sydney Marathon is set against the backdrop of the stunning Sydney Harbour and offers runners a mix of urban and scenic routes, showcasing the beauty of the city."
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
          description: "The Rome Marathon provides runners with a unique opportunity to run through the historic streets of Rome, passing by ancient ruins, famous monuments, and charming neighborhoods."
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
          description: "The Rio de Janeiro Marathon is known for its picturesque coastal course, taking runners along the beautiful beaches of Rio and offering breathtaking views of the city's iconic landmarks."
        },
      ]
    };
  }
}