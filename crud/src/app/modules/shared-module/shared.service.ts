import { Injectable } from '@angular/core';
import { UserService } from '../../data.services';
import { MarathonsService } from '../../data.services';
import { Marathon, MarathonsDb } from 'src/app/models/marathon.interface';
import { UsersDb } from 'src/app/models/user.intereface';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    public futureMarathons: Marathon[];
    public pastMarathons: Marathon[];
    public marathons: MarathonsDb;

    public users: UsersDb;

    constructor(
        private userService: UserService,
        private marathonsService: MarathonsService
    ) {
        this.marathons = this.marathonsService.createDb();
        this.users = this.userService.createDb();
        this.futureMarathons = [] as Marathon[];
        this.pastMarathons = [] as Marathon[];

        this.initialiseMarathons();
    }

    public initialiseMarathons(): void {
        const currentDate = new Date();
        this.futureMarathons = this.marathons.marathons.filter(marathon => marathon.date > currentDate);
        this.pastMarathons = this.marathons.marathons.filter(marathon => marathon.date < currentDate);
    }
}