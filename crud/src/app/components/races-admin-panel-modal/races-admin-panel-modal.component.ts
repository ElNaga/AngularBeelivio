import { Component, Input } from '@angular/core';
import { Race } from 'src/app/models/marathon.interface';

@Component({
  selector: 'app-races-admin-panel-modal',
  templateUrl: './races-admin-panel-modal.component.html',
  styleUrls: ['./races-admin-panel-modal.component.css']
})
export class RacesAdminPanelModalComponent {
  @Input() races: Race[] = [] as Race[];
  constructor() { }

}
