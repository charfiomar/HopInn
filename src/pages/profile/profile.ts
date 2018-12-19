import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsProvider } from "../../providers/tabs/tabs";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  styles: [
    './profile.scss',
  ]
})
export class ProfilePage {

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public tabsProvider: TabsProvider) {

  }

  logout(){
    this.tabsProvider.updateLoggedState(false);
  }

}
