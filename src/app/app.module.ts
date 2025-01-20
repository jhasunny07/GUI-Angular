import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule here
import { TableModule } from 'primeng/table';
import { PrimeNgTableComponent } from './primeng-table/primeng-table.component';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,   // This indicates that the app component is standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, SidebarComponent, FormsModule, TableModule, PrimeNgTableComponent, RouterModule] // Import FormsModule and other components here
  // Import FormsModule and other components here
})
export class AppComponent {}
