import { alerts } from './alerts';
import { BaseFirebaseDaoService } from './../providers/base-firebase-dao-service';
import { Injectable, Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { FormGroup,FormBuilder } from '@angular/forms';

@Injectable()
@Component({
  templateUrl: './dummy.html'
})
export class BaseFormHandler<T extends BaseFirebaseDaoService> {
  form: FormGroup;
  item;
  
  dao: T;
  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    public fb: FormBuilder,
    private _alerts: alerts) {
    this.item = this.navParams.get("item");
    this.buildForm();
  }

  buildForm() {
    //to be ovveride in sub clusses.
  }

  remove() {
    this.dao.remove(this.item.$key)
      .then((a: void) => {
        this.navCtrl.pop();
        this._alerts.presentToast("removed success");
      })
      .catch((a: Error) => { this._alerts.presentToast("remove fail") });
  }
  submit() {
    console.log(this.form.value);
    this.navCtrl.pop();
    let key = this.item.$key;
    this.dao.update(key, this.form.value);
     this._alerts.presentToast("submit success");
  }
}
