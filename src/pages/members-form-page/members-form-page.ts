import {AngularFireDatabase} from 'angularfire2/database';
import { alerts } from './../../shared/alerts';
import { BaseFormHandler } from './../../shared/base-form-handler';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MemberService } from '../../providers/member-service';
import { NavParams, NavController } from 'ionic-angular';


@Component({
  templateUrl: 'members-form-page.html'
})
export class MembersFormPage extends BaseFormHandler<MemberService>{
  constructor(navCtrl: NavController,
    navParams: NavParams,
    public fb: FormBuilder,
    afd:AngularFireDatabase,
    _alerts: alerts) {
    super(navCtrl, navParams,fb, _alerts);    
    this.dao = new MemberService(afd);
  }
  buildForm() {
    this.form = this.fb.group({
      name: [this.item.name, Validators.required],
      email: [this.item.email, Validators.required],
      adress: [this.item.adress, Validators.required]
    });
  }
}
