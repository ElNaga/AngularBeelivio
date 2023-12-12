export interface User {
    id: number;
    name: string;
    age: number;
    raceCount: number;
  }
  
  export interface UsersDb {
    users: User[];
  }