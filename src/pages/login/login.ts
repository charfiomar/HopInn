import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, ToastController } from 'ionic-angular';
import { TabsProvider } from "../../providers/tabs/tabs";
import { RegisterModalPage } from "../register-modal/register-modal";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styles: [
    './login.scss',
  ]
})
export class LoginPage {

  constructor(public navCtrl: NavController
    , public modalCtrl: ModalController
    , public navParams: NavParams
    , public tabsProvider: TabsProvider
    , public toastCtrl: ToastController) { }

  login() {
    this.tabsProvider.updateLoggedState(true);
    let toast = this.toastCtrl.create({
       message: 'Logged in successfully',
       duration: 1500
     });
     toast.present();
  }

  register(){
    this.modalCtrl.create(RegisterModalPage).present();
  }

}
