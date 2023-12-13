import { Component, OnInit } from '@angular/core';
import { MarathonsService, UserService } from '../../data.services';
import { Marathon, MarathonsDb } from 'src/app/models/marathon.interface';
import { UsersDb } from 'src/app/models/user.intereface';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  constructor(private userService: UserService, private marathonsService: MarathonsService) { };
  public marathonsSeparated: MarathonsDb[] = [] as MarathonsDb[];
  public futureMarathons: Marathon[] = [] as Marathon[];
  public pastMarathons: Marathon[] = [] as Marathon[];

  marathons: MarathonsDb = this.marathonsService.createDb();
  users: UsersDb = this.userService.createDb();
  ngOnInit() {

    this.futureMarathons = this.marathons.marathons.filter((marathon) => marathon.date > new Date())
    this.pastMarathons = this.marathons.marathons.filter((marathon) => marathon.date < new Date())

  }

}
