import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'xss'
})
export class XssPipe implements PipeTransform {

  // wird durch interpolation abgefangen
  transform(value: unknown, ...args: unknown[]): unknown {
    let hash = '<b>' + value + '</b>';
    console.log(hash);
    return hash;
  }

}
