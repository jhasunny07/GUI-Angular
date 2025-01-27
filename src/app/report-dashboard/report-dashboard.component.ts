import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ChartOptions, ChartData, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-report-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  template: `
    <div class="container my-4">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center mb-4">Internet Usage Report</h2>
        </div>
      </div>

      <!-- Top Summary Cards -->
      <div class="row mb-4">
        <div class="col-md-3" *ngFor="let card of summaryCards">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text display-5">{{ card.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Chart for Date-wise Internet Usage -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">Internet Usage (MB) Over Time</h5>
            </div>
            <div class="card-body">
              <canvas baseChart
                      [datasets]="chartData.datasets"
                      [labels]="chartData.labels"
                      [options]="chartOptions"
                      [type]="chartType"></canvas>
            </div>
          </div>
        </div>
      </div>

      <!-- Internet Usage Report Table -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">Date-wise Internet Usage</h5>
            </div>
            <div class="card-body p-0">
              <table class="table table-striped table-hover mb-0">
                <thead class="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Usage (GB)</th>
                    <th>Peak Hour</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let report of reports; let i = index">
                    <td>{{ i + 1 }}</td>
                    <td>{{ report.date | date }}</td>
                    <td>{{ report.usage }}</td>
                    <td>{{ report.peakHour }}</td>
                    <td><span [ngClass]="getStatusClass(report.status)">{{ report.status }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 1200px;
      }

      .card {
        border-radius: 8px;
      }

      .table {
        margin-bottom: 0;
      }

      .badge-success {
        color: #fff;
        background-color: #28a745;
      }

      .badge-warning {
        color: #212529;
        background-color: #ffc107;
      }

      .badge-danger {
        color: #fff;
        background-color: #dc3545;
      }
    `,
  ],
})
export class ReportDashboardComponent {
  summaryCards = [
    { title: 'Total Usage (GB)', value: 1200 },
    { title: 'Average Daily Usage (GB)', value: 40 },
    { title: 'Peak Hour Usage (GB)', value: 100 },
    { title: 'Number of Active Days', value: 30 },
  ];

  reports = [
    { date: new Date('2025-01-01'), usage: 42, peakHour: '8 PM', status: 'Normal' },
    { date: new Date('2025-01-02'), usage: 38, peakHour: '9 PM', status: 'Normal' },
    { date: new Date('2025-01-03'), usage: 50, peakHour: '7 PM', status: 'High' },
    { date: new Date('2025-01-04'), usage: 32, peakHour: '10 PM', status: 'Low' },
  ];

  chartData = {
    labels: this.reports.map(report => report.date.toLocaleDateString()), // Convert dates to string format
    datasets: [
      {
        data: this.reports.map(report => report.usage * 1000), // Convert GB to MB
        label: 'Usage (MB)',
        fill: false,
        borderColor: '#007bff',
        tension: 0.1,
      },
    ],
  };

  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Usage (MB)',
        },
        min: 0,
      },
    },
  };

  chartType: ChartType = 'line'; // Line chart type

  getStatusClass(status: string): string {
    switch (status) {
      case 'Normal':
        return 'badge badge-success';
      case 'High':
        return 'badge badge-warning';
      case 'Low':
        return 'badge badge-danger';
      default:
        return '';
    }
  }
}
