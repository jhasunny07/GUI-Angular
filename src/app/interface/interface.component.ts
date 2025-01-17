

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interface',
  standalone: true,
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css'],
  imports: [CommonModule, FormsModule]
})
export class InterfaceComponent {
  // Sample data for interfaces, now includes IPv6
  interfaces = [
    { name: 'eth0', ip: '10.10.10.1', ipv6: 'fe80::1', netmask: '255.255.255.0', description: 'Internal Network' },
    { name: 'eth1', ip: '10.31.30.213', ipv6: 'fe80::2', netmask: '255.255.254.0', description: 'External Network' },
    { name: 'eth2', ip: '10.20.20.1', ipv6: 'fe80::3', netmask: '255.255.255.0', description: 'Backup Network' },
    { name: 'eth3', ip: '10.50.50.1', ipv6: 'fe80::4', netmask: '255.255.255.0', description: 'DMZ Network' },
    { name: 'eth4', ip: '10.60.60.1', ipv6: 'fe80::5', netmask: '255.255.254.0', description: 'Management Network' },
  ];

  // Variables to control the side panel state and hold the current interface data
  panelOpen = false;
  currentInterface: any = { name: '', ip: '', ipv6: '', netmask: '', description: '' };

  // Function to cancel editing and close the side panel
  cancelEdit() {
    this.panelOpen = false; // Close the side panel
    this.currentInterface = {}; // Reset the form data
  }

  // Function to open the side panel and load the interface for editing
  openEditPanel(interfaceData: any) {
    this.currentInterface = { ...interfaceData }; // Copy the interface data to the form
    this.panelOpen = true; // Open the side panel
  }

  // Function to close the side panel
  closeEditPanel() {
    this.panelOpen = false; // Close the side panel
  }

  // Function to submit the form and save changes to the interface
  submitForm() {
    // Find the index of the interface in the array
    const index = this.interfaces.findIndex(
      (interfaceObj: any) => interfaceObj.name === this.currentInterface.name
    );

    // If the interface is found, update it with new values
    if (index !== -1) {
      this.interfaces[index] = { ...this.currentInterface }; // Update the interface with new data
    }

    // Close the side panel after saving changes
    this.closeEditPanel();
  }

  // Function to handle adding an alias (can be customized)
  addAlias() {
    alert('Add Alias button clicked!');
  }
}
