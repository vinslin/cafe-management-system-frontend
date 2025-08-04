import { Component } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent {
  searchVlaue = '';
  displayedColumns: string[] = [
    'name',
    'email',
    'contactNumber',
    'paymentMethod',
    'total',
    'action',
  ];

  deleteBill(id: number) {}

  viewBill(id: number) {}


  dataSource = [
    {
      name: 'BTech Days',
      email: 'btechdays.care@gmail.com',
      contactNumber: '3214567980',
      paymentMethod: 'Credit Card',
      total: 15012,
    },
    {
      name: 'Tom',
      email: 'tom@gmail.com',
      contactNumber: '1521521523',
      paymentMethod: 'Credit Card',
      total: 6828,
    },
    {
      name: 'Saurav Kumar',
      email: 'saurav@gmail.com',
      contactNumber: '1591234567',
      paymentMethod: 'Credit Card',
      total: 5100,
    },
    {
      name: 'Ankit',
      email: 'ankit@gmail.com',
      contactNumber: '1234568790',
      paymentMethod: 'Cash',
      total: 1590,
    },
    {
      name: 'BTech Days',
      email: 'btechdays@gmail.com',
      contactNumber: '6547893210',
      paymentMethod: 'Credit Card',
      total: 2270,
    },
  ];
}
