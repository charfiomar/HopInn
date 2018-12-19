import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register-modal',
  templateUrl: 'register-modal.html',
})
export class RegisterModalPage {

  constructor(public navCtrl: NavController
    , public navParams: NavParams) {
  }


}
