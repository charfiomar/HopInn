import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ProfilePage } from "../profile/profile";
import { TabsProvider } from "../../providers/tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styles: [
    './login.scss',
  ]
})
export class LoginPage {

  constructor(public navCtrl: NavController
    , public modalController: ModalController
    , public navParams: NavParams
    , public tabsProvider: TabsProvider) { }

  login() {
    this.tabsProvider.updateLoggedState(true);
  }

}
