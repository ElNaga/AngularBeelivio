import { BloodType } from "../enums/marthon-enums.enum";
import { Marathon } from "./marathon.interface";

export interface User {
    id: number;
    name: string;
    age: number;
    raceCount: number;
  }
  
  export interface UsersDb {
    users: User[];
  }

  export interface UserDetails {
    bloodtype: BloodType;
    emergencyContact: string;
    marathon: Marathon[]
  }