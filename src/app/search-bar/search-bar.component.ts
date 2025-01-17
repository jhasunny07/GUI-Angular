import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class SearchBarComponent {
selectedSuggestion: any;
onSearch() {
throw new Error('Method not implemented.');
}
  searchQuery: string = '';  // ngModel will bind this string value
  suggestions: string[] = [];
  @Output() suggestionSelected = new EventEmitter<string>();

  // Sample data for search suggestions
  searchableItems = [
    { name: 'System Menu', route: '/system' },
    { name: 'Network Settings', route: '/network' },
    { name: 'Create Firewall', route: '/firewall-create' },
    { name: 'Firewall Management', route: '/firewall-manage' }
  ];

  // Filter suggestions based on the query
  filterSuggestions() {
    if (this.searchQuery.trim()) {
      this.suggestions = this.searchableItems.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      ).map(item => item.name);
    } else {
      this.suggestions = [];
    }
  }

  // Emit event when a suggestion is selected
  onSelectSuggestion(suggestion: string) {
    const selectedItem = this.searchableItems.find(item => item.name === suggestion);
    if (selectedItem) {
      this.suggestionSelected.emit(selectedItem.route); // Emit the route to navigate to
    }
    this.searchQuery = ''; // Clear the search query after selection
    this.suggestions = [];  // Clear the suggestions
  }

  
}
