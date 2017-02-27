import { Member } from './../../entities/member';


import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-members-list-page',
  templateUrl: 'members-list-page.html'
})
export class MembersListPagePage {
  mem:Member;
  members=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersListPagePage');
  }

}
