import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Race } from 'src/app/models/marathon.interface';

@Component({
  selector: 'app-races-admin-panel-modal',
  templateUrl: './races-admin-panel-modal.component.html',
  styleUrls: ['./races-admin-panel-modal.component.css']
})
export class RacesAdminPanelModalComponent implements OnInit {
  @Input() races: Race[] = [] as Race[];
  constructor(
    private fb: FormBuilder,
  ) { }

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
    const raceGroup = this.fb.group({
      distance: ['', Validators.required],
      date: ['', [Validators.required, Validators.required]],
    });
    this.racesControls.push(raceGroup);
  }

  ngOnInit() {
    for (let race of this.races) {
      this.addRaceControl();
    }
  }

  public addRace() {
    console.log("Activvating ADD RACE");
    this.races.push(this.emptyRace);
    this.addRaceControl();
  }

}
