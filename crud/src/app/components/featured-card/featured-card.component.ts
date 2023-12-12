import { Component, Input } from '@angular/core';
import { Marathon, MarathonsDb } from 'src/app/models/marathon.interface';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.css']
})
export class FeaturedCardComponent {
  @Input() marathons: MarathonsDb = {} as MarathonsDb;

  getFutureMarathons(marathons: MarathonsDb): MarathonsDb {
    const dateNow = new Date().getTime();
    const futureMarathons = {marathons: [] as Marathon[]};

    for (const marathon of marathons.marathons) {
      const dateMarathon = new Date(marathon.date).getTime();
      if (dateNow <= dateMarathon) {
        futureMarathons.marathons.push(marathon)};
      }
      return futureMarathons;
    }

  }
