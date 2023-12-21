import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Marathon, Race } from 'src/app/models/marathon.interface';

@Component({
  selector: 'app-edit-create-marathon',
  templateUrl: './edit-create-marathon.component.html',
  styleUrls: ['./edit-create-marathon.component.css'],
})
export class EditCreateMarathonComponent {
  constructor(
    public dialogRef: MatDialogRef<EditCreateMarathonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { marathon: Marathon }
  ) {
    console.log('LOGGING FROM CONSTRUCTOR MODAL COMPONENT \n', data)
  }

  addRace(): void {
    this.data.marathon.races.push([] as unknown as Race)
  }

  ngOnInit() {

    // Check if the entering object is empty, then set a flag!
  }

}
