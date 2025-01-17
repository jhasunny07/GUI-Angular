import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel binding

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
  imports: [CommonModule, FormsModule], // Include FormsModule for ngModel binding
})
export class RightSidebarComponent implements OnInit {
  isOpen = false; // Toggle the sidebar open/close
  selectedNavbarColor: string = '#079cc6'; // Default navbar color
  selectedSidebarColor: string = '#f4f4f4'; // Default sidebar color
  selectedIconColor: string = '#000'; // Default app icon color
  selectedSidebarTextColor: string = '#000'; // Default sidebar text color

  ngOnInit(): void {
    // Load the colors from localStorage if available
    this.selectedNavbarColor = localStorage.getItem('navbarColor') || this.selectedNavbarColor;
    this.selectedSidebarColor = localStorage.getItem('sidebarColor') || this.selectedSidebarColor;
    this.selectedIconColor = localStorage.getItem('iconColor') || this.selectedIconColor;
    this.selectedSidebarTextColor = localStorage.getItem('sidebarTextColor') || this.selectedSidebarTextColor;

    // Apply the loaded colors
    this.applyNavbarColor();
    this.applySidebarColor();
    this.applyAppIconColor();
    this.applySidebarTextColor();
  }

  // Apply Color when "Apply" button is clicked
  applyNavbarColor(): void {
    const navbar = document.querySelector('nav') as HTMLElement;
    if (navbar) {
      navbar.style.backgroundColor = this.selectedNavbarColor;
    }
    localStorage.setItem('navbarColor', this.selectedNavbarColor); // Save to localStorage
  }

  applySidebarColor(): void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    if (sidebar) {
      sidebar.style.backgroundColor = this.selectedSidebarColor;
    }
    localStorage.setItem('sidebarColor', this.selectedSidebarColor); // Save to localStorage
  }

  applyAppIconColor(): void {
    const appIcon = document.querySelector('.app-icon svg') as HTMLElement;
    if (appIcon) {
      appIcon.style.fill = this.selectedIconColor;
    }
    localStorage.setItem('iconColor', this.selectedIconColor); // Save to localStorage
  }

  applySidebarTextColor(): void {
    const sidebarItems = document.querySelectorAll('.sidebar-item h6') as NodeListOf<HTMLElement>;
    sidebarItems.forEach(item => {
      item.style.color = this.selectedSidebarTextColor;
    });
    localStorage.setItem('sidebarTextColor', this.selectedSidebarTextColor); // Save to localStorage
  }

  // Toggle the sidebar open/close
  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  constructor(private readonly elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
