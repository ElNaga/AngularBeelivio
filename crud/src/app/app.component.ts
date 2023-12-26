import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

import { Title } from '@angular/platform-browser';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private titleService: Title,
    private dbService: NgxIndexedDBService,
  ) { };



  async ngOnInit() {
    this.titleService.setTitle('Marathons Page');
    this.dbService
      .add('users',
        { UserName: `Bruce Wayne` })
      .subscribe((key) => {
        console.log('key: ', key);
      });
  }
}
