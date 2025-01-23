import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ip-lease-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ip-lease-report.component.html',
  styleUrls: ['./ip-lease-report.component.css']
})
export class IpLeaseReportComponent implements OnInit  {
  ipLeases: any[] = [];
  showModal = false;  // Controls the visibility of the modal
  mobileNumber = '';
  selectedIdentifier = '';
  currentLease: any = null;  // Tracks

  constructor() {}

  ngOnInit(): void {
    // Sample Data with added Auth Status
    this.ipLeases = [
      {
        clientName: 'Client 1',
        ipAddress: '192.168.1.101',
        macAddress: '00:14:22:01:23:45',
        leaseStart: new Date('2025-01-20T08:00:00'),
        leaseEnd: new Date('2025-01-21T08:00:00'),
        status: 'Active',
        authStatus: 'Unauthenticated'
      },
      {
        clientName: 'Client 2',
        ipAddress: '192.168.1.102',
        macAddress: '00:14:22:01:23:46',
        leaseStart: new Date('2025-01-18T09:00:00'),
        leaseEnd: new Date('2025-01-19T09:00:00'),
        status: 'Expired',
        authStatus: 'Authenticated'
      },
      // Add more sample leases as needed
    ];
  }

  openLoginModal(lease: any): void {
    this.currentLease = lease;  // Track the lease that triggered the modal
    this.showModal = true;  // Open the modal
  }

  closeLoginModal(): void {
    this.showModal = false;
    this.currentLease = null;
  }

  submitLogin(): void {
    // Logic for handling the login process
    console.log('Mobile:', this.mobileNumber);
    console.log('Selected Identifier:', this.selectedIdentifier);

    // Update the current lease's Auth Status after successful login
    if (this.currentLease) {
      this.currentLease.authStatus = 'Authenticated';  // Update the auth status
    }

    // Reset the modal and form fields
    this.showModal = false;
    this.mobileNumber = '';
    this.selectedIdentifier = '';
    alert('Login Submitted!');
  }
}
