import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, ...args: number[]): string {
    if (value >= 1) {
      return '+ '+value
    }
    return ''+value
  }

}
