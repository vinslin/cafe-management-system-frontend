import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  AddCategoryReq,
  AddCategoryRes,
  UpdateCategoryReq,
  UpdateCategoryRes,
} from 'src/app/models/interface/ICategory';
import { CategoryService } from 'src/app/services/category/category.service';
@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss'],
})
export class CategoryDialogComponent {
  categoryName = '';
  errorMessage = '';
  msg = false;
  //: any | null = null ;
  isEditMode = false;
  categoryId: number | null = null;
  tempCategoryName = '';

  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService
  ) {
    if (data) {
      this.isEditMode = true;
      this.categoryName = data.name;
      this.tempCategoryName = data.name;
      this.categoryId = data.id;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAddCategory(): void {
    if (this.categoryName.trim() === '') {
      this.errorMessage = 'Category name is required';
      return;
    } else if (!this.isEditMode) {
      this.errorMessage = '';
      this.msg = true;
      const category: AddCategoryReq = {
        name: this.categoryName,
      };

      this.categoryService.addCategory(category).subscribe({
        next: (response: AddCategoryRes) => {
          console.log('Category added successfully:', response);

          this.dialogRef.close(response);
        },
        error: (error) => {
          console.error('Error adding category:', error);
          this.errorMessage = error.error.message || 'Failed to add category';
        },
      });
    } else {
      if (this.categoryName === this.tempCategoryName) {
        this.errorMessage = 'no Changes Made in Category Name';
      } else {
        this.errorMessage = '';
        this.msg = true;
        const category: UpdateCategoryReq = {
          id: this.categoryId!,
          name: this.categoryName,
        };

        this.categoryService.updateCategory(category).subscribe({
          next: (response: UpdateCategoryRes) => {
            console.log('Category updated successfully:', response);
            this.dialogRef.close(response);
          },
          error: (error) => {
            console.error('Error updating category:', error);
            this.errorMessage =
              error.error.message || 'Failed to update category';
          },
        });
      }
    }
  }

  mainName(): string {
    return this.isEditMode ? 'Update Category' : 'Add Category';
  }

  mainButtonName(): string {
    return this.isEditMode ? 'Update' : 'Add';
  }
}
