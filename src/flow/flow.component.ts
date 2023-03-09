import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow',
  standalone: true,
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {
  n: number = 10;

  constructor() { }

  ngOnInit() {
  }

  getNumbers() {
    let arr = [];
    for (let i = 1; i <= this.n; i++) {
      arr.push(Math.trunc(100 * Math.random()));
    }
    return arr;
  }

}