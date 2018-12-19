import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-rides',
  templateUrl: 'rides.html',
  styles: [
    'rides.scss',
  ]
})
export class RidesPage {

  constructor(public navCtrl: NavController
    , public navParams: NavParams) {

  }

}
