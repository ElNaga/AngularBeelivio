import { Component, OnInit } from '@angular/core';
import { MarathonsService, UserService } from '../../data.services';
import { Marathon, MarathonsDb } from 'src/app/models/marathon.interface';
import { UsersDb } from 'src/app/models/user.intereface';
import { SharedService } from 'src/app/modules/shared-module/shared.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {
  constructor(private sharedService: SharedService) { };
  public futureMarathons = this.sharedService.futureMarathons
  public pastMarathons = this.sharedService.pastMarathons
}
