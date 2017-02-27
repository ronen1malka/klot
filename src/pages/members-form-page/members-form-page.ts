import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-members-form-page',
  templateUrl: 'members-form-page.html'
})
export class MembersFormPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersFormPagePage');
  }

}
