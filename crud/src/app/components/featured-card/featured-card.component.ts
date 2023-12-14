import { Component, Input, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core'
import { Marathon, MarathonsDb } from 'src/app/models/marathon.interface';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.css']
})
export class FeaturedCardComponent implements OnInit {
  @Input() futureMarathons: Marathon[] = [] as Marathon[];
  searchString: string = '';
  shouldSort: boolean = false;

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  printInput (string: any): void {
    console.log(string);
  }
  
  async ngOnInit() {
    console.log( 'this is from future card',this.futureMarathons)
    console.log( 'this is from future card',this.futureMarathons)
  }
}
