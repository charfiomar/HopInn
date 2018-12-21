import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyRidesPage } from "../my-rides/my-rides";
import { FromToUniversityPage } from "../from-to-university/from-to-university";

@Component({
  selector: 'page-rides',
  templateUrl: 'rides.html',
  styles: [
    'rides.scss',
  ]
})
export class RidesPage {

  constructor(public navCtrl: NavController
    , public navParams: NavParams) {

  }

  goToMyRides(){
    this.navCtrl.push(MyRidesPage);
  }
  goToUniversty(){
    this.navCtrl.push(FromToUniversityPage, {fromUniversity : false});
  }
  goFromUniversity(){
    this.navCtrl.push(FromToUniversityPage, {fromUniversity : true});
  }
}
