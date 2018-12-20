import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register-modal',
  templateUrl: 'register-modal.html',
  styles: [
    './register-modal.scss',
  ],
})
export class RegisterModalPage {

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public viewCtrl: ViewController) {
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
