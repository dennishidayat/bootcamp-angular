import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navData : String = "nav data";
  navDataTwoWays : String = "nav data two ways";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params=>{
        this.navData = params["custData"]
      }
    )
  }

  navAlert(){
    this.navData = this.navDataTwoWays;
    alert(this.navDataTwoWays);
  }

}
