import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  reports = [
    { id: 1, name: 'Internet Usage', icon: 'fas fa-wifi' },        // Icon for Internet Usage
    { id: 2, name: 'MIS', icon: 'fas fa-chart-line' },              // Icon for Management Information System (MIS)
    { id: 3, name: 'Sales Report', icon: 'fas fa-dollar-sign' },    // Icon for Sales Report
    { id: 4, name: 'Ticket Report', icon: 'fas fa-ticket-alt' },    // Icon for Ticket Report
    { id: 5, name: 'Audit Log', icon: 'fas fa-clipboard-list' },    // Icon for Audit Log
    { id: 6, name: 'Comments Report', icon: 'fas fa-comment-dots' },// Icon for Comments Report
    { id: 7, name: 'Advance Renewal', icon: 'fas fa-calendar-check' }, // Icon for Advance Renewal
    { id: 8, name: 'Pin Reports', icon: 'fas fa-thumbtack' },      // Icon for Pin Reports
  ];

}
