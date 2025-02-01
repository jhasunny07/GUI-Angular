import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];  // Store fetched users

  constructor(private userService: UserService) {}  

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        console.log('Users received from API:', data); // ✅ Debugging
        this.users = data;  // ✅ Assign users to component
      },
      (error) => {
        console.error('Error fetching users:', error); // ✅ Debugging API errors
      }
    );
  }


  addUser(): void {
    // Prompt for new user name
    const newName = prompt("Enter new user name:");
  
    // If the user clicks Cancel on the name prompt, cancel the entire process
    if (newName === null) {
      return;  // Exit the function if the user presses Cancel on the name prompt
    }
  
    // Prompt for new user email
    const newEmail = prompt("Enter new user email:");
  
    // If the user clicks Cancel on the email prompt, cancel the process
    if (newEmail === null) {
      return;  // Exit the function if the user presses Cancel on the email prompt
    }
  
    // Validate user inputs
    if (!newName || !newEmail) {
      alert('Both name and email are required.');
      return;  // Exit if fields are empty
    }
  
    // Check if a user with the same name already exists
    const existingUser = this.users.find(user => user.name === newName);
  
    if (existingUser) {
      // If user exists, show an alert and do not proceed with adding the user
      alert('User already exists with the same name. Please update the email or choose a different name.');
      return;  // Stop the process and do nothing
    } else {
      // If user doesn't exist, create a new user
      const newUser = { name: newName, email: newEmail };
  
      // Call the service to create the user
      this.userService.createUser(newUser).subscribe(
        (response) => {
          this.users.push(response);  // Add the newly created user to the list
          console.log('User Created:', response);
        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
    }
  }
  
  
  
  

  editUser(userId: number): void {
    const userToEdit = this.users.find(user => user.id === userId);
  
    if (userToEdit) {
      // Prompt for new user details
      const newName = prompt("Enter new name:", userToEdit.name);
      const newEmail = prompt("Enter new email:", userToEdit.email);
  
      // Updated user data
      const updatedUser = { ...userToEdit, name: newName, email: newEmail };
  
      // Call the service to update the user
      this.userService.updateUser(userId, updatedUser).subscribe(
        (response) => {
          // Find the index of the updated user and replace it in the list
          const index = this.users.findIndex(user => user.id === userId);
          if (index !== -1) {
            this.users[index] = response;
          }
          console.log('User Updated:', response);
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }
  }







  removeUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.users = this.users.filter(user => user.id !== userId);  // Remove user from the list
        console.log('User Deleted');
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
