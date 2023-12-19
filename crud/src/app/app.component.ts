import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

import { MarathonsService, UserService } from './data.services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService, private marathonsService: MarathonsService, private titleService: Title) { };

  async ngOnInit() {
    this.titleService.setTitle('Marathons Page')
  }
}
