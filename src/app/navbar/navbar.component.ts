import { Component, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import { Router, RouterModule } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RightSidebarComponent, RouterModule, SearchBarComponent],
})
export class NavbarComponent {
  isDropdownVisible = false;
  navbarColor: string = '#079cc6';  // Default navbar color (white)

  @ViewChild(RightSidebarComponent) rightSidebar!: RightSidebarComponent;
  @ViewChild('userIcon') userIcon: any;
  @ViewChild('dropdownMenu') dropdownMenu: any;

  // Injecting Router to handle navigation
  constructor(private router: Router) {}

  // Toggle the dropdown visibility when clicking on the user icon
  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  // Toggle right sidebar visibility
  toggleRightSidebar() {
    if (this.rightSidebar) {
      this.rightSidebar.toggleSidebar();
    }
  }

  // Method to handle suggestion selection from the search bar
  onSuggestionSelected(route: string) {
    this.router.navigate([route]); // Navigate to the selected route
  }

  // Navigate to the home page when logo is clicked
  handleLogoClick(): void {
    this.router.navigate(['/home']); // Navigate to the home page
  }

  // Listen for outside clicks to close the dropdown menu
  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (this.userIcon && this.dropdownMenu) {
      const isClickOutside = !this.userIcon.nativeElement.contains(event.target)
                            && !this.dropdownMenu.nativeElement.contains(event.target);
      if (isClickOutside) {
        this.isDropdownVisible = false;
      }
    }
  }
}
