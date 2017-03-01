import { BaseFormHandler } from './../../shared/base-form-handler';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MemberService } from '../../providers/member-service';
import { NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

@Component({
  templateUrl: 'members-form-page.html'
})
export class MembersFormPage extends BaseFormHandler<MemberService>{
  constructor(public navParams: NavParams,
    public fb: FormBuilder, af: AngularFire) {
    super(navParams, fb);
    this.dao = new MemberService(af);
  }
  buildForm() {
    this.form = this.fb.group({
      name: [this.item.name, Validators.required],
      email: [this.item.email, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersFormPage');
  }

}
