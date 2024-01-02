import { Component, OnInit } from '@angular/core';
import { Marathon } from 'src/app/models/marathon.interface';
import { SharedService } from 'src/app/modules/shared-module/shared.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  constructor(private sharedService: SharedService) { };

  public futureMarathons: Marathon[] = [];
  public pastMarathons: Marathon[] = [];

  async ngOnInit(): Promise<void> {

    console.log('From main-body comp:', this.sharedService.futureMarathons)
    await this.sharedService.PopulateIfEmptyDb();
    this.futureMarathons = this.sharedService.futureMarathons
    this.pastMarathons = this.sharedService.pastMarathons
  }
}
