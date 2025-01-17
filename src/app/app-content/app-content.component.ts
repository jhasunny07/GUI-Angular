import { Component, Input } from '@angular/core';
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

apps = [
    {
      name: "Network",
      routerLink: "/list-of-items",
      icon: "fas fa-network-wired",
     
    },
    {
      name: "Firewall",
      routerLink: "/firewall",
      icon: "fas fa-shield-alt",
     
    },
    {
      name: "DHCP",
      href: "/",
      icon: "fas fa-server",
     
    },
    { name: "Services", href: "/", icon: "fas fa-cogs" },
    { name: "Console", href: "/", icon: "fas fa-terminal" },
    {
      name: "Manage Data",
      href: "/",
      icon: "fas fa-database",
     
    },
  
    {
      name: "Client Services",
      href: "/",
      icon: "fas fa-users",
     
    },
    {
      name: "ACL",
      href: "/",
      icon: "fas fa-lock",
     
    },
  
    {
      name: "Dynamic DNS Service",
      href: "/",
      icon: "fas fa-globe",
     
    },
  
    { name: "Captive Portal", href: "/", icon: "fas fa-wifi" },
    { name: "NAS Management", href: "/", icon: "fas fa-hdd" },
  ];


  
Policy = [
  { name: "Surfing Quota",  routerLink: "/policy", icon: "fas fa-tachometer-alt" },
  { name: "Access Time", href: "/", icon: "fas fa-clock" },
  { name: "Bandwidth", href: "/", icon: "fas fa-network-wired" },
];

Package = [
  {
    name: "Package",
    href: "/",
    icon: "fas fa-box",
    
  },
  {
    name: "Invoice",
    href: "/",
    icon: "fas fa-file-invoice",
   
  },
  { name: "Invoice Template", href: "/", icon: "fas fa-file-alt" },
  { name: "Ancillary Services", href: "/", icon: "fas fa-cogs" },
  { name: "Tax Information", href: "/", icon: "fas fa-file-invoice-dollar" },
];

Payment = [
  { name: "Configure", href: "/", icon: "fas fa-cogs" },
  { name: "Merchant", href: "/", icon: "fas fa-store" },
  { name: "Search Transaction", href: "/", icon: "fas fa-search" },
];

Pin = [
  { name: "Batch Management", href: "/", icon: "fas fa-box" },
  { name: "Register User By Pin", href: "/", icon: "fas fa-id-card" },
  { name: "Renew User By Pin", href: "/", icon: "fas fa-sync-alt" },
  { name: "Topup User By Pin", href: "/", icon: "fas fa-credit-card" },
  { name: "Coupon Template", href: "/", icon: "fas fa-ticket-alt" },
  { name: "Purchase Online Pin", href: "/", icon: "fas fa-shopping-cart" },
  { name: "Online Pin Purchase", href: "/", icon: "fas fa-cart-arrow-down" },
  
];

appNameStyle = {
  marginTop: "5px",
  fontSize: "12px",
  fontWeight: "bold",
  color: "#007bff",
};

// Dynamic color based on darkMode
get appNameColor() {
  return this.darkMode ? '#ffffff' : '#000000';
}

}
