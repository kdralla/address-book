import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'awesome' })
/** Precede the input string with the word "Contact name: " */
export class AwesomePipe implements PipeTransform {
  transform(phrase: string) {
    return phrase ? 'Contact Name:  ' + phrase : '';
  }
}
