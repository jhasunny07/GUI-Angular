import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-backup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})


export class BackupComponent {
  onFileDropped(event: any) {
    console.log('Files dropped:', event);
  }
}
