import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-firewall',
  standalone: true,
  templateUrl: './firewall.component.html',
  styleUrls: ['./firewall.component.css'],
  imports: [CommonModule, RouterModule]
})
export class FirewallComponent {

  activeTab: string = ''; // Keeps track of the currently active non-routing tab

  setActiveTab(tabName: string): void {
    this.activeTab = tabName; // Update the active tab
  }
}
