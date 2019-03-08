import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TestbagComponent } from './nav/testbag.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerFormComponent } from './customer/form/customer-form.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { CustomerService } from './customer/list/customer.service';
import { AccountFormComponent } from './account/form/account-form.component';
import { PipePipe } from './pipe.pipe';
import { AccountListComponent } from './account/list/account-list.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionListComponent } from './transaction/list/transaction-list.component';
import { TransactionFormComponent } from './transaction/form/transaction-form.component';
import { ComboCustomerComponent } from './nav/combo/combo-customer.component';
import { AccountComboComponent } from './account/combo/account-combo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TestbagComponent,
    CustomerComponent,
    AccountComponent,
    CustomerFormComponent,
    CustomerListComponent,
    AccountFormComponent,
    PipePipe,
    AccountListComponent,
    TransactionComponent,
    TransactionListComponent,
    TransactionFormComponent,
    ComboCustomerComponent,
    AccountComboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
