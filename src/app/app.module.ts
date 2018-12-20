import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from "../pages/profile/profile";
import { HomePage } from "../pages/home/home";
import { RidesPage } from "../pages/rides/rides";
import { LoginPage } from "../pages/login/login";
import { TabsProvider } from '../providers/tabs/tabs';
import { RegisterModalPageModule } from "../pages/register-modal/register-modal.module";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProfilePage,
    HomePage,
    RidesPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RegisterModalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    LoginPage,
    HomePage,
    RidesPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TabsProvider,
  ]
})
export class AppModule { }
