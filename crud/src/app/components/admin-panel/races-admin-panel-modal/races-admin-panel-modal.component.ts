import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  @Input() racesForm: any;
  @Output() addRaceControlEvent = new EventEmitter<boolean>;

  emptyRace = {
    distance: 0,
    date: new Date(),
  }

  ngOnInit() {
  }

  public addRace() {
    console.log("Activvating ADD RACE");
    this.races.push({ ...this.emptyRace });
    this.addRaceControlEvent.emit();
  }

}
