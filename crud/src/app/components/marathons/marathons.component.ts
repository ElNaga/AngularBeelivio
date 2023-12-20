import { Component } from '@angular/core';
import { MarathonsService, UserService } from 'src/app/data.services';
import { MarathonsDb } from 'src/app/models/marathon.interface';
import { SharedService } from 'src/app/modules/shared-module/shared.service';

@Component({
  selector: 'app-marathons',
  templateUrl: './marathons.component.html',
  styleUrls: ['./marathons.component.css']
})
export class MarathonsComponent {
  public MarathonsDB: MarathonsDb = {} as MarathonsDb;

  constructor(private userService: UserService, private marathonsService: MarathonsService, private sharedService: SharedService) { };

  ngOnInit() {
    this.MarathonsDB = this.sharedService.marathons;
  }
}
