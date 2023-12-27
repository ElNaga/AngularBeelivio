import { BloodType } from "../enums/marthon-enums.enum";

export interface UserDetailsSchema {
  bloodtype: BloodType;
  emergencyContact: string;
  marathonIds: number[]; // ids of marathons
}

export interface User {
  id: number;
  name: string;
  age: number;
  raceCount: number;
  userDetails: UserDetailsSchema[];
}

export interface UsersDb {
  users: User[];
}
