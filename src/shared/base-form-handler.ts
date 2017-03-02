import { alerts } from './alerts';
import { BaseFirebaseDaoService } from './../providers/base-firebase-dao-service';
import { Injectable,Component,Inject } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2';

@Injectable()
@Component({   
     templateUrl: './dummy.html'
})
export class BaseFormHandler<T extends BaseFirebaseDaoService> {
  form: FormGroup;
  item;
  
  dao:T;
  constructor(public navParams: NavParams,
    public fb: FormBuilder, public _alerts:alerts) {
    this.item = this.navParams.get("item");    
    this.buildForm();
  }

  buildForm(){
    //to be ovveride in sub clusses.
  }

  remove(){    
    this.dao.remove(this.item.$key)
    .then((a:void) => {
      this._alerts.presentToast("removed success");
    })
    .catch((a:Error) => {this._alerts.presentToast("remove fail")});
  }
  submit() {
    console.log(this.form.value);
    let key = this.item.$key;
    this.dao.update(key, this.form.value);
  }
}
