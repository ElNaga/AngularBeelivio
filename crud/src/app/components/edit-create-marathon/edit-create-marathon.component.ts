import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RacesEnum } from 'src/app/enums/marthon-enums.enum';
import { Marathon, Race } from 'src/app/models/marathon.interface';

@Component({
  selector: 'app-edit-create-marathon',
  templateUrl: './edit-create-marathon.component.html',
  styleUrls: ['./edit-create-marathon.component.css'],
})
export class EditCreateMarathonComponent {
  constructor(
    public dialogRef: MatDialogRef<EditCreateMarathonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { marathon: Marathon },
    private fb: FormBuilder
  ) {
    console.log('LOGGING FROM CONSTRUCTOR EditCreateMarathonComponent MODAL COMPONENT \n', data)
  }



  addRace(): void {
    this.data.marathon.races.push([] as unknown as Race)
  }

  onSubmit(): void {
    // console.log('subbmited form', this.marathonForm.value)
  }

  ngOnInit() {

    // Check if the entering object is empty, then set a flag!
  }

}
