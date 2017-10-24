import {Member} from '../../entities/member'
import { MemberService } from '../../providers/member-service';
import { MembersFormPage } from '../members-form-page/members-form-page'
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'members-list-page.html'
})
export class MembersListPage {
  members:Observable<any[]>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _memberService: MemberService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksListPage');
    this.members = this._memberService.list().valueChanges();
  }

  add(){
    let mem:Member = new Member();
    mem.name="DDD";
    mem.adrress="adrs 1"    
    this._memberService.create(mem);
  }

  itemSelected(item) {   
    this.navCtrl.push(MembersFormPage, { item: item });
  }

}
