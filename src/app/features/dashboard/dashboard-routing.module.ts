import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { BillComponent } from './bill/bill.component';
import { CategoryComponent } from './category/category.component';
import { OrderComponent } from './order/order.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'bill',
    component: BillComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
