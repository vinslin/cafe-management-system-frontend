import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDialogComponent } from '../dialogbox/category-dialog/category-dialog.component';
import { CategoryService } from 'src/app/services/category/category.service';
import {
  GetAllCategoriesRes,
  AddCategoryReq,
  AddCategoryRes,
} from 'src/app/models/interface/ICategory';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  searchValue = '';

  displayedColumns: string[] = ['name', 'symbol'];
  dataSource = new MatTableDataSource<GetAllCategoriesRes>();

  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService
  ) {}

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (response) => {
        this.dataSource.data = Array.isArray(response) ? response : [response];
        console.log('Categories fetched successfully:', this.dataSource);
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      },
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  openGetter() {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Category added:', result);
        // Here you can handle the result, e.g., add it to the dataSource
        //this.dataSource.push({ id: this.dataSource.length + 1, name: result });

        //for call the get all category api
        this.getAllCategories();
      }
    });
  }

  updateCategory(id: number, name: string) {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '400px',
      data: { id: id, name: name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Category updated:', result);
        // Here you can handle the result, e.g., add it to the dataSource
        //this.dataSource.push({ id: this.dataSource.length + 1, name: result });

        //for call the get all category api
        this.getAllCategories();
      }
    });
  }
}
