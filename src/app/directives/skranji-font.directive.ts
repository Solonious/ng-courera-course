import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSkranjiFont]'
})
export class SkranjiFontDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.fontFamily = "'Skranji', cursive";
  }

}
