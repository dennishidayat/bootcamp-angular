import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Customer } from 'src/app/customer/list/customer';
import { CustomerService } from 'src/app/customer/list/customer.service';

@Component({
  selector: 'app-combo-customer',
  templateUrl: './combo-customer.component.html',
  styleUrls: ['./combo-customer.component.css']
})
export class ComboCustomerComponent implements OnInit {

  listCustomer: Customer[] = [];

  @Output()
  customer = new EventEmitter<Customer>();

  @Input()
  selectedCustomer: Customer;

  constructor(private customerService: CustomerService) {

  }

  ngOnInit() {
    this.loadData();
  }

  onchange(index) {
    console.log('selected : ' + index ? JSON.stringify(index) : '');
    if (this.listCustomer && this.listCustomer.length > 0) {
      this.customer.emit(this.listCustomer[index]);
    };
  }

  loadData() {
    this.customerService.getList().subscribe((Response) => {
      console.log(JSON.stringify(Response));
      Object.assign(this.listCustomer, Response['values']);
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    });
  }

}
