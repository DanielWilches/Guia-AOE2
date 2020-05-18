import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'armor'
})
export class ArmorPipe implements PipeTransform {

  transform(value: string): string{
    if (value === undefined){
      return 'none';
    }else {
      return value;
    }
  }

}
