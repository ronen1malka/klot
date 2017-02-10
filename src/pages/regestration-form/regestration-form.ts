import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginService } from '../../providers/login-service';
import {alerts} from '../../shared/alerts';

@Component({
  selector: 'page-regestration-form',
  templateUrl: 'regestration-form.html'
})
export class RegestrationFormPage {

  userName;
  email;
  password;
  confirmPassword;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _loginService: LoginService,
    private _alerts:alerts) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegestrationFormPage');
  }

  register() {
    this._loginService.register(this.email, this.password)
        .then(authState => {
          console.log("REGISTER-THEN", authState)
          authState.auth.sendEmailVerification();
        })
        .catch(error => {
          console.log("REGISTER-ERROR", error)
          if(error['code'] == "auth/invalid-email"){
            this._alerts.showAlert("שגיאה","כתובת אמייל אינה חוקית",["OK"]);
          }
          else if (error['code'] == 'auth/weak-password'){
            this._alerts.showAlert("שגיאה","סיסמא חלשה. צריך לפחות 6 תווים",["OK"]);
          }
        });
  }
}
