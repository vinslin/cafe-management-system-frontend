import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { GetAllCategoriesRes } from 'src/app/models/interface/ICategory';
import { GetProductCountRes } from 'src/app/models/interface/IProduct';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  categoryTemp: string = '0';
  product: string = '0';
  bill = 12;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  getCategoryCount(): void {
    this.categoryService.getCategoryCount().subscribe({
      next: (response) => {
        if (response.count <= 0) {
          this.categoryTemp = 'No categories found';
          console.log('No categories found.');
        } else {
          this.categoryTemp = String(response.count);
          console.log(
            'Category count fetched successfully:',
            this.categoryTemp
          );
        }
      },
      error: (error) => {
        console.error('Error fetching category count:', error);
      },
    });
  }
  getProductCount(): void {
    this.productService.getProductCount().subscribe({
      next: (response: GetProductCountRes) => {
        if (response.count <= 0) {
          this.product = 'No products found';
          console.log('No products found.');
        } else {
          this.product = String(response.count);
          console.log('Product count fetched successfully:', this.product);
        }
      },
      error: (error) => {
        console.error('Error fetching product count:', error);
      },
    });
  }
  ngOnInit(): void {
    this.getCategoryCount();
    this.getProductCount();
  }
  goto() {}
}
