import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RidesPage } from './rides'

@NgModule({
  declarations: [
    RidesPage,
  ],
  imports: [
    IonicPageModule.forChild(RidesPage),
  ],
  entryComponents: [
    RidesPage,
  ],
})
export class RidesPageModule {}
