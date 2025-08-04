import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { OrderComponent } from './order/order.component';
import { BillComponent } from './bill/bill.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; // optional for icons
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductComponent } from './product/product.component';
import { CategoryDialogComponent } from './dialogbox/category-dialog/category-dialog.component'; //pop up

//dialog box
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; // Import FormsModule for form handling
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDialogComponent } from './dialogbox/product-dialog/product-dialog.component';
import { BillViewDialogComponent } from './dialogbox/bill-view-dialog/bill-view-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'; // needed for mat-option

//sorting panna
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    ProfileComponent,
    CategoryComponent,
    OrderComponent,
    BillComponent,
    UsersComponent,
    DashboardComponent,
    ProductComponent,
    CategoryDialogComponent,
    ProductDialogComponent,
    BillViewDialogComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule, // Import FormsModule for form handling
    HttpClientModule, // Import HttpClientModule for HTTP requests
    ReactiveFormsModule, // Import ReactiveFormsModule for reactive forms,
    MatSelectModule,
    MatOptionModule,
    MatSortModule,
  ],
})
export class DashboardModule {}
