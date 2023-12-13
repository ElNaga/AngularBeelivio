import { Component } from '@angular/core';
import { MarathonsService, UserService } from '../../data.services';
import { Marathon, MarathonsDb } from 'src/app/models/marathon.interface';
import { UsersDb } from 'src/app/models/user.intereface';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {
  constructor(private userService: UserService, private marathonsService: MarathonsService) { };
    public futureMarathons: MarathonsDb = {} as MarathonsDb;
    public pastMarathons: MarathonsDb =  {} as MarathonsDb;
    public marathonsSeparated: MarathonsDb[] = [] as MarathonsDb[];

  marathons: MarathonsDb = this.marathonsService.createDb();
  users: UsersDb = this.userService.createDb();

  private getFutureAndPastMarathons(marathons: MarathonsDb): MarathonsDb[] {
    const dateNow = new Date().getTime();
    const futureMarathons = { marathons: [] as Marathon[] };
    const pastMarathons = { marathons: [] as Marathon[] };

    for (const marathon of marathons.marathons) {
      const dateMarathon = new Date(marathon.date).getTime();
      if (dateNow <= dateMarathon) {
        futureMarathons.marathons.push(marathon);
      } else {
        pastMarathons.marathons.push(marathon);
      }
    }
    return [futureMarathons, pastMarathons];
  }
  
  ngOnInit() {
    this.initializeMarathons();
    console.log(this.marathonsSeparated);
  }

  private initializeMarathons(): void {
    this.marathonsSeparated = this.getFutureAndPastMarathons(this.marathons);
    // [this.futureMarathons, this.pastMarathons] = marathonsSeparated;
  }
}
