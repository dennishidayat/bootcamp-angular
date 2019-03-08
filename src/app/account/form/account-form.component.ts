import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../list/account.service';
import { Account } from '../list/account';
import { Customer } from 'src/app/customer/list/customer';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  accountFormGroup: FormGroup;
  submitted = false;

  @Input()
  account: Account;

  @Output()
  result = new EventEmitter();

  constructor(private accountService: AccountService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.accountFormGroup = this.formBuilder.group({
      accountnumber: [''],
      opendate: [''],
      balance: ['', Validators.required],
      customer: ['', Validators.required]
    });
    this.setData()
  }

  setData() {
    this.setDataToForm(this.account)
  }

  setDataToForm(account) {
    if (this.account) {
      this.accountFormGroup.controls['accountnumber'].setValue(this.account.accountnumber);
      this.accountFormGroup.controls['opendate'].setValue(this.account.opendate);
      this.accountFormGroup.controls['balance'].setValue(this.account.balance);
      if (this.account.customer) {
        this.accountFormGroup.controls['customer'].setValue(this.account.customer.customernumber);
      }
    }
  }

  submitData() {
    let account: Account = new Account();
    let customer: Customer = new Customer();
    account.accountnumber = this.accountFormGroup.controls['accountnumber'].value;
    account.opendate = this.accountFormGroup.controls['opendate'].value;
    account.balance = this.accountFormGroup.controls['balance'].value;
    customer.customernumber = this.accountFormGroup.controls['customer'].value;
    account.customer = customer;
    if (account.accountnumber) {
      this.accountService.update(account).subscribe((Response) => {
        console.log(JSON.stringify(Response));
        this.result.emit(true);
      }, (err) => {
        alert('error : ' + JSON.stringify(err));
      });
    } else {
      this.accountService.add(account).subscribe((Response) => {
        console.log(JSON.stringify(Response));
        this.result.emit(true);
      }, (err) => {
        alert('error : ' + JSON.stringify(err));
      });
    }
  }

  cancelChange() {
    this.result.emit(true);
  }

  setSelectedCustomer(customer: Customer) {
    this.accountFormGroup.controls['customer'].setValue(customer.customernumber);
  }
}

