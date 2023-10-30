import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if (value) {
      return value.forEach((val: any) => {
        value.indexOf(val) >= 0
      });
    } else
      return value
  }

}
