import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CustomerService } from '../list/customer.service';
import { Customer } from '../list/customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerFormGroup: FormGroup;
  submitted = false;

  @Input()
  customer: Customer;

  @Output()
  result = new EventEmitter();

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerFormGroup = this.formBuilder.group({
      customernumber: [''],
      username: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      birthdate: [Date],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phonetype: [''],
      phonenumber: ['']
    });
      this.setData()
    }

    setData(){
      this.setDataToForm(this.customer)
    }

    setDataToForm(customer){
      if (this.customer) {
        this.customerFormGroup.controls['customernumber'].setValue(this.customer.customernumber);
        this.customerFormGroup.controls['username'].setValue(this.customer.username);
        this.customerFormGroup.controls['password'].setValue(this.customer.password);
        this.customerFormGroup.controls['birthdate'].setValue(this.customer.birthdate);
        this.customerFormGroup.controls['firstname'].setValue(this.customer.firstname);
        this.customerFormGroup.controls['lastname'].setValue(this.customer.lastname);
        this.customerFormGroup.controls['phonetype'].setValue(this.customer.phonetype);
        this.customerFormGroup.controls['phonenumber'].setValue(this.customer.phonenumber);
      }
    }
  

  submitData() {
    if (this.customerFormGroup.valid) {
      alert('Please confirm')
    }
    let customer: Customer = new Customer();
    customer.customernumber = this.customerFormGroup.controls['customernumber'].value;
    customer.username = this.customerFormGroup.controls['username'].value;
    customer.password = this.customerFormGroup.controls['password'].value;
    customer.birthdate = this.customerFormGroup.controls['birthdate'].value;
    customer.firstname = this.customerFormGroup.controls['firstname'].value;
    customer.lastname = this.customerFormGroup.controls['lastname'].value;
    customer.phonetype = this.customerFormGroup.controls['phonetype'].value;
    customer.phonenumber = this.customerFormGroup.controls['phonenumber'].value;
    console.log('updating customer : ',customer);
    this.customerService.add(customer).subscribe((Response) => {
      console.log(JSON.stringify(Response));
      this.result.emit(true);
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    });
  }

  cancel() {
    this.result.emit(true);
  }
}

