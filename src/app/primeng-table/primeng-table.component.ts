import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit  } from '@angular/core';

@Component({
  selector: 'app-primeng-table',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './primeng-table.component.html',
  styleUrls: ['./primeng-table.component.css'],
  imports: [CommonModule]
})
export class PrimeNgTableComponent implements OnInit  {
  cars: any[];

  constructor() {
    this.cars = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxster', price: 72000 },
      { make: 'Honda', model: 'Civic', price: 24000 },
      { make: 'BMW', model: '3 Series', price: 41000 },
      { make: 'Mercedes', model: 'C-Class', price: 55000 },
      // Add more static data to make a total of 50 entries
      { make: 'Audi', model: 'A4', price: 40000 },
      { make: 'Volkswagen', model: 'Golf', price: 30000 },
      { make: 'Nissan', model: 'Altima', price: 27000 },
      { make: 'Chevrolet', model: 'Malibu', price: 29000 },
      { make: 'Kia', model: 'Optima', price: 25000 },
      { make: 'Hyundai', model: 'Elantra', price: 22000 },
      { make: 'Mazda', model: '3', price: 23000 },
      { make: 'Subaru', model: 'Impreza', price: 26000 },
      { make: 'Lexus', model: 'IS', price: 45000 },
      { make: 'Jaguar', model: 'XE', price: 47000 },
      { make: 'Tesla', model: 'Model 3', price: 50000 },
      { make: 'Volvo', model: 'S60', price: 48000 },
      { make: 'Infiniti', model: 'Q50', price: 46000 },
      { make: 'Acura', model: 'TLX', price: 44000 },
      { make: 'Cadillac', model: 'ATS', price: 43000 },
      { make: 'Lincoln', model: 'MKZ', price: 42000 },
      { make: 'Buick', model: 'Regal', price: 41000 },
      { make: 'Chrysler', model: '300', price: 40000 },
      { make: 'Dodge', model: 'Charger', price: 39000 },
      { make: 'Mitsubishi', model: 'Lancer', price: 38000 },
      { make: 'Alfa Romeo', model: 'Giulia', price: 37000 },
      { make: 'Genesis', model: 'G70', price: 36000 },
      { make: 'Fiat', model: '500', price: 35000 },
      { make: 'Mini', model: 'Cooper', price: 34000 },
      { make: 'Peugeot', model: '508', price: 33000 },
      { make: 'Renault', model: 'Megane', price: 32000 },
      { make: 'Citroen', model: 'C4', price: 31000 },
      { make: 'Skoda', model: 'Octavia', price: 30000 },
      { make: 'Seat', model: 'Leon', price: 29000 },
      { make: 'Suzuki', model: 'Swift', price: 28000 },
      { make: 'Maserati', model: 'Ghibli', price: 27000 },
      { make: 'Aston Martin', model: 'Vantage', price: 26000 },
      { make: 'Bentley', model: 'Continental', price: 25000 },
      { make: 'Rolls-Royce', model: 'Ghost', price: 24000 },
      { make: 'Ferrari', model: '488', price: 23000 },
      { make: 'Lamborghini', model: 'Huracan', price: 22000 },
      { make: 'McLaren', model: '720S', price: 21000 },
      { make: 'Bugatti', model: 'Chiron', price: 20000 },
      { make: 'Pagani', model: 'Huayra', price: 19000 },
      { make: 'Koenigsegg', model: 'Agera', price: 18000 },
      { make: 'Lotus', model: 'Evora', price: 17000 },
      { make: 'Morgan', model: 'Plus 4', price: 16000 }
    ];
  }

  ngOnInit() {
    console.log('Cars data:', this.cars);  // Add this to check if data is loaded
  }
}