import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

import { MarathonsService, UserService } from './data.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud';

  constructor(private userService: UserService, private marathonsService: MarathonsService) { };
  
  async ngOnInit() {
    // console.log( this.marathonsService.createDb())
    // console.log( this.userService.createDb())
  }
}
