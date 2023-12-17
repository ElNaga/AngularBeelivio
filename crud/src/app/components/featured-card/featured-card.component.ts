import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core'
import { Marathon, MarathonsDb } from 'src/app/models/marathon.interface';
import { MatDialog } from '@angular/material/dialog';
import { MaratonDescriptionComponent } from '../maraton-description/maraton-description.component';


@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.css']
})
export class FeaturedCardComponent implements OnInit {
  @Input() futureMarathons: Marathon[] = [] as Marathon[];
  constructor(public dialog: MatDialog) { }

  searchString: string = '';
  shouldSort: boolean = false;

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  printInput(string: any): void {
    console.log(string);
  }

  async ngOnInit() {
    console.log('this is from future card', this.futureMarathons)
  }

  openModal(marathonData: Marathon): void {
    this.dialog.open(MaratonDescriptionComponent, {
      data: {marathon: marathonData},
      panelClass: 'future-card-modal'
    });
  }
}
