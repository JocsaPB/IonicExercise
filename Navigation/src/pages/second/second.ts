import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  public text: string;
  public visible: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = this.navParams.get('text');

    if(this.navParams.get('type') === 0)
      this.visible = true;
  }

  backPop(){
    this.navCtrl.pop();
  }

  backSetRoot(){
    this.navCtrl.setRoot(HomePage);
  }
}
