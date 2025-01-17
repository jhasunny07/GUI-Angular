import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gateway',
  standalone: true,
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css'],
  imports: [CommonModule, FormsModule]
})
export class GatewayComponent {
  showFormFor: string | null = null;
  ipv4Gateways = [
    { name: '24online', ip: '10.31.31.1', weight: 1, type: 'Primary', backup: 'N/A' }
  ];
  ipv6Gateways: { name: string; ip: string; weight: number; type: string; backup: string }[] = [];
  newGateway = {
    name: '',
    ip: '',
    weight: 1,
    type: 'Primary', // Default to Primary
    backup: '',
    priority: 'Yes', // Default to Yes
    networksRouted: []
  };

  // Function to add or edit a gateway
  submitForm() {
    if (this.isEditing && this.selectedGatewayIndex !== null) {
      // Update existing gateway
      this.ipv4Gateways[this.selectedGatewayIndex] = { ...this.newGateway };
    } else {
      // Add new gateway
      this.ipv4Gateways.push({ ...this.newGateway });
    }
    this.resetForm();
  }



  // Reset the form to default state
  resetForm() {
    this.newGateway = {
      name: '',
      ip: '',
      weight: 1,
      type: 'Primary',
      backup: '',
      priority: 'Yes',
      networksRouted: []
    };
    this.isEditing = false;
    this.selectedGatewayIndex = null;
    this.showFormFor = null; // Hide the form
  }

  // Toggle the visibility of the form
  toggleForm(type: string) {
    this.showFormFor = this.showFormFor === type ? null : type;
  }

  isEditing = false;
  selectedGatewayIndex: number | null = null;


 

  // Function to add a new IPv6 gateway
  addIPv6Gateway() {
    this.ipv6Gateways.push({ ...this.newGateway });
    this.resetForm();
  }

  // Validation for form submission (you can expand this further as needed)
  validateForm() {
    // Check if required fields are filled (like name, ip, etc.)
    return this.newGateway.name && this.newGateway.ip && this.newGateway.weight;
  }


  // Function to edit a gateway
editGateway(gateway: any) {
  this.newGateway = { ...gateway };
  this.isEditing = true;
  this.selectedGatewayIndex = this.ipv4Gateways.indexOf(gateway); // Use the correct array based on your needs
  this.showFormFor = 'ipv4'; // Show the form for editing
}

// Function to delete a gateway
deleteGateway(index: number) {
  // Ensure there is at least one gateway
  if (this.ipv4Gateways.length > 1) {
    this.ipv4Gateways.splice(index, 1);
  } else {
    alert('At least one gateway must be present.');
  }
}
}
