import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-access-control',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.css']
})
export class AccessControlComponent {
  @ViewChild('modalContent') modalContent!: ElementRef;
  userTypes = ['Manager', 'Operator', 'Walking User', 'User Leased Line'];
  selectedUserType: string = '';
  selectedModule: any;
  isModalOpen = false;

  modules = [
    {
      name: 'System Management',
      allowed: false,
      permissions: [
        { name: 'Network', view: false, create: false, update: false, delete: false },
        { name: 'Firewall', view: false, create: false, update: false, delete: false },
        { name: 'DHCP', view: false, create: false, update: false, delete: false },
        // More permissions...
      ]
    },

    {
      name: 'Policy Management',
      allowed: false,
      permissions: [
        { name: 'Surfing Quota Policy', view: false, create: false, update: false, delete: false },
        { name: 'Access Time Policy', view: false, create: false, update: false, delete: false },
        { name: 'Bandwidth Policy', view: false, create: false, update: false, delete: false },
        { name: 'Data Transfer Policy', view: false, create: false, update: false, delete: false },
        { name: 'Fair Access Policy', view: false, create: false, update: false, delete: false },
        { name: 'Radius Policy', view: false, create: false, update: false, delete: false },
        // More permissions...
      ]
    },
    // More modules...
  ];

  togglePermission(module: any) {
    if (!module.allowed) {
      this.selectedModule = null; // Reset if unchecked
    }
  }

  openEditModal(module: any) {
    this.selectedModule = module;
    this.isModalOpen = true; // Open modal
  }

  closeModal() {
    this.isModalOpen = false; // Close modal
  }

  // Auto-selection logic for permissions
  onPermissionChange(permissionType: string) {
    if (permissionType === 'delete') {
      // Automatically select "View", "Create", and "Update" when "Delete" is selected
      this.selectPermissions(['view', 'create', 'update']);
    } else if (permissionType === 'update') {
      // Automatically select "View" and "Create" when "Update" is selected
      this.selectPermissions(['view', 'create']);
    } else if (permissionType === 'create') {
      // Automatically select "View" when "Create" is selected
      this.selectPermissions(['view']);
    }
  }

  // Select permissions based on passed types
  selectPermissions(permissionTypes: string[]) {
    permissionTypes.forEach(permissionType => {
      if (this.selectedModule) {
        this.selectedModule.permissions.forEach((permission: any) => {
          permission[permissionType] = true;
        });
      }
    });
  }

  updatePermissions() {
    // Logic to update permissions
    console.log('Permissions updated:', this.selectedModule);
    this.closeModal(); // Close modal after update
  }
}
