import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Marathon } from 'src/app/models/marathon.interface';
import { IndexDbService } from 'src/app/indexDB/index-db-service.service';
import { SharedService } from 'src/app/modules/shared-module/shared.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-edit-create-marathon',
  templateUrl: './edit-create-marathon.component.html',
  styleUrls: ['./edit-create-marathon.component.css'],
})
export class EditCreateMarathonComponent {
  isEditMode: boolean = false;
  @Output() closeEvent = new EventEmitter<boolean>();

  constructor(
    private sharedService: SharedService,
    private dbService: IndexDbService,
    public dialogRef: MatDialogRef<EditCreateMarathonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { marathon: Marathon },
    private fb: FormBuilder,
  ) {
    console.log('LOGGING FROM CONSTRUCTOR EditCreateMarathonComponent MODAL COMPONENT \n', data);
  }

  todayDate = new Date();

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

  get validForm() {
    console.log(this.marathonForm.valid && this.racesForm.valid);
    return this.marathonForm.valid && this.racesForm.valid;
  }

  addRaceControl() {
    console.log('This is being called from the emmit, and is working from edit-create component');
    const raceGroup = this.fb.group({
      distance: ['', Validators.required],
      date: ['', Validators.required],
    });

    this.racesControls.push(raceGroup);
  }

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

  Close(): void {
    console.log('logging from close function');
    console.log('races FORM!', this.racesForm.valid)
    console.log('marathon FORM!', this.marathonForm.valid);

    this.closeEvent.emit(this.validForm);
  }

  async SaveMarathon(): Promise<void> {
    this.closeEvent.emit(this.validForm);
    this.dbService.AddOrUpdateMarathon('marathons', this.data.marathon).pipe(take(1)).subscribe((x) => console.log('added data: ', x));
    console.log('ASNDNAJEFASDANSDKKASDKASNDKNASKDNAKSDANSD', [this.data.marathon])
    this.sharedService.initialiseMarathons();
  }
}
