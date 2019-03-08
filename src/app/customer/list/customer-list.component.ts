import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
import { CustomerFormComponent } from '../form/customer-form.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

    @ViewChild('formCust')
    formCustomer: CustomerFormComponent;

    listCustomer: Customer[] = [];
    showDetail: boolean = false;
    selectedCustomer = new Customer();
    setData = [];

    //dependency injection
    constructor(private customerService: CustomerService, private router: Router) { }

    create() {
        this.showDetail = true;
    }

    ngOnInit() {
        this.loadData();
    }

    selectCustomer(customer: Customer) {
        let copyCustomer = new Customer();
        copyCustomer.customernumber = customer.customernumber;
        copyCustomer.username = customer.username;
        copyCustomer.password = customer.password;
        copyCustomer.birthdate = customer.birthdate;
        copyCustomer.firstname = customer.firstname;
        copyCustomer.lastname = customer.lastname;
        copyCustomer.phonetype = customer.phonetype;
        copyCustomer.phonenumber = customer.phonenumber;
        this.selectedCustomer = copyCustomer;
        this.showDetail = true;
        if (this.formCustomer) {
            this.formCustomer.setData();
        }
    }

    loadData() {
        this.customerService.getList().subscribe((Response) => {
            console.log(JSON.stringify(Response));
            Object.assign(this.listCustomer, Response['values']);
        }, (err) => {
            alert('error : ' + JSON.stringify(err));
        });
    }

    viewById(customer: Customer) {
        this.router.navigate(['./accountlist/', { customer: customer.customernumber }]);
        console.log(customer.customernumber);
    }

    prosesResult(result) {
        if (result) {
            this.showDetail = false;
            this.loadData();
        }
    }

    deleteRow(customernumber) {
        this.customerService.delete(customernumber);
    }
}
