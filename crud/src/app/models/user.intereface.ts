import { BloodType } from "../enums/marthon-enums.enum";
import { Marathon } from "./marathon.interface";

export interface UserDetailsSchema {
  bloodtype: BloodType;
  emergencyContact: string;
  marathon: Marathon[]
}

export interface User {
  id: number;
  name: string;
  age: number;
  raceCount: number;
  // userDetails: UserDetailsSchema[];
}

export interface UsersDb {
  users: User[];
}
