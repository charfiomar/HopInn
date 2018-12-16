import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  styles:[
    './profile.scss',
  ]
})
export class ProfilePage {
  constructor(public navCtrl: NavController) {

  }

}
