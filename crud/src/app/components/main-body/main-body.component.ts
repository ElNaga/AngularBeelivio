import { Component } from '@angular/core';
import { MarathonsService, UserService } from '../../data.services';
import { MarathonsDb } from 'src/app/models/marathon.interface';
import { UsersDb } from 'src/app/models/user.intereface';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {
  constructor(private userService: UserService, private marathonsService: MarathonsService) { };

  marathons: MarathonsDb = this.marathonsService.createDb();
  users: UsersDb = this.userService.createDb();

  
  
}
