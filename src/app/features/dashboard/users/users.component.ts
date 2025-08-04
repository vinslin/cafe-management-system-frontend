import { Component, OnInit } from '@angular/core';
import { getAllUserRes, UserStatusReq } from 'src/app/models/interface/IUsers';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  searchValue = '';
  displayedColumns: string[] = ['name', 'email', 'contactNumber', 'status'];

  dataSource: getAllUserRes[] = [];

  constructor(private userService: UserService) {}

  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.dataSource = response;
        console.log('Users fetched successfully:', this.dataSource);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  onToggleChange(id: number, isChecked: boolean) {
    const status = isChecked ? 'true' : 'false';
    // const user
    const req : UserStatusReq = {
      id: id,
      status: status,
    };
    this.userService.updateUserStatus(req).subscribe({
      next: (response) => {
        console.log('User status updated successfully:', response);
        this.getAllUsers(); // Refresh the user list after updating status
      },
      error: (error) => {
        console.error('Error updating user status:', error);
      },
    });
    // For debugging purposes, you can log the ID and new status

    // console.log(`Calling API for ID: ${id}, New Status: ${status}`);
  }
}
