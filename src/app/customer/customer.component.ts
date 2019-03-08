import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  custData: String = "custData";
  custData2: String = "custdata2";
  showchild: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  custAlert() {
    this.custData = this.custData2;
    alert(this.custData2);
  }

  ok() {
    this.router.navigate(["/nav", { custData: "Logged In" }])
  }

}
