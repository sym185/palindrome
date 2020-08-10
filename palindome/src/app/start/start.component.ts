import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import {checkPalindrom} from "../function/checkPalindrom";

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  params : String;
  palindrom : boolean;

  constructor(private activatedRoute: ActivatedRoute, private routerTestingModule: RouterTestingModule) {
    this.activatedRoute.params.subscribe(params => {
      this.params = params['parameter'];
    });
  }

  ngOnInit(): void {
    if(checkPalindrom(this.params)){
      this.palindrom = true;
    }
    else {
      this.palindrom = false;
    }
  }

}
