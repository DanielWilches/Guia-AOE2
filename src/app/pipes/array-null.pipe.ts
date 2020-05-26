import { Pipe, PipeTransform } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import { newArray } from '@angular/compiler/src/util';

@Pipe({
  name: 'arrayNull'
})
export class ArrayNullPipe implements PipeTransform {

  transform(array: any[]) {
    if (array === undefined) {
      const arrayNew = ['none'];
      return arrayNew;
    } else if  (array.length === 0 ) {
      const arrayNew = ['none'];
      return arrayNew;
    } else {
      return array;
    }
  }

}
