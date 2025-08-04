import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { GetAllCategoriesRes } from 'src/app/models/interface/ICategory';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  categoryTemp: string = '0';
  product = 11;
  bill = 12;
  constructor(private categoryService: CategoryService) {}

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

  ngOnInit(): void {
    this.getCategoryCount();
  }
  goto() {}
}
