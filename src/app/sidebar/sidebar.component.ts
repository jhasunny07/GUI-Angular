import { Component, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContentComponent } from '../app-content/app-content.component';
import { Router, NavigationStart, RouterModule, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, AppContentComponent, RouterModule],
})
export class SidebarComponent implements OnInit, OnDestroy {
  darkMode = false;
  selectedSection: string | null = null;
  isSubmenuActive = false;
  selectedSubmenu: string | null = null;
  isAppGridVisible = false;
  isReportVisible = false;
  sidebar: HTMLElement;
  isHomeSidebarOpen = false;
  private clickListener: (() => void) | null = null;
  private routerSubscription: any;
  searchQuery: string = '';

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private router: Router
  ) {
    this.sidebar = this.elementRef.nativeElement;

    // Close all sidebars on navigation
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeAllSidebars();
      }
    });
  }

  ngOnInit() {
    // Add click listener to close sidebars when clicking outside
    this.clickListener = this.renderer.listen('document', 'click', (event: Event) => {
      const clickedInside = this.sidebar.contains(event.target as HTMLElement);
      if (!clickedInside) {
        this.closeAllSidebars();
      }
    });

    // Close all sidebars on route change
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.closeAllSidebars();
      }
    });
  }

  ngOnDestroy() {
    // Clean up event listeners and subscriptions
    if (this.clickListener) {
      this.clickListener();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  closeAllSidebars() {
    this.isHomeSidebarOpen = false;
    this.isAppGridVisible = false;
    this.isReportVisible = false;
    this.isSubmenuActive = false;
    this.selectedSection = null;
    this.selectedSubmenu = null;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  toggleAppGrid() {
    this.closeAllSidebars(); // Close all other sidebars before opening AppGrid
    this.isAppGridVisible = !this.isAppGridVisible;
    this.selectedSection = null;
  }

  toggleReport() {
    this.closeAllSidebars(); // Close all other sidebars before toggling Report
    this.isReportVisible = !this.isReportVisible;
    console.log('isReportVisible:', this.isReportVisible);
  }

  handleMainItemClick(section: string, event: MouseEvent) {
    event.stopPropagation(); // Prevent document click listener
    this.closeAllSidebars(); // Close all sidebars before selecting a section
    this.selectedSection = section;
    this.isHomeSidebarOpen = true;
  }

  handleSubmenuClick(submenu: string, event: MouseEvent) {
    event.stopPropagation(); // Prevent document click listener
    this.selectedSubmenu = submenu;
    this.isSubmenuActive = true;
  }

  goBackToSecondSidebar(event: MouseEvent) {
    event.stopPropagation(); // Prevent document click listener
    this.isSubmenuActive = false;
    this.selectedSubmenu = null;
  }

  openSidebarFromSearch(query: string) {
    if (query) {
      this.closeAllSidebars(); // Close all sidebars before opening the search result
      this.selectedSection = 'System'; // Example: Open 'System' section
      this.selectedSubmenu = 'Network'; // Example: Open 'Network' submenu
      this.isSubmenuActive = true;
      this.isHomeSidebarOpen = true;
    }
  }
}
