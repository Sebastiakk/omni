import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData',
})
export class FilterPipe implements PipeTransform {

  public transform(data: any[], searchText: string) {
    if (!searchText) {
      return data;
    }
    return data.map(i => {
      i.filter = `${i.name} ${i.model} ${i.brand}`;
      return i;
    }).filter(i => i?.['filter']?.toLowerCase().includes(searchText.trim().toLowerCase()));
  }
}
