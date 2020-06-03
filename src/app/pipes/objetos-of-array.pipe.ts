import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objetosOfArray'
})
export class ObjetosOfArrayPipe implements PipeTransform {

  transform(obj: object): string[] {
    if ( obj === null ) {
      return ['no hay datos en este campo'];
    }
    const COSTKEY: string[] = [];
    const COSTVALUE: string[] = [];
    Object.keys(obj).forEach(key => {
      COSTKEY.push(key);
      COSTVALUE.push(obj[key]);
    });
    console.log(COSTKEY, COSTVALUE);
    return  COSTKEY && COSTVALUE ;
  }
}
