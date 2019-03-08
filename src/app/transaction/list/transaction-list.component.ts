import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionFormComponent } from '../form/transaction-form.component';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  @ViewChild('formTrx')
  formTransaction: TransactionFormComponent;
  
  listTransaction : Transaction[] = [];

  showDetail: boolean = false;
  selectedTransaction = new Transaction();
  setData = [];

  constructor(private transactionService : TransactionService, private activatedRoute : ActivatedRoute) { }

  create() {
    this.showDetail = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const account: String = params['account'];
      this.loadData(account);
    })
  }

  selectTransaction(transaction: Transaction) {
    let copyTransaction = new Transaction();
    copyTransaction.id = transaction.id;
    copyTransaction.type = transaction.type;
    copyTransaction.amount = transaction.amount;
    copyTransaction.amountsign = transaction.amountsign;
    copyTransaction.account = transaction.account;
    this.selectedTransaction = copyTransaction;
    this.showDetail = true;
    if (this.formTransaction){
    this.formTransaction.setData();
    }
  }

  loadData(account?) {
    this.transactionService.getList(account).subscribe((Response) => {
      console.log(JSON.stringify(Response));
      this.listTransaction=[];
      Object.assign(this.listTransaction, Response['values']);
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

  deleteRow(id) {
    this.transactionService.delete(id).subscribe((Response)=>{
      console.log(JSON.stringify(Response));
      location.reload();
    }, (err)=>{
      console.log(JSON.stringify(Response));
    })
  }
}
