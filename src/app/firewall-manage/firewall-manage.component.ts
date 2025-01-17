import { Component } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-firewall-manage',
  templateUrl: './firewall-manage.component.html',
  styleUrls: ['./firewall-manage.component.css'],
  standalone: true,
  imports: [NgIf, NgForOf, FormsModule, CommonModule],
})
export class FirewallManageComponent {
  firewallRules = [
    {
      source: '192.168.0.1',
      sourcePort: '8080',
      sourceMac: '00:1B:44:11:3A:B7',
      destination: '192.168.1.1',
      destinationPort: '80',
      action: 'Allow',
      protocol: 'TCP',
      startTime: '2024-01-01 10:00:00',
      endTime: '2024-01-01 18:00:00',
      uploadData: '500MB',
      downloadData: '1GB',
      bandwidth: '100 Mbps',
      actionBy: 'Admin',
      actionDate: '2024-01-01',
      description: 'Allow traffic to web server',
      selected: false, // Ensure this is a boolean
    },
    {
      source: '10.0.0.1',
      sourcePort: '22',
      sourceMac: '00:1A:44:22:4B:A8',
      destination: '10.0.0.2',
      destinationPort: '22',
      action: 'Deny',
      protocol: 'UDP',
      startTime: '2024-01-02 08:00:00',
      endTime: '2024-01-02 20:00:00',
      uploadData: '300MB',
      downloadData: '700MB',
      bandwidth: '50 Mbps',
      actionBy: 'Admin',
      actionDate: '2024-01-02',
      description: 'Block SSH traffic',
      selected: false, // Ensure this is a boolean
    },
  ];
}
