import { Injectable } from '@angular/core';
import { UserService } from '../../data.services';
import { MarathonsService } from '../../data.services';
import { Marathon, MarathonsDb } from 'src/app/models/marathon.interface';
import { UsersDb } from 'src/app/models/user.intereface';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { firstValueFrom, take } from 'rxjs';

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

        this.dbService.getAll('marathons');

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
        this.initialiseMarathons();
    }

    private async checkIfDbIsPopulated(): Promise<boolean> {
        let lengthDb: number;
        let checkedValue: boolean;
        const dbMarathons = await firstValueFrom(this.dbService
            .getAll('marathons'))

        lengthDb = dbMarathons.length;


        return (lengthDb > 0);
    }
    // private checkIfDbIsPopulated(): boolean {
    //     let lengthDB: number;
    //     let checkedValue: boolean;
    //     const dbMarathons = this.dbService
    //         .getAll('marathons')
    //         .subscribe({
    //             next: (v) => {
    //                 lengthDB = v.length;
    //                 if (lengthDB >= 0) {
    //                     console.log(dbMarathons)
    //                     checkedValue = true;
    //                 } else {
    //                     checkedValue = false;
    //                 }
    //                 console.log("This is length of VVVV  ", lengthDB)
    //             },
    //             error: (e) => console.error(e),
    //             complete: () => console.info('complete')
    //         });

    //     return checkedValue;
    // }

    public initialiseMarathons(): void {
        const currentDate = new Date();
        this.futureMarathons = this.marathons.marathons.filter(marathon => marathon.date > currentDate);
        this.pastMarathons = this.marathons.marathons.filter(marathon => marathon.date < currentDate);
    }
}