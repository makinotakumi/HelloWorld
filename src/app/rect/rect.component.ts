import { Component } from '@angular/core';

@Component({
    selector: 'rect',
    templateUrl: '/rect.component.html',
    styleUrls: ['/rect.component.scss']
})
export class RectComponent {
    ip :string = '';
    pb :string ='[value]="変数名"　←　プロパティバインディング';
    eb :string = '';
    text :string = '';
    i :number = 0;
    isDisplay :boolean = true;
    isColor :string = 'red';
    product = {
        'id': 0,
        'name': ''
    };

    constructor() {
        this.ip = '{{変数名}}　←　インターポレーション'
    }

    onClicked(event: any):void {
        console.log(event);
        console.log("a");

        if(this.i++ % 2 === 0){
            this.eb = '';
        } else {
            this.eb = '(click)=関数名() ←　イベントバインディング';
        }
    }

    onClicked2():void {
        
        if(this.isDisplay){
            this.isDisplay = false;
        } else {
            this.isDisplay = true;
        }
        console.log("onClicke2");
        console.log(this.isDisplay);
    }

    onClicked3():void {
        this.i++;
        if(this.i % 3 === 0){
            this.isColor = 'blue';
        } else if(this.i % 3 === 1) {
            this.isColor = 'green';
        } else if(this.i % 3 === 2) {
            this.isColor = 'red';
        }
    }

    onKeyup(str :any):void {
        this.text = str;
    }



}