import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]',
})
export class BetterDirectiveDirective implements OnInit {
  constructor(private eleRef: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.setStyle(
      this.eleRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
