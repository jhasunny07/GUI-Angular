import { Component } from '@angular/core';
import { FirewallCreateComponent } from '../firewall-create/firewall-create.component';
import { FirewallManageComponent } from '../firewall-manage/firewall-manage.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-firewall',
  standalone: true,
  templateUrl: './firewall-widget.component.html',
  styleUrls: ['./firewall-widget.component.css'],
  imports:[ FirewallCreateComponent, FirewallManageComponent, CommonModule]
})
export class FirewallWidgetComponent {
  isCreateOpen = true; // Default open state for Create (independent state)
  isManageOpen = true; // Default open state for Manage (independent state)

  // Toggle the Create widget
  toggleCreate(): void {
    this.isCreateOpen = !this.isCreateOpen; // Only toggle Create state
  }

  // Toggle the Manage widget
  toggleManage(): void {
    this.isManageOpen = !this.isManageOpen; // Only toggle Manage state
  }
}






