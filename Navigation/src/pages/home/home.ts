import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SecondPage } from "../second/second";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  usingPush(){
    this.navCtrl.push(SecondPage, {text: 'by Push', type: 0});
  }

  usingSetRoot(){
    this.navCtrl.setRoot(SecondPage, {text: 'by SetRoot', type: 1});
  }

}
