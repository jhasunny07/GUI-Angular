import { CommonModule } from '@angular/common';
import { Component, HostListener  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dns',
  standalone: true,
  templateUrl: './dns.component.html',
  styleUrls: ['./dns.component.css'],
  imports: [CommonModule, FormsModule ]
})
export class DnsComponent {
  dnsList: string[] = ['127.0.0.1', '4.2.2.2', '8.8.8.8'];
  selectedIndex: number | null = null; // To track the selected item
  newDns: string = ''; // For the input field


  forwardersList: string[] = [];

  newForwarder: string = '';

  domainName: string = '';

  internalIp: string = '';


  selectItem(index: number, event: Event) {
    this.selectedIndex = index;
    event.stopPropagation(); // Prevent outside click from triggering
  }

  // Deselect when clicking outside
  @HostListener('document:click')
  clearSelection() {
    this.selectedIndex = null;
  }


  // Add a new DNS to the list
  addDns() {
    if (this.newDns.trim()) {
      this.dnsList.push(this.newDns.trim());
      this.newDns = ''; // Clear the input field
    }
  }

  // Remove the selected DNS from the list
  removeDns() {
    if (this.selectedIndex !== null) {
      this.dnsList.splice(this.selectedIndex, 1);
      this.selectedIndex = null; // Reset the selection
    }
  }

  // Move the selected item up
  moveUp() {
    if (this.selectedIndex !== null && this.selectedIndex > 0) {
      const currentIndex = this.selectedIndex;
      [this.dnsList[currentIndex], this.dnsList[currentIndex - 1]] = [
        this.dnsList[currentIndex - 1],
        this.dnsList[currentIndex],
      ];
      this.selectedIndex--; // Update the selection
    }
  }

  // Move the selected item down
  moveDown() {
    if (
      this.selectedIndex !== null &&
      this.selectedIndex < this.dnsList.length - 1
    ) {
      const currentIndex = this.selectedIndex;
      [this.dnsList[currentIndex], this.dnsList[currentIndex + 1]] = [
        this.dnsList[currentIndex + 1],
        this.dnsList[currentIndex],
      ];
      this.selectedIndex++; // Update the selection
    }
  }
  saveConfiguration(domainName: string, internalIP: string) {
    console.log(`Domain: ${domainName}, Internal IP: ${internalIP}`);
  }
}
