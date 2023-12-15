import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Marathon } from 'src/app/models/marathon.interface';
import { MatDialog } from '@angular/material/dialog';
import { MaratonDescriptionComponent } from '../maraton-description/maraton-description.component';

@Component({
  selector: 'app-past-card',
  templateUrl: './past-card.component.html',
  styleUrls: ['./past-card.component.css']
})
export class PastCardComponent {
  @Input() pastMarathons: Marathon[] = [] as Marathon[];
  constructor(public dialog: MatDialog) { }

  searchString: string = '';
  shouldSort: boolean = false;

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  openModal(marathonData: Marathon): void {
    this.dialog.open(MaratonDescriptionComponent, {
      width: '40%',
      data: { marathon: marathonData }
    });
  }
}
