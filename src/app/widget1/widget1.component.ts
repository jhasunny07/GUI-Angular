import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-widget1',
  standalone: true,  // This indicates that the component is standalone
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.css'],
  imports: [CommonModule  ]  // Import GoogleChartsModule here
})
export class Widget1Component {
  collapsed = false;

  // Data for the browser usage chart
 

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
