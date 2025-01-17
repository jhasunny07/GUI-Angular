import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-of-items',
  standalone: true,
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css'],
  imports: [CommonModule, RouterModule]
})
export class ListOfItemsComponent {

}
