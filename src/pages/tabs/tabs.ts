import { Component } from '@angular/core';
import { ProfilePage } from "../profile/profile";
import { HomePage } from "../home/home";
import { RidesPage } from "../rides/rides";
import { LoginPage } from "../login/login";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RidesPage;
  tab3Root = LoginPage;

  constructor() {

  }
}
