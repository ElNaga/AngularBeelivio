import { Component, Input } from '@angular/core';
import { Marathon } from 'src/app/models/marathon.interface';

@Component({
  selector: 'app-marathon-row-card',
  templateUrl: './marathon-row-card.component.html',
  styleUrls: ['./marathon-row-card.component.css']
})
export class MarathonRowCardComponent {
@Input() marathonData: Marathon = {} as Marathon;
}
