import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import {  RouterModule, RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';



@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, SidebarComponent, FormsModule, NgChartsModule, RouterModule, RouterOutlet,
    CanvasJSAngularChartsModule], 
})
export class AppComponent {}
