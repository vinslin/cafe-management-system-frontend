import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  searchValue = '';
  displayedColumns: string[] = ['name', 'email', 'contactNumber', 'status'];
  openGetter() {}

  dataSource = [
    {
      id: 1,
      name: 'test',
      email: 'test@gmail.com',
      contactNumber: '1237891023',
      status: 1,
    },
    {
      id: 2,
      name: 'Oliver',
      email: 'rakenot987@saturdata.com',
      contactNumber: '1591591591',
      status: 1,
    },
    {
      id: 3,
      name: 'Noah',
      email: 'worelih887@xxyyi.com',
      contactNumber: '1521521521',
      status: 0,
    },
    {
      id: 4,
      name: 'Tim',
      email: 'sopad72638@ehstock.com',
      contactNumber: '1237891124',
      status: 0,
    },
    {
      id: 5,
      name: 'BTech Days',
      email: 'wakipe1881@zoeyy.com',
      contactNumber: '1234567890',
      status: 0,
    },
    {
      id: 6,
      name: 'BTech Days',
      email: 'btechdays@mailinator.com',
      contactNumber: '1234567890',
      status: 0,
    },
  ];

  onToggleChange(id: number, isChecked: boolean) {
    const status = isChecked ? 1 : 0;

    console.log(`Calling API for ID: ${id}, New Status: ${status}`);
  }
}
