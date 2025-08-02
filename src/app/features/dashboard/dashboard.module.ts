import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { OrderComponent } from './order/order.component';
import { BillComponent } from './bill/bill.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    ProfileComponent,
    CategoryComponent,
    OrderComponent,
    BillComponent,
    UsersComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
