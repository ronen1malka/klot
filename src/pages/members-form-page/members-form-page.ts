import { Component,Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import
{ FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'page-members-form-page',
  templateUrl: 'members-form-page.html'
})
export class MembersFormPagePage {
  form: FormGroup;


  item;
  constructor(@Inject(FormBuilder) navCtrl: NavController,
    private navParams: NavParams,
    fb: FormBuilder) {
      
    this.item = this.navParams.get("item");

    this.form = fb.group({
      name: [this.item.name, Validators.required],
      email: [this.item.email, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersFormPagePage');

  }

}
