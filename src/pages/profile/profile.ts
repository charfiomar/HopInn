import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
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
    , public tabsProvider: TabsProvider
    , public alertCtrl: AlertController
    , public loadingCtrl: LoadingController) {

  }

  logout() {
    const confirm = this.alertCtrl.create({
      title: "Logout ?",
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Logout',
          handler: () => {
            const loader = this.loadingCtrl.create({
              content: "Logging out...",
              duration: 1500
            });
            loader.present();
            this.tabsProvider.updateLoggedState(false);
          }
        }
      ]
    });
    confirm.present();
  }

}
