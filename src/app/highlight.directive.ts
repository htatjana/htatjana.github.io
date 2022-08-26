import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    const color = localStorage.getItem('color');

    if (color) {
      this.el.nativeElement.innerHTML = color;
      this.el.nativeElement.style.backgroundColor = color;
    }
  }
}
