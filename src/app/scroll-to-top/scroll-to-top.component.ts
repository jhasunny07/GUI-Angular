import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css'],
  imports: [CommonModule],
})
export class ScrollToTopComponent {
  isVisible = false;
  private scrollCount = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > 100) {
      this.scrollCount++;
      if (this.scrollCount >= 2) {
        this.isVisible = true;
      }
    } else {
      this.scrollCount = 0;
      this.isVisible = true;
    }
  }

  scrollToTop(): void {
    // If the content is inside the content-wrapper
    const scrollableElement = document.querySelector('.content-wrapper');

    if (scrollableElement) {
      scrollableElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      // Default behavior for window scroll
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
