import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { TabsProvider } from "../providers/tabs/tabs";

@Component({
  templateUrl: 'app.html',
})
export class MyApp {

  @ViewChild(Nav) nav:Nav;

  rootPage: any = TabsPage;
  isLogged: boolean;

  constructor(platform: Platform
    , statusBar: StatusBar
    , splashScreen: SplashScreen
    , public tabsProvider: TabsProvider) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.tabsProvider.isLogged().subscribe((logged: boolean) => {
      this.nav.setRoot(TabsPage, { index: 2, isLogged: logged });
    });
  }
}
