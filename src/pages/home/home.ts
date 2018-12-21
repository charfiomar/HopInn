import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [
    'home.scss',
  ]
})
export class HomePage {

  constructor(public navCtrl: NavController
    , public navParams: NavParams) {

  }

  goToRides(){
    this.navCtrl.parent.select(1);
  }
}
