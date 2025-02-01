import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // Ensures it's available throughout the app
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';  // Ensure this URL is correct

  constructor(private http: HttpClient) {}

  // Fetch users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Create a new user
  createUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }

  // Update user
  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, userData);
  }

  // Delete user
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
