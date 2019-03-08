import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountFormComponent } from '../form/account-form.component';
import { AccountService } from 'src/app/account/list/account.service'
import { Account } from './account';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  @ViewChild('formAcc')
  formAccount: AccountFormComponent;

  listAccount: Account[] = [];
  showDetail: boolean = false;
  selectedAccount = new Account();
  setData = [];
  accountFormGroup: FormGroup;
  //dependency injection
  constructor(private accountService: AccountService, private router : Router, private activatedRoute : ActivatedRoute) { }

  create() {
    this.showDetail = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      const customer: String = params['customer'];
      this.loadData(customer);
    });
  }

  selectAccount(account: Account) {
    let copyAccount = new Account();
    copyAccount.accountnumber = account.accountnumber;
    copyAccount.opendate = account.opendate;
    copyAccount.balance = account.balance;
    copyAccount.customer = account.customer;
    this.selectedAccount = copyAccount;
    this.showDetail = true;
    if (this.formAccount){
    this.formAccount.setData();
    }
  }

  loadData(customer?) {
    this.accountService.getList(customer).subscribe((Response) => {
      console.log(JSON.stringify(Response));
      this.listAccount = [];
      Object.assign(this.listAccount, Response['values']);
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    });
  }

  prosesResult(result) {
    if (result) {
      this.showDetail = false;
      this.loadData();
    }
  }

  deleteRow(accountnumber) {
    this.accountService.delete(accountnumber).subscribe((Response)=>{
      console.log(JSON.stringify(Response));
      location.reload();
    }, (err)=>{
      console.log(JSON.stringify(Response));
    })
  }

  viewById(account : Account) {
    this.router.navigate(['./transactionlist/', { account : account.accountnumber }]);
  }
}
