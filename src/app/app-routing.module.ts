import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { CustomerFormComponent } from './customer/form/customer-form.component';
import { AccountListComponent } from './account/list/account-list.component';
import { AccountFormComponent } from './account/form/account-form.component';
import { TransactionFormComponent } from './transaction/form/transaction-form.component';
import { TransactionListComponent } from './transaction/list/transaction-list.component';

const routes: Routes = [
  {
    path:'nav',
    component: NavComponent
  },

  {
    path:'customer',
    component: CustomerComponent
  },

  {
    path:'account',
    component: AccountComponent
  }, 

  {
    path:'customerlist',
    component: CustomerListComponent
  },

  {
    path:'customerform',
    component: CustomerFormComponent
  },

  {
    path:'accountlist',
    component: AccountListComponent
  },

  {
    path:'accountform',
    component: AccountFormComponent
  },

  {
    path:'transactionform',
    component: TransactionFormComponent
  },

  {
    path:'transactionlist',
    component: TransactionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
