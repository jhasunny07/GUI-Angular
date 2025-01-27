import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-date-wise-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './date-wise-report.component.html',
  styleUrls: ['./date-wise-report.component.css']
})
export class DateWiseReportComponent {
   // Mock data
   data = [
    { date: '2025-01-18', dataTransfer: 120, surfingTime: '2h 10m', activityCount: 5 },
    { date: '2025-01-19', dataTransfer: 140, surfingTime: '3h 5m', activityCount: 7 },
    { date: '2025-01-20', dataTransfer: 180, surfingTime: '4h 2m', activityCount: 10 },
    { date: '2025-01-21', dataTransfer: 160, surfingTime: '3h 45m', activityCount: 9 },
    { date: '2025-01-22', dataTransfer: 90, surfingTime: '1h 20m', activityCount: 3 },
    { date: '2025-01-23', dataTransfer: 130, surfingTime: '2h 50m', activityCount: 6 },
    { date: '2025-01-24', dataTransfer: 150, surfingTime: '3h 15m', activityCount: 8 },
    { date: '2025-01-25', dataTransfer: 170, surfingTime: '3h 55m', activityCount: 12 },
    { date: '2025-01-26', dataTransfer: 100, surfingTime: '1h 50m', activityCount: 4 },
    { date: '2025-01-27', dataTransfer: 200, surfingTime: '5h 5m', activityCount: 15 },
    // Add more data as needed
  ];

  // Default values
  filteredData = [...this.data];
  paginatedData: { date: string; dataTransfer: number; surfingTime: string; activityCount: number; }[] = [];
  fromDate: string = this.getToday(); // Default "From Date"
  toDate: string = this.getToday(); // Default "To Date"

  // Pagination variables
  itemsPerPage = 10; // Default rows per page
  itemsPerPageOptions = [5, 10, 25, 50, this.data.length]; // Options for rows per page
  currentPage = 1;
  totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);

  ngOnInit() {
    this.filterData(); // Initialize filtered data
  }

  // Function to filter data by date range
  filterData() {
    this.filteredData = this.data.filter((item) => {
      const itemDate = new Date(item.date);
      const from = new Date(this.fromDate);
      const to = new Date(this.toDate);
      return itemDate >= from && itemDate <= to;
    });

    // Reset pagination
    this.currentPage = 1;
    this.updatePagination();
  }

  // Update paginated data
  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.filteredData.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  // Get today's date in 'YYYY-MM-DD' format
  getToday(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Pagination: Previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  // Pagination: Next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

}
