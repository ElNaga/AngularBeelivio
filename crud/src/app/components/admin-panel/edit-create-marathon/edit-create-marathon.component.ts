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

  /// Imported code start

  emptyRace = {
    distance: 0,
    date: new Date(),
  }


  racesForm = this.fb.group({
    racesControl: this.fb.array([])
  });


  get racesControls() {
    return this.racesForm.get('racesControl') as FormArray;
  }

  addRaceControl() {
    console.log('This is being called from the emmit, and is working from edit-create component');
    const raceGroup = this.fb.group({
      distance: ['', Validators.required],
      date: ['', Validators.required],
    });

    this.racesControls.push(raceGroup);
  }

  /// Imported code end

  marathonForm = this.fb.group({
    name: ['', Validators.required],
    location: ['', Validators.required],
    date: [new Date(), Validators.required],
    description: ['', Validators.required],
    distance: [0, Validators.required],
  });

  isEmptyObjectOnEntry() {
    this.isEditMode = (!!this.data.marathon.name);
  }

  addRace(): void {
    this.data.marathon.races.push({ ...this.emptyRace })
    this.addRaceControl();
  }

  ngOnInit() {
    console.log('\n\n\n this is init on edit-create ');
    for (let race of this.data.marathon.races) {
      console.log(this.data.marathon.races)
      this.addRaceControl();
    }
  }

  close(): void {
    console.log('logging from close function');
    console.log('races FORM!', this.racesForm.valid)
    console.log('marathon FORM!', this.marathonForm.valid);

    let formsValidity = (this.marathonForm.valid && this.racesForm.valid);

    this.closeEvent.emit(formsValidity);
  }
}
