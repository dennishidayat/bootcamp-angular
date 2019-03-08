import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // pengkoneksi dengan API
  constructor(private httpClient:HttpClient) { }

  getList(){
    return this.httpClient.get('http://localhost:7000/api/customer')
  }

  update(customer: Customer ){
    console.log('sending customer '+customer.customernumber);
    return this.httpClient.put('http://localhost:7000/api/customer', customer)
  }

  add(customer: Customer){
    return this.httpClient.post('http://localhost:7000/api/customer', customer)
  }

  delete(customernumber){
    return this.httpClient.delete('http://localhost:7000/api/customer/'+ customernumber).subscribe(Response=>{
      location.href="customerlist"
    }, err=>{
      "customerlist"
    })
  }
}
