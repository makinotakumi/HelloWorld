import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  str: string="< *ngif='true false / 変数'>";
  colorString = [
    {color: 'red', strlen: '3'},
    {color: 'blue', strlen: '4'},
    {color: 'green', strlen: '5'}
  ];
  paturn: number = 0;
  i: number = 0;
  str1: string = '';
  isDisplay: boolean = true;
  isButton: boolean = true;
  onButtonClass: object = {  };
  helloStyle = {};
  fontColor = 'green';
  fontSize = '16px';


  constructor() { }

  ngOnInit(): void {
    this.setStyle();
  }

  onClicked(result: boolean) {

    console.log(result);
    this.isDisplay = result;
  }

  onClickedPaturn() {
    this.i++;
    if(this.i%3==0) {
      this.paturn = 0;
    }else if(this.i%3==1) {
      this.paturn = 1;
    }else if(this.i%3==2) {
      this.paturn = 2;
    }
  }

  onKeyup(s: string) {
    this.str1 = s;
    this.isButton = !(s.length > 0);
    this.setButtonClass();
  }

  setButtonClass() {
    this.onButtonClass = {
      'btn-blue': !this.isButton,
      'btn-red': this.isButton,
      'disabled': this.isButton
    }
  }

  setStyle() {
    this.helloStyle = {
      'color': this.fontColor,
      'fontSize': this.fontSize
    }
  }

  onClick(color: string, size: string) {
    this.fontColor = color;
    this.fontSize = size;
    this.setStyle();
  }
}
