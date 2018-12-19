import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs'
import { TabsProvider } from "../../providers/tabs/tabs";

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
  entryComponents: [
    TabsPage,
  ],
  providers: [
    TabsProvider,
  ]
})
export class RegisterModalPageModule {}
