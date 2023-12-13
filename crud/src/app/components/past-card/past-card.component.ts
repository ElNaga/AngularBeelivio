import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Marathon } from 'src/app/models/marathon.interface';

@Component({
  selector: 'app-past-card',
  templateUrl: './past-card.component.html',
  styleUrls: ['./past-card.component.css']
})
export class PastCardComponent {
@Input () pastMarathons: Marathon[] = [] as Marathon[];

color: ThemePalette = 'accent';
checked = false;
disabled = false;

}
