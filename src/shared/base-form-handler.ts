import { BaseFirebaseDaoService } from './../providers/base-firebase-dao-service';
import { Injectable,Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable()
@Component({   
     templateUrl: './dummy.html'
})
export class BaseFormHandler<T extends BaseFirebaseDaoService> {
  form: FormGroup;
  item;
  dao:T;
  constructor(public navParams: NavParams,
    public fb: FormBuilder) {
    this.item = this.navParams.get("item");    
    this.buildForm();
  }

  buildForm(){

  }

  submit() {
    console.log(this.form.value);
    let key = this.item.$key;
    this.dao.update(key, this.form.value);
  }

}
