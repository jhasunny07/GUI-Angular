import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartType } from 'chart.js';  // Import ChartType from Chart.js to define the type correctly
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart-widget',
  standalone: true,
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.css'],
  imports: [NgChartsModule, CommonModule]  // Import NgChartsModule for chart functionality
})
export class ChartWidgetComponent {

  // States for toggling chart visibility
  isSalesChartOpen = true;
  isBrowserChartOpen = true;
  isAdditionalChart1Open = true;
  isAdditionalChart2Open = true;
  isChart3Open = true;
  isChart4Open = true;

  // Data for the charts (static example data)
  salesChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Sales Data',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: false
    }]
  };
  
  browserUsageChartData = {
    labels: ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'],
    datasets: [{
      data: [60, 20, 10, 5, 5],
      backgroundColor: ['#FF5733', '#C70039', '#900C3F', '#581845', '#1C1C1C'],
      hoverBackgroundColor: ['#FF5733', '#C70039', '#900C3F', '#581845', '#1C1C1C']
    }]
  };

  additionalChart1Data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      data: [12, 19, 3],
      backgroundColor: ['red', 'blue', 'yellow'],
    }]
  };

  additionalChart2Data = {
    labels: ['Item A', 'Item B', 'Item C'],
    datasets: [{
      data: [15, 25, 60],
      backgroundColor: ['#E4E4E4', '#FCE2D0', '#8A2BE2'],
    }]
  };

  chart3Data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      label: 'Temperature Data',
      data: [25, 30, 22, 28, 35, 32, 40],
      fill: false,
      borderColor: 'rgba(255, 99, 132, 1)',
      tension: 0.1
    }]
  };

  chart4Data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Revenue',
      data: [1000, 2000, 1500, 2500],
      backgroundColor: ['#42A5F5', '#66BB6A', '#FFCA28', '#FF7043'],
      borderColor: '#fff',
      borderWidth: 1
    }]
  };

  // Define chart types explicitly using ChartType from 'chart.js'
  salesChartType: ChartType = 'line';
  browserUsageChartType: ChartType = 'pie';
  additionalChart1Type: ChartType = 'pie';
  additionalChart2Type: ChartType = 'bar';
  chart3Type: ChartType = 'line';
  chart4Type: ChartType = 'radar';

  chartOptions = { responsive: true };

  // Toggle functions for charts
  toggleSalesChart() {
    this.isSalesChartOpen = !this.isSalesChartOpen;
  }

  toggleBrowserChart() {
    this.isBrowserChartOpen = !this.isBrowserChartOpen;
  }

  toggleAdditionalChart1() {
    this.isAdditionalChart1Open = !this.isAdditionalChart1Open;
  }

  toggleAdditionalChart2() {
    this.isAdditionalChart2Open = !this.isAdditionalChart2Open;
  }

  toggleChart3() {
    this.isChart3Open = !this.isChart3Open;
  }

  toggleChart4() {
    this.isChart4Open = !this.isChart4Open;
  }
}
