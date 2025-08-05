import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../dialogbox/product-dialog/product-dialog.component';
import { ProductService } from 'src/app/services/product/product.service';
import { GetAllProductsRes } from 'src/app/models/interface/IProduct';
import { MatTableDataSource } from '@angular/material/table';
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
    console.log('update');
    console.log(id);
  }
  deleteProduct(id: number) {}
  onToggleChange(id: number, isChecked: boolean) {
    const status = isChecked ? 1 : 0;

    console.log(`Calling API for ID: ${id}, New Status: ${status}`);

    // Example API call (adjust according to your service)
    // this.apiService.updateStatus(id, status).subscribe(
    //   (response) => {
    //     console.log('Status updated successfully:', response);
    //   },
    //   (error) => {
    //     console.error('Error updating status:', error);
    //   }
    // );
  }
}
