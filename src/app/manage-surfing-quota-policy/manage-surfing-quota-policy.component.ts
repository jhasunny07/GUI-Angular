import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-surfing-quota-policy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-surfing-quota-policy.component.html',
  styleUrls: ['./manage-surfing-quota-policy.component.css']
})
export class ManageSurfingQuotaPolicyComponent {
  policies = [
    {
      id: 1,
      name: 'Basic Policy',
      type: 'Absolute',
      allottedTime: '5:00',
      unlimitedTime: false,
      sessionPulse: 5,
      expiry: 30,
      unlimitedExpiry: false,
      cycleType: 'Daily',
      description: 'This is a basic surfing quota policy.'
    },
    {
      id: 2,
      name: 'Premium Policy',
      type: 'Ratebased',
      allottedTime: '',
      unlimitedTime: true,
      sessionPulse: 0,
      expiry: null,
      unlimitedExpiry: true,
      cycleType: 'Monthly',
      description: 'Premium policy for unlimited access.'
    }
  ];

  // Temporary variable to hold the selected policy for editing
  selectedPolicy: any = null;

  // Trigger edit mode
  editPolicy(policy: any) {
    this.selectedPolicy = { ...policy };
  }

  // Save edited policy
  savePolicy() {
    const index = this.policies.findIndex(p => p.id === this.selectedPolicy.id);
    if (index !== -1) {
      this.policies[index] = { ...this.selectedPolicy };
    }
    this.selectedPolicy = null;
  }

  // Delete a policy
  deletePolicy(id: number) {
    this.policies = this.policies.filter(policy => policy.id !== id);
  }

  // Cancel editing
  cancelEdit() {
    this.selectedPolicy = null;
  }
}
