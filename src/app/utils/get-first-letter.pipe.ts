import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstWord'
})
export class GetFirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    
    const words = value.split('');
    if (words.length > 0) {
      return words[0];
    } else {
      return '';
    }
  }
}
