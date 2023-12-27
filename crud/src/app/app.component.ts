import { Component, OnInit } from '@angular/core';
import { SharedService } from './modules/shared-module/shared.service';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private titleService: Title,
    private sharedService: SharedService,
  ) { };



  async ngOnInit() {
    this.sharedService.PopulateIfEmptyDb();
    this.titleService.setTitle('Marathons Page');
  }
}
