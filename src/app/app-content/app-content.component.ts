import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule], // Import CommonModule here
})
export class AppContentComponent {
  @Input() darkMode: boolean = false;

  apps: { name: string; routerLink?: string; href?: string; icon: string }[] = [
    { name: 'Network', routerLink: '/list-of-items', icon: 'fas fa-network-wired' },
    { name: 'Firewall', routerLink: '/firewall', icon: 'fas fa-shield-alt' },
    { name: 'DHCP', routerLink: '/dhcp-management',  icon: 'fas fa-server' },
    { name: 'Services', routerLink: '/user-management', icon: 'fas fa-cogs' },
    { name: 'Console', routerLink: '/backup', icon: 'fas fa-terminal' },
    { name: 'Manage Data', routerLink: '/backup-restore', icon: 'fas fa-database' },
    { name: 'Client Services', href: '/', icon: 'fas fa-users' },
    { name: 'ACL', routerLink: '/access-control', icon: 'fas fa-lock' },
    { name: 'Dynamic DNS Service', href: '/', icon: 'fas fa-globe' },
    { name: 'Captive Portal', href: '/', icon: 'fas fa-wifi' },
    { name: 'NAS Management', href: '/', icon: 'fas fa-hdd' },
  ];

  Policy = [
    { name: 'Surfing Quota', routerLink: '/policy', icon: 'fas fa-tachometer-alt' },
    { name: 'Access Time', href: '/', icon: 'fas fa-clock' },
    { name: 'Bandwidth', href: '/', icon: 'fas fa-network-wired' },
  ];

  Package = [
    { name: 'Package1', href: '/', icon: 'fas fa-box' },
    { name: 'Invoice', href: '/', icon: 'fas fa-file-invoice' },
    { name: 'Invoice Template', href: '/', icon: 'fas fa-file-alt' },
    { name: 'Ancillary Services', href: '/', icon: 'fas fa-cogs' },
    { name: 'Tax Information', href: '/', icon: 'fas fa-file-invoice-dollar' },
  ];

  Payment: { name: string; routerLink?: string; href?: string; icon: string }[] = [
    { name: 'Configure', href: '/', icon: 'fas fa-cogs' },
    { name: 'Merchant', href: '/', icon: 'fas fa-store' },
    { name: 'Search Transaction', routerLink: '/search-transaction', icon: 'fas fa-search' },
  ];

  Pin = [
    { name: 'Batch Management', href: '/', icon: 'fas fa-box' },
    { name: 'Register User By Pin', href: '/', icon: 'fas fa-id-card' },
    { name: 'Renew User By Pin', href: '/', icon: 'fas fa-sync-alt' },
    { name: 'Topup User By Pin', href: '/', icon: 'fas fa-credit-card' },
    { name: 'Coupon Template', href: '/', icon: 'fas fa-ticket-alt' },
    { name: 'Purchase Online Pin', href: '/', icon: 'fas fa-shopping-cart' },
    { name: 'Online Pin Purchase', href: '/', icon: 'fas fa-cart-arrow-down' },

    { name: 'Invoice', href: '/', icon: 'fas fa-file-invoice' },
    { name: 'Invoice Template', href: '/', icon: 'fas fa-file-alt' },
    { name: 'Ancillary Services', href: '/', icon: 'fas fa-cogs' },
    { name: 'Tax Information', href: '/', icon: 'fas fa-file-invoice-dollar' },
  ];

  // Dynamic color based on darkMode
  get appNameColor() {
    return this.darkMode ? '#ffffff' : '#000000';
  }

  // Variables for toggling sections
  showAllApps = false;
  showAllPolicy = false;
  showAllPackage = false;
  showAllPayment = false;
  showAllPin = false;

  // Displayed sections for each category
  displayed = {
    apps: [] as { name: string; routerLink?: string; href?: string; icon: string }[],
    policy: [] as { name: string; routerLink?: string; href?: string; icon: string }[],
    package: [] as { name: string;  routerLink?: string; href?: string; icon: string }[],
    Payment: [] as { name: string; routerLink?: string; href?: string; icon: string }[],
    pin: [] as { name: string; href?: string; icon: string }[],
  };

  constructor() {
    this.updateDisplayed();
  }

  // Check if the user is on mobile view (screen width < 768px)
  isMobileView(): boolean {
    return window.innerWidth < 768;
  }

  // Update the displayed sections based on screen size
  updateDisplayed(): void {
    if (this.isMobileView()) {
      this.displayed.apps = this.apps.slice(0, 8); // Show only the first 8 apps for mobile
      this.displayed.policy = this.Policy.slice(0, 8);
      this.displayed.package = this.Package.slice(0, 8);
      this.displayed.Payment = this.Payment.slice(0, 8);
      this.displayed.pin = this.Pin.slice(0, 8);
    } else {
      this.displayed.apps = this.apps;
      this.displayed.policy = this.Policy;
      this.displayed.package = this.Package;
      this.displayed.Payment = this.Payment;
      this.displayed.pin = this.Pin;
    }
  }

  // HostListener for window resize events to update the app display based on screen size
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateDisplayed();
  }

  // Toggle the visibility of sections like apps, policy, etc.
  toggleView(section: string): void {
    if (section === 'apps') {
      this.showAllApps = !this.showAllApps;
      this.displayed.apps = this.showAllApps ? this.apps : this.apps.slice(0, 8);
    } else if (section === 'policy') {
      this.showAllPolicy = !this.showAllPolicy;
      this.displayed.policy = this.showAllPolicy ? this.Policy : this.Policy.slice(0, 8);
    } else if (section === 'package') {
      this.showAllPackage = !this.showAllPackage;
      this.displayed.package = this.showAllPackage ? this.Package : this.Package.slice(0, 8);
    } else if (section === 'payment') {
      this.showAllPayment = !this.showAllPayment;
      this.displayed.Payment = this.showAllPayment ? this.Payment : this.Payment.slice(0, 8);
    } else if (section === 'pin') {
      this.showAllPin = !this.showAllPin;
      this.displayed.pin = this.showAllPin ? this.Pin : this.Pin.slice(0, 8);
    }
  }
}
