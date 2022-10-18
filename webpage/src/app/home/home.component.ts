import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  extra="assets/1.png";
  agile="assets/2.png";
  push="assets/3.jpg";
  keep="assets/4.png";
  society="assets/5.png";
  constructor() { }

  ngOnInit(): void {
  }

}
