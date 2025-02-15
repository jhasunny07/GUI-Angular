import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {

  activeTab: string = ''; // Keeps track of the currently active non-routing tab

  setActiveTab(tabName: string): void {
    this.activeTab = tabName; // Update the active tab
  }
}
