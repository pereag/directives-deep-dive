import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    //this.renderer.listen(this.elRef.nativeElement, 'mouseenter', () => { this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');});
    //this.renderer.listen(this.elRef.nativeElement, 'mouseleave', () => { this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');})
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }

}
