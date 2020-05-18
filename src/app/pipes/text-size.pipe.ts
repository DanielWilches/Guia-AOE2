import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSize'
})
export class TextSizePipe implements PipeTransform {

  transform( value: string): string {
    let forma: string[];
    let resul: string;
    let remove: string[];
    if (value.length > 25) {
      forma = Array.from(value);
      // en este punto nuestra cada se tramforma en array
      remove = forma.splice(21);
      // se elimina todos los valores apartir del indice 21
      resul = forma.join('');
      return `${resul}. . .`;
    }else {
      return  value;
    }
  }

}
