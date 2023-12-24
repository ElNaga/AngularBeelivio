import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { race } from 'rxjs';
import { RacesEnum } from 'src/app/enums/marthon-enums.enum';
import { Marathon, Race } from 'src/app/models/marathon.interface';

@Component({
  selector: 'app-edit-create-marathon',
  templateUrl: './edit-create-marathon.component.html',
  styleUrls: ['./edit-create-marathon.component.css'],
})
export class EditCreateMarathonComponent {
  // marathonForm = this.fb.group({
  //   name: [this.isEditMode ? this.data.marathon.name : '', Validators.required],
  //   location: [this.isEditMode ? this.data.marathon.location : '', Validators.required],
  //   date: [this.isEditMode ? this.data.marathon.date : new Date(), Validators.required],
  //   description: [this.isEditMode ? this.data.marathon.description : '', Validators.required],
  // });

  isEditMode: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<EditCreateMarathonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { marathon: Marathon },
    private fb: FormBuilder,
  ) {
    // this.isEmptyObjectOnEntry();
    console.log('LOGGING FROM CONSTRUCTOR EditCreateMarathonComponent MODAL COMPONENT \n', data);
  }

  racesForm = this.fb.group({
    raceDistance: [0, Validators.required],
    raceDate: [new Date(), Validators.required]
  })

  // get races() {
  // return this.marathonForm.get('races') as FormArray;
  // }

  addRaceControl() {
    const racesForm = this.fb.group({
      raceDistance: [0, Validators.required],
      raceDate: [new Date(), Validators.required]
    })
    // this.races.push(racesForm);
  }

  marathonForm = this.fb.group({
    name: ['', Validators.required],
    location: ['', Validators.required],
    date: [new Date(), Validators.required],
    description: ['', Validators.required],
    distance: [0, Validators.required],
    // races: this.fb.array([])
  });

  // get races() {
  //   return this.marathonForm.get('races') as FormArray;
  // }

  isEmptyObjectOnEntry() {
    this.isEditMode = (!!this.data.marathon.name);
  }



  addRace(): void {
    this.data.marathon.races.push([] as unknown as Race)
    this.addRaceControl();
  }

  onSubmit(): void {
    // console.log('subbmited form', this.marathonForm.value)
  }

  ngOnInit() {
    console.log('\n\n\n');
    console.log(this.racesForm)
  }
}
