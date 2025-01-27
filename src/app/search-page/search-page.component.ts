import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
    searchCriteria = {
    fromDate: '',
    toDate: '',
    transactionId: '',
    username: '',
    paymentGateway: '',
    transactionStatus: 'all',
    ignoreDateFilter: false
  };

  paymentGateways = ['PayPal', 'Stripe', 'Razorpay', 'PayU', 'Square'];

  allTransactions = [
    { date: '2025-01-24', transactionId: 'TXN001', username: 'JohnDoe', paymentGateway: 'PayPal', status: 'Success', amount: 100 },
    { date: '2025-01-23', transactionId: 'TXN002', username: 'JaneDoe', paymentGateway: 'Stripe', status: 'Failed', amount: 200 },
    { date: '2025-01-22', transactionId: 'TXN003', username: 'MikeSmith', paymentGateway: 'Razorpay', status: 'Success', amount: 300 },
    { date: '2025-01-21', transactionId: 'TXN004', username: 'AnnaTaylor', paymentGateway: 'PayU', status: 'Success', amount: 400 },
    { date: '2025-01-20', transactionId: 'TXN005', username: 'ChrisEvans', paymentGateway: 'Square', status: 'Failed', amount: 500 },
    { date: '2025-01-19', transactionId: 'TXN006', username: 'EmilyClark', paymentGateway: 'PayPal', status: 'Success', amount: 600 },
    { date: '2025-01-18', transactionId: 'TXN007', username: 'RobertBrown', paymentGateway: 'Stripe', status: 'Failed', amount: 700 },
    { date: '2024-12-25', transactionId: 'TXN9701', username: 'JohnDoe', paymentGateway: 'PayU', status: 'Success', amount: 715.12 },
    { date: '2024-11-25', transactionId: 'TXN2735', username: 'JimHalpert', paymentGateway: 'PayPal', status: 'Failed', amount: 629.21 },
    { date: '2024-01-05', transactionId: 'TXN9367', username: 'OscarMartinez', paymentGateway: 'Authorize.Net', status: 'Failed', amount: 320.04 },
    { date: '2024-04-25', transactionId: 'TXN5573', username: 'KevinMalone', paymentGateway: 'Google Pay', status: 'Failed', amount: 840.76 },
    { date: '2024-08-26', transactionId: 'TXN4232', username: 'MeredithPalmer', paymentGateway: 'Google Pay', status: 'Pending', amount: 722.38 },
    { date: '2024-02-04', transactionId: 'TXN3918', username: 'CreedBratton', paymentGateway: 'PayPal', status: 'Success', amount: 236.35 },
    { date: '2024-12-07', transactionId: 'TXN1919', username: 'MichaelScott', paymentGateway: 'Square', status: 'Failed', amount: 198.18 },
    { date: '2024-12-12', transactionId: 'TXN5273', username: 'OscarMartinez', paymentGateway: 'PayPal', status: 'Failed', amount: 380.83 },
    { date: '2024-08-23', transactionId: 'TXN1166', username: 'AngelaMartin', paymentGateway: 'Square', status: 'Success', amount: 413.92 },
    { date: '2024-03-16', transactionId: 'TXN6431', username: 'JimHalpert', paymentGateway: 'Google Pay', status: 'Failed', amount: 520.88 },
    { date: '2024-03-12', transactionId: 'TXN9233', username: 'StanleyHudson', paymentGateway: 'Google Pay', status: 'Failed', amount: 355.28 },
    { date: '2024-03-10', transactionId: 'TXN7623', username: 'RyanHoward', paymentGateway: 'Google Pay', status: 'Failed', amount: 314.07 },
    { date: '2024-01-23', transactionId: 'TXN1247', username: 'MeredithPalmer', paymentGateway: 'Google Pay', status: 'Pending', amount: 497.71 },
    { date: '2024-08-30', transactionId: 'TXN9310', username: 'DarrylPhilbin', paymentGateway: 'Square', status: 'Failed', amount: 920.0 },
    { date: '2024-12-13', transactionId: 'TXN6076', username: 'OscarMartinez', paymentGateway: 'PayPal', status: 'Pending', amount: 600.84 },
    { date: '2024-12-24', transactionId: 'TXN6653', username: 'DarrylPhilbin', paymentGateway: 'PayU', status: 'Pending', amount: 920.17 },
    { date: '2024-01-03', transactionId: 'TXN9385', username: 'RyanHoward', paymentGateway: 'Google Pay', status: 'Success', amount: 600.38 },
    { date: '2024-08-18', transactionId: 'TXN6581', username: 'PhyllisLapin', paymentGateway: 'Stripe', status: 'Failed', amount: 431.65 },
    { date: '2024-10-12', transactionId: 'TXN2351', username: 'DarrylPhilbin', paymentGateway: 'Authorize.Net', status: 'Pending', amount: 471.74 },
    { date: '2024-11-23', transactionId: 'TXN9221', username: 'RyanHoward', paymentGateway: 'Google Pay', status: 'Pending', amount: 301.03 },
    { date: '2024-03-22', transactionId: 'TXN7139', username: 'AndyBernard', paymentGateway: 'Google Pay', status: 'Success', amount: 419.19 },
    { date: '2024-05-17', transactionId: 'TXN2487', username: 'MichaelScott', paymentGateway: 'PayU', status: 'Failed', amount: 567.42 },
    { date: '2024-01-20', transactionId: 'TXN2226', username: 'JaneSmith', paymentGateway: 'Google Pay', status: 'Success', amount: 153.76 },
    { date: '2024-09-22', transactionId: 'TXN3143', username: 'KevinMalone', paymentGateway: 'Google Pay', status: 'Failed', amount: 793.71 },
    { date: '2024-11-21', transactionId: 'TXN3210', username: 'StanleyHudson', paymentGateway: 'Stripe', status: 'Pending', amount: 750.51 },
    { date: '2024-06-03', transactionId: 'TXN8486', username: 'DarrylPhilbin', paymentGateway: 'PayPal', status: 'Success', amount: 369.64 },
    { date: '2024-02-03', transactionId: 'TXN5847', username: 'JaneSmith', paymentGateway: 'Square', status: 'Failed', amount: 113.59 },
    { date: '2024-03-11', transactionId: 'TXN8590', username: 'KevinMalone', paymentGateway: 'PayPal', status: 'Failed', amount: 324.34 },
    { date: '2024-04-14', transactionId: 'TXN4259', username: 'StanleyHudson', paymentGateway: 'Authorize.Net', status: 'Pending', amount: 91.18 },
    { date: '2024-10-05', transactionId: 'TXN8695', username: 'StanleyHudson', paymentGateway: 'Stripe', status: 'Pending', amount: 557.3 }
  ];

  transactions = [...this.allTransactions]; // Filtered transactions to display in the table

  search() {
    // Reset the displayed transactions to the full list
    this.transactions = [...this.allTransactions];

    // Apply filters based on search criteria
    if (this.searchCriteria.transactionId) {
      this.transactions = this.transactions.filter(txn =>
        txn.transactionId.toLowerCase().includes(this.searchCriteria.transactionId.toLowerCase())
      );
    }

    if (this.searchCriteria.username) {
      this.transactions = this.transactions.filter(txn =>
        txn.username.toLowerCase().includes(this.searchCriteria.username.toLowerCase())
      );
    }

    if (this.searchCriteria.paymentGateway) {
      this.transactions = this.transactions.filter(txn =>
        txn.paymentGateway === this.searchCriteria.paymentGateway
      );
    }

    if (this.searchCriteria.transactionStatus !== 'all') {
      this.transactions = this.transactions.filter(txn =>
        txn.status.toLowerCase() === this.searchCriteria.transactionStatus.toLowerCase()
      );
    }

    if (!this.searchCriteria.ignoreDateFilter) {
      if (this.searchCriteria.fromDate) {
        this.transactions = this.transactions.filter(txn =>
          new Date(txn.date) >= new Date(this.searchCriteria.fromDate)
        );
      }
      if (this.searchCriteria.toDate) {
        this.transactions = this.transactions.filter(txn =>
          new Date(txn.date) <= new Date(this.searchCriteria.toDate)
        );
      }
    }

    // Handle no results found
    if (this.transactions.length === 0) {
      console.log('No transactions found for the given criteria.');
    }
  }

  sort(column: keyof typeof this.allTransactions[0]) {
    this.transactions = this.transactions.sort((a, b) => {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    });
  }
}
