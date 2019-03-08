import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from '../list/transaction.service';
import { Transaction } from '../list/transaction';
import { Account } from 'src/app/account/list/account';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  transactionFormGroup: FormGroup
  submitted = false

  @Input()
  transaction: Transaction;

  @Output()
  result = new EventEmitter();

  constructor(private transactionService: TransactionService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.transactionFormGroup = this.formBuilder.group({
      id: [''],
      type: [''],
      amount: [''],
      amountsign: [''],
      account: ['']
    });
    this.setData();
  }
  setData(): any {
    this.setDataToForm(this.transaction)
  }
  setDataToForm(transaction) {
    if (transaction) {
      this.transactionFormGroup.controls['id'].setValue(transaction.id);
      this.transactionFormGroup.controls['type'].setValue(transaction.type);
      this.transactionFormGroup.controls['amount'].setValue(transaction.amount);
      this.transactionFormGroup.controls['amountsign'].setValue(transaction.amountsign);
      if (transaction.account) {
        this.transactionFormGroup.controls['account'].setValue(this.transaction.account.accountnumber);
      }
    }
  }

  submitData() {
    let transaction: Transaction = new Transaction();
    let account: Account = new Account();
    transaction.id = this.transactionFormGroup.controls['id'].value;
    transaction.type = this.transactionFormGroup.controls['type'].value;
    transaction.amount = this.transactionFormGroup.controls['amount'].value;
    transaction.amountsign = this.transactionFormGroup.controls['amountsign'].value;
    account.accountnumber = this.transactionFormGroup.controls['account'].value;
    transaction.account = account;
    console.log(transaction)
    this.transactionService.add(transaction).subscribe((Response) => {
      console.log(JSON.stringify(Response));
      this.result.emit(true);
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    });
  }

  cancel() {
    this.result.emit(true);
  }

  setSelectedAccount(account: Account) {
    console.log('selected acc');
    console.log(account);
    if (account) {
      this.transactionFormGroup.controls['account'].setValue(account.accountnumber);
    }
  }
}
