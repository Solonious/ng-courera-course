import { Pipe, PipeTransform } from '@angular/core';

import transcribe from 'rune-converter';


@Pipe({
  name: 'runeConverter'
})
export class RuneConverterPipe implements PipeTransform {

  transform(value: string, spacing?): string {
    return transcribe(value, spacing ? {spacing} : {spacing: 'normal'});
  }

}
