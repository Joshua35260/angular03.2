import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLightDirective]'
})
export class HighLightDirectiveDirective implements OnInit {


  
  @HostBinding('style.backgroundColor') myBackgroundColor:string | undefined;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }



  ngOnInit(): void {
      // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow');
  }

@HostListener('mouseenter') mouseEnterEvent (eventData: Event) {
  // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow');
  this.myBackgroundColor = "yellow"
}
@HostListener('mouseleave') mouseLeaveEvent (eventData: Event) {
  // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', '');
  this.myBackgroundColor = ""
}

}
