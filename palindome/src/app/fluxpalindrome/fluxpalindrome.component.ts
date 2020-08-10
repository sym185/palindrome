import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {checkPalindrom} from "../function/checkPalindrom";

@Component({
  selector: 'app-fluxpalindrome',
  templateUrl: './fluxpalindrome.component.html',
  styleUrls: ['./fluxpalindrome.component.css']
})
export class FluxpalindromeComponent implements OnInit {

  data : string[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAll().subscribe(data=>
    this.data = data)

  }

  check (str) {
    return checkPalindrom(str);
  }


}
