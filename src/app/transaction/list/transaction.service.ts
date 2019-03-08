import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './Transaction';
import { Account } from 'src/app/account/list/account';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  // pengkoneksi dengan API
  constructor(private httpClient: HttpClient) { }

  getList(account?) {
    let params = "";
    params = "?account=" + account;
    console.log('params = '+params);
    if (account) {
      return this.httpClient.get('http://localhost:7000/api/transaction/' + params);
    }
    return this.httpClient.get('http://localhost:7000/api/transaction/');
  }

  update(transaction: Transaction) {
    return this.httpClient.put('http://localhost:7000/api/transaction/', transaction)
  }

  add(transaction: Transaction) {
    return this.httpClient.post('http://localhost:7000/api/transaction/', transaction)
  }

  delete(id) {
    return this.httpClient.delete('http://localhost:7000/api/transaction/' + id);
  }
}
