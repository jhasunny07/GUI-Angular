import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-widget2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.css'],
  
 
})
export class Widget2Component {
  collapsedWidget2 = false;

  toggleCollapse() {
    this.collapsedWidget2 = !this.collapsedWidget2;
  }
}
