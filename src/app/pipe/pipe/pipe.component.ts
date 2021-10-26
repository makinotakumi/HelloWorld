import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  s: string;
  s2: string;
  d: Date;
  n: number;
  n2: number;
  n3: number;

  constructor(){
    this.s = "Hello";
    this.s2 = "1234";
    this.d = new Date(2017, 4, 1);
    this.n = 1234.56;
    this.n2 = 3.14159;
    this.n3 = 7;
  }

  ngOnInit(){
    this.s = "Hello";
    this.s2 = "1234";
    this.d = new Date(2017, 4, 1);
    this.n = 1234.56;
    this.n2 = 3.14159;
    this.n3 = 7;
  }

}
