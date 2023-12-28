import { Injectable } from '@angular/core';
import { UserService } from '../../data.services';
import { MarathonsService } from '../../data.services';
import { Marathon, MarathonsDb } from 'src/app/models/marathon.interface';
import { UsersDb } from 'src/app/models/user.intereface';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { firstValueFrom } from 'rxjs';

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
        private marathonsService: MarathonsService,
        private dbService: NgxIndexedDBService,
    ) {
        this.marathons = this.marathonsService.createDb();
        console.log('This are the marathons in Marathon Service', this.marathons);
        this.users = this.userService.createDb();
        this.futureMarathons = [] as Marathon[];
        this.pastMarathons = [] as Marathon[];
    }

    public async PopulateIfEmptyDb(): Promise<void> {
        if (await this.checkIfDbIsPopulated() === false) {
            console.warn('ENTERED IF')
            for (let marathonValue of this.marathons.marathons) {
                this.dbService
                    .add('marathons', { marathon: marathonValue })
                    .subscribe((key) => {
                        console.log('Added: ', key);
                    });
            }
        }
        await this.initialiseMarathons();
    }

    private async checkIfDbIsPopulated(): Promise<boolean> {
        let lengthDb: number;
        const dbMarathons = await firstValueFrom(this.dbService
            .getAll('marathons'))
        lengthDb = dbMarathons.length;
        return (lengthDb > 0);
    }


    public async initialiseMarathons(): Promise<void> {
        const currentDate = new Date();
        if (await this.checkIfDbIsPopulated()) {
            const allMarathons = await firstValueFrom(this.dbService.getAll('marathons'))
            const all: Marathon[] = allMarathons.flatMap((x: any) => x.marathon)
            console.log('These are mapped marathons with flatMap', all)
            console.log('this.marathons.marathons before OVERWRITE', this.marathons.marathons)
            this.marathons.marathons = all;
            console.log('These are "this.marathons.marathons"', this.marathons.marathons)
        }
        console.log(await firstValueFrom(this.dbService.getAll('marathons')));
        this.futureMarathons = this.marathons.marathons.filter(marathon => marathon.date > currentDate);
        console.log('This are the new future marathons!', this.futureMarathons);
        this.pastMarathons = this.marathons.marathons.filter(marathon => marathon.date < currentDate);
    }
}