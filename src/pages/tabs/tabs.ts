import { Component } from '@angular/core';
import { HomePage } from "../home/home";
import { RidesPage } from "../rides/rides";
import { LoginPage } from "../login/login";
import { ProfilePage } from "../profile/profile";
import { TabsProvider } from "../../providers/tabs/tabs";
import { NavParams } from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  index: number = 0;

  home: any = HomePage;
  tab2: any;
  tab3: any;

  isLogged: boolean;

  constructor(public navParams: NavParams
    , public tabsProvider: TabsProvider) {
    this.index = navParams.data.index || 0;
    this.isLogged = navParams.data.isLogged;
    if (this.isLogged) {
      this.tab3 = ProfilePage;
    } else {
      this.tab3 = LoginPage;
    }
    this.tab2 = RidesPage;
  }
}
