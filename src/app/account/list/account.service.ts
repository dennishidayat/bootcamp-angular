import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // pengkoneksi dengan API
  constructor(private httpClient: HttpClient) { }

  getList(customer?) {
    let params = "";
    params = "?customer=" +customer;
    if (customer) {
      return this.httpClient.get('http://localhost:7000/api/account/' + params);
    } else {
      return this.httpClient.get('http://localhost:7000/api/account/');
    }
  }

  update(account: Account) {
    return this.httpClient.put('http://localhost:7000/api/account/', account);
  }

  add(account: Account) {
    return this.httpClient.post('http://localhost:7000/api/account/', account);
  }

  delete(accountnumber) {
    return this.httpClient.delete("http://localhost:7000/api/account/" + accountnumber);
  }
}