import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login'
import { TabsProvider } from "../../providers/tabs/tabs";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  entryComponents: [
    LoginPage,
  ],
  providers: [
    TabsProvider,
  ]
})
export class RegisterModalPageModule {}
