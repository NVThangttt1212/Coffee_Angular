import {AfterViewInit, Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[scrollAnimation]'
})
export class ScrollAnimationDirective {
  private isElementInView = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    this.isElementInView = rect.top <= windowHeight && rect.bottom >= 0;
    this.animate();
  }

  private animate() {
    if (this.isElementInView) {
      this.renderer.addClass(this.elementRef.nativeElement, 'fade-in');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'fade-in');
    }
  }
}

