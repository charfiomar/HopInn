import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FromToUniversityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-from-to-university',
  templateUrl: 'from-to-university.html',
})
export class FromToUniversityPage {

  fromUniversity: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fromUniversity = navParams.get('fromUniversity');
  }

}
