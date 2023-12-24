import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Marathon, Race } from 'src/app/models/marathon.interface';

@Component({
  selector: 'app-edit-create-marathon',
  templateUrl: './edit-create-marathon.component.html',
  styleUrls: ['./edit-create-marathon.component.css'],
})
export class EditCreateMarathonComponent {
  isEditMode: boolean = false;
  @Output() closeEvent = new EventEmitter<boolean>();

  constructor(
    public dialogRef: MatDialogRef<EditCreateMarathonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { marathon: Marathon },
    private fb: FormBuilder,
  ) {
    console.log('LOGGING FROM CONSTRUCTOR EditCreateMarathonComponent MODAL COMPONENT \n', data);
  }

  racesForm = this.fb.group({
    raceDistance: [0, Validators.required],
    raceDate: [new Date(), Validators.required]
  })

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

  isEmptyObjectOnEntry() {
    this.isEditMode = (!!this.data.marathon.name);
  }

  addRace(): void {
    this.data.marathon.races.push([] as unknown as Race)
    this.addRaceControl();
  }

  ngOnInit() {
    console.log('\n\n\n');
    console.log(this.racesForm)
  }

  close(): void {
    console.log('logging fro mclose function');
    this.closeEvent.emit();
  }
}
