import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import {
  AddProductReq,
  AddProductRes,
  UpdateProductReq,
  UpdateProductRes,
} from 'src/app/models/interface/IProduct';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category/category.service';
import { GetAllCategoriesRes } from 'src/app/models/interface/ICategory';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  productForm: FormGroup;
  errorMessage = '';
  msg = false;
  categorys: GetAllCategoriesRes | any; // Example categories
  isEditMode = false;
  productId: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    private productService: ProductService,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
    });

    if (data) {
      this.isEditMode = true;
      this.productForm.patchValue({
        name: data.name,
        price: data.price,
        category: data.categoryId,
        description: data.description,
      });
      this.productId = data.id;
    }
  }

  onAddProduct(): void {
    if (this.productForm?.valid) {
      const productData = this.productForm.value;

      if (this.isEditMode && this.productId) {
        // Update existing product
        const updateProduct: UpdateProductReq = {
          id: this.productId,
          name: productData.name,
          price: productData.price,
          categoryId: productData.category,
          description: productData.description,
        };

        this.productService.updateProduct(updateProduct).subscribe({
          next: (response: UpdateProductRes) => {
            console.log('Product updated successfully:', response);
            this.msg = true;
            this.errorMessage = '';
            this.dialogRef.close(response); // Close only on success
          },
          error: (error) => {
            console.error('Error updating product:', error);
            this.errorMessage = 'Failed to update product. Please try again.';
          },
        });
        return;
      } else {
        const product: AddProductReq = {
          name: productData.name,
          price: productData.price,
          categoryId: productData.category,
          description: productData.description,
        };

        this.productService.addProduct(product).subscribe({
          next: (response: AddProductRes) => {
            console.log('Product added successfully:', response);
            this.msg = true;
            this.errorMessage = '';
            this.dialogRef.close(response); // Close only on success
          },
          error: (error) => {
            console.error('Error adding product:', error);
            this.errorMessage = 'Failed to add product. Please try again.';
          },
        });
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (response) => {
        this.categorys = response;
        console.log('Categories fetched successfully:', this.categorys);
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      },
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }
}
