import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-backup-restore',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './backup-restore.component.html',
  styleUrls: ['./backup-restore.component.css']
})
export class BackupRestoreComponent {
  fileBackup: File | null = null;
  userSessionBackup: File | null = null;
  rrdBackup: File | null = null;

  // Handle file selection
  onFileChange(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input && input.files?.length) {
      switch (type) {
        case 'fileBackup':
          this.fileBackup = input.files[0];
          break;
        case 'userSessionBackup':
          this.userSessionBackup = input.files[0];
          break;
        case 'rrdBackup':
          this.rrdBackup = input.files[0];
          break;
      }
    }
  }

  // Handle form submission
  onSubmit() {
    if (this.fileBackup && this.userSessionBackup && this.rrdBackup) {
      console.log('Restoring backups:', this.fileBackup, this.userSessionBackup, this.rrdBackup);
      // Send the files to the backend service
    } else {
      console.log('Please upload all required backups.');
    }
  }
}
