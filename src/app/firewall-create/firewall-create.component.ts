import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-firewall-create',
  templateUrl: './firewall-create.component.html',
  styleUrls: ['./firewall-create.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class FirewallCreateComponent {
  firewallRule = {
    sourceInfo: '',
    destinationInfo: '',
    sourceMac: '',
    sourcePort: '',
    sourcePortType: 'include',
    destinationPort: '',
    destinationPortType: 'include',
    protocol: 'TCP',
    action: '',
    timeAllow: 'No',
    description: '',
  };

  onSubmit() {
    console.log('Firewall Rule Created:', this.firewallRule);
    alert('Firewall Rule Created Successfully!');
  }

  onCancel() {
    console.log('Operation Cancelled');
    alert('Creation Cancelled');
  }
}
