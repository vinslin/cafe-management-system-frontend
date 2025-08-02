import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  searchValue = '';

  displayedColumns: string[] = ['name', 'symbol'];
  dataSource = [
    { id: 1, name: 'Tea' },
    { id: 2, name: 'Pizza' },
    { id: 3, name: 'Coffee' },
    { id: 4, name: 'Burger' },
    { id: 5, name: 'Sandwich' },
  ];
  openGetter() {}

  updateCategory(id: number) {
    console.log('done');
    console.log(id);
  }
}
