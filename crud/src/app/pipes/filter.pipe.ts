import { Pipe, PipeTransform } from '@angular/core';
import { Marathon } from '../models/marathon.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(shto: tipShto, filterString: tipString): outputTip{
  // if (!items) return [];
  // if (!searchTerm) return items;

  // filterString = this.filterString.toLowerCase();
  // return shto.filter(shto => {
  // return shto.name.tolowercase().icludes(filterString)
  // })
  // }

  // Magijata e transform() + angular Pipe library shto kje mi ovozmozhi da si go koristam direkt pipe-ot vo komponenta so dekorator @Pipe({name: KAKO_SE_VIKA_PIPE-ot})

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
    return marathons.filter(marathon => {
      return marathon.name.toLowerCase().includes(searchString) || marathon.location.toLowerCase().includes(searchString);
    })
  }

}
