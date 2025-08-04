import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  productForm: FormGroup;
  errorMessage = '';
  msg = false;
  categorys = ['Tea', 'Pizza', 'Coffee', 'Burger', 'Sandwich']; // Example categories

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProductDialogComponent>
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onAddProduct(): void {
    if (this.productForm?.valid) {
      const productData = this.productForm.value;
      console.log('Product added:', productData);
      // Here you can handle the product data, e.g., send it to the server
      this.onCancel();
    } else {
      console.error('Form is invalid');
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
