import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent {
  showButton: boolean = false;
  @HostListener('window:scroll')
  onWindowScroll() {
    this.showButton = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 400;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
