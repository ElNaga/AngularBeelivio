import { Pipe, PipeTransform } from '@angular/core';
import { Marathon } from '../models/marathon.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(marathons: Marathon[], searchString: string, shouldSort: boolean): Marathon[] {
    if (!marathons) return [];
    let sortedMarathons = marathons;
    
    if (shouldSort) {
      sortedMarathons = sortedMarathons.slice().sort((a: Marathon, b: Marathon) => {
        return a.distance - b.distance
      })
    }
    
    if (!searchString) return sortedMarathons;


    searchString = searchString.toLowerCase();

    return sortedMarathons.filter(marathon => {
      return marathon.name.toLowerCase().includes(searchString) || marathon.location.toLowerCase().includes(searchString);
    });
  }

}
