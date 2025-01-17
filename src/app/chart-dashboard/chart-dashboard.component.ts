import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';

@Component({
  standalone: true,
  imports: [ChartComponent],
  selector: 'app-chart-dashboard',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.css']
})
export class ChartDashboardComponent {
  charts = [
    { options: this.createChartOptions('Chart 1', 'column') },
    { options: this.createChartOptions('Chart 2', 'line') },
    { options: this.createChartOptions('Chart 3', 'pie') },
    { options: this.createChartOptions('Chart 4', 'bar') },
    { options: this.createChartOptions('Chart 5', 'area') }
  ];

  // Creates chart configuration options dynamically
  createChartOptions(title: string, type: string) {
    return {
      animationEnabled: true,
      title: {
        text: title
      },
      data: [
        {
          type: type,
          dataPoints: [
            { label: 'A', y: 10 },
            { label: 'B', y: 20 },
            { label: 'C', y: 30 },
            { label: 'D', y: 40 }
          ]
        }
      ]
    };
  }
}
