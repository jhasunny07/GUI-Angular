import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  schemas: [NO_ERRORS_SCHEMA],
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @Input() chartOptions: any;
  collapsed = true;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  onRender() {
    console.log('Chart rendered.');
  }
}
