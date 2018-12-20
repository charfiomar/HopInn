import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login'
import { TabsProvider } from "../../providers/tabs/tabs";
import { RegisterModalPage } from "../register-modal/register-modal";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  entryComponents: [
    LoginPage,
    RegisterModalPage,
  ],
  providers: [
    TabsProvider,
  ]
})
export class RegisterModalPageModule {}
