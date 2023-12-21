import { Component } from '@angular/core';
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
