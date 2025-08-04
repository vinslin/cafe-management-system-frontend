import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDialogComponent } from '../dialogbox/category-dialog/category-dialog.component';

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

  constructor(public dialog: MatDialog) {}

  openGetter() {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Category added:', result);
        // Here you can handle the result, e.g., add it to the dataSource
        //this.dataSource.push({ id: this.dataSource.length + 1, name: result });

        //for call the get all category api
      }
    });
  }

  updateCategory(id: number) {
    console.log('done');
    console.log(id);
  }
}
