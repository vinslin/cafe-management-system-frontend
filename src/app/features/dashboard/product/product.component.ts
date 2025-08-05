import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../dialogbox/product-dialog/product-dialog.component';
import { ProductService } from 'src/app/services/product/product.service';
import { GetAllProductsRes } from 'src/app/models/interface/IProduct';
import { MatTableDataSource } from '@angular/material/table';
import { UserStatusReq } from 'src/app/models/interface/IUsers';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  searchValue = '';
  displayedColumns: string[] = [
    'name',
    'category',
    'description',
    'price',
    'symbol',
  ];
  dataSource = new MatTableDataSource<GetAllProductsRes>();

  constructor(
    public dialog: MatDialog,
    private productService: ProductService
  ) {}

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.dataSource.data = Array.isArray(response) ? response : [response];
        console.log('products fetched successfully:', this.dataSource);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  openGetter() {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Product added:', result);
        this.getAllProducts(); // Refresh the product list after adding a new produc
      }
    });
  }

  updateProduct(id: number) {
    this.productService.getProductById(id).subscribe({
      next: (response) => {
        console.log('Product fetched successfully:', response);

        const dialogRef = this.dialog.open(ProductDialogComponent, {
          width: '400px',
          data: response, //
        });

        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            console.log('Product updated:', result);
            this.getAllProducts(); // Refresh list
          }
        });
      },
      error: (error) => {
        console.error('Error fetching product:', error);
      },
    });
  }

  deleteProduct(id: number) {
    console.log(id);
    const confirm = window.confirm(
      'Are you sure you want to delete this product?'
    );
    if (confirm) {
      this.productService.deleteProduct(id).subscribe({
        next: (response) => {
          console.log('Product deleted successfully:', response);
          this.getAllProducts(); // Refresh the product list after deletion
        },
        error: (error) => {
          console.error('Error deleting product:', error);
        },
      });
    }
    //if (confirm) {
  }
  onToggleChange(id: number, isChecked: boolean) {
    const status = isChecked ? 'true' : 'false';

    console.log(`Calling API for ID: ${id}, New Status: ${status}`);

    const req: UserStatusReq = {
      id: id,
      status: status,
    };

    this.productService.updateStatus(req).subscribe(
      (response) => {
        console.log('Status updated successfully:', response);
        this.getAllProducts();
      },
      (error) => {
        console.error('Error updating status:', error);
      }
    );
  }
}
