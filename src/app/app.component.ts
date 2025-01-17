import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ChartDashboardComponent } from "./chart-dashboard/chart-dashboard.component";

import { PrimeNgTableComponent } from './primeng-table/primeng-table.component';



@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, SidebarComponent, FormsModule, NgChartsModule, RouterLink, RouterModule, RouterOutlet,
     CanvasJSAngularChartsModule, ChartDashboardComponent, PrimeNgTableComponent, ], 
})
export class AppComponent {}
