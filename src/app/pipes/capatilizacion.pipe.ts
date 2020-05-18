import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capatilizacion'
})
export class CapatilizacionPipe implements PipeTransform {

  transform(text: string): string {
    const ARRAYTEXT = Array.from(text);
    let mayus: string;
    for (let index = 0; index < ARRAYTEXT.length; index++) {
      const element = ARRAYTEXT[0].toUpperCase();
      mayus = element;
    }
    ARRAYTEXT.shift();
    return `${mayus}${ARRAYTEXT.join('')}`;
  }

}
