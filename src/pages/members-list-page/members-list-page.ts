import {Member} from '../../entities/member'
import { MemberService } from '../../providers/member-service';
import { MembersFormPage } from '../members-form-page/members-form-page'
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-members-list-page',
  templateUrl: 'members-list-page.html'
})
export class MembersListPage {
  members:FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _memberService: MemberService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksListPage');
    this.members = this._memberService.list();
  }

  add(){
    let mem:Member = new Member();
    mem.name="DDD";
    mem.adrress="adrs 1"
    //this.members.push(mem);
    this._memberService.create(this.members,mem);
  }

  itemSelected(item) {
    console.log("member selected: " + item);
    this.navCtrl.push(MembersFormPage, { item: item });
  }

}
