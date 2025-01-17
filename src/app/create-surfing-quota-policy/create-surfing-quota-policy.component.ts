import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-surfing-quota-policy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-surfing-quota-policy.component.html',
  styleUrls: ['./create-surfing-quota-policy.component.css']
})
export class CreateSurfingQuotaPolicyComponent {
  policy = {
    name: '',
    type: 'Absolute', // Default: Absolute
    allottedTime: '', // Time input is a string
    unlimitedTime: false,
    sessionPulse: 1,
    expiry: null as number | null, // Allow null for expiry
    unlimitedExpiry: false,
    cycleType: 'Daily',
    cycleAllottedTime: '',
    description: ''
  };

  onPolicyTypeChange() {
    if (this.policy.type === 'Ratebased') {
      this.policy.unlimitedTime = false;
      this.policy.unlimitedExpiry = false;
      this.policy.allottedTime = ''; // Clear allotted time
      this.policy.expiry = null; // Clear expiry
    }
  }

  // Method triggered when "Unlimited Time" is toggled
  onUnlimitedTimeChange() {
    if (this.policy.unlimitedTime) {
      this.policy.allottedTime = ''; // Clear allotted time
    }
  }

  // Method triggered when "Unlimited Expiry" is toggled
  onUnlimitedExpiryChange() {
    if (this.policy.unlimitedExpiry) {
      this.policy.expiry = null; // Clear expiry
    }
  }

  submitPolicy() {
    console.log('Policy created:', this.policy);
    // Add logic to save the policy or make API calls here
  }


  
}
