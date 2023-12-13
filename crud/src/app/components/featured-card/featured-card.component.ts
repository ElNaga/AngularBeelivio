import { Component, Input, OnInit } from '@angular/core';
import { Marathon, MarathonsDb } from 'src/app/models/marathon.interface';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.css']
})
export class FeaturedCardComponent implements OnInit {
  @Input() marathonsDated: MarathonsDb = {} as MarathonsDb;
  
  async ngOnInit() {
    console.log( this.marathonsDated)
  }
}
