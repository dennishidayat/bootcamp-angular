import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  @Input() data: String = "";
  @Output() public childEvent = new EventEmitter();
  public message = "hello";
  showchild: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  fireEvent() {
    this.childEvent.emit('Hello from the other side');
  }
}