import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  tabId:number = 1;
  tabs = [
    { id: 1, tabtitle: "Place Sell Request" },
    { id: 2, tabtitle: "View Sold Crop History" },
    { id: 3, tabtitle: "View Marketplace" },
  ]
  ngOnInit(): void {
  }
  openTab(id: number) {
    this.tabId = id;
  }

}
