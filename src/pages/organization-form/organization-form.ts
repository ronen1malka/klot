import {AngularFireDatabase} from 'angularfire2/database';
import { alerts } from './../../shared/alerts';
import { BaseFormHandler } from './../../shared/base-form-handler';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavParams, NavController } from 'ionic-angular';

import { OrganizationService } from "../../providers/organization-service";

@Component({
  templateUrl: 'organization-form.html'
})
export class OrganizationFormPage extends BaseFormHandler<OrganizationService>{
  constructor(navCtrl: NavController,
    navParams: NavParams,
    public fb: FormBuilder,
    afd:AngularFireDatabase,
    _alerts: alerts) {
    super(navCtrl, navParams,fb, _alerts);    
    this.dao = new OrganizationService(afd);
  }
  buildForm() {
    this.form = this.fb.group({
      name: [this.item.name, Validators.required],
      email: [this.item.email, Validators.required],
      adress: [this.item.adress, Validators.required]
    });
  }
}
