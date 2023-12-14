import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Marathon } from 'src/app/models/marathon.interface';

@Component({
  selector: 'app-maraton-description',
  templateUrl: './maraton-description.component.html',
  styleUrls: ['./maraton-description.component.css']
})
export class MaratonDescriptionComponent {
  constructor(
    public dialogRef: MatDialogRef<MaratonDescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {marathon: Marathon}) {
      console.log(data)
    }

    isEditingDescription = false;

    

    getRaceClass(numberOfRaces: number): string {
      if (numberOfRaces === 1) {
          return 'one-race';
      } else if (numberOfRaces === 2) {
          return 'two-races';
      } else if (numberOfRaces === 3) {
          return 'three-races';
      } else {
          return 'four-or-more-races';
      }
  }
  
}
