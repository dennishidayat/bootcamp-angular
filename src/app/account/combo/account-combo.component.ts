import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from 'src/app/account/list/account'
import { AccountService } from 'src/app/account/list/account.service';

@Component({
  selector: 'app-account-combo',
  templateUrl: './account-combo.component.html',
  styleUrls: ['./account-combo.component.css']
})
export class AccountComboComponent implements OnInit {

  listAccount: Account[] = [];

  @Output()
  account = new EventEmitter<Account>();

  @Input()
  selectedAccount: Account;

  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
    this.loadData();
  }

  onChange(index) {
    console.log('selected : ' + index ? JSON.stringify(index) : '');
    if (this.listAccount && this.listAccount.length > 0) {
      console.log(this.listAccount[index]);
      this.account.emit(this.listAccount[index]);
    };
  }

  loadData() {
    this.accountService.getList().subscribe((Response) => {
      console.log(JSON.stringify(Response));
      Object.assign(this.listAccount, Response['values']);
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    });
  }

}

