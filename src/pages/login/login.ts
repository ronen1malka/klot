import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Page1 } from '../page1/page1';
import { RegestrationFormPage } from '../regestration-form/regestration-form';
import { LoginService } from '../../providers/login-service';
import { alerts } from '../../shared/alerts';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email = "";
  password = "";

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private _loginService: LoginService,
    private _storage: Storage,
    private _alerts: alerts) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this._storage.get("creds").then((val) => {
      if (val !== null) {
        this.email = val.user;
        this.password = val.password
        this.doLogin();
      }
    })
  }

  doLogin() {
    //
    this._loginService.login(this.email, this.password)
      .then(authState => {
        console.log("LOGIN-THEN", authState);
        let creds = { user: this.email, password: this.password }
        this._storage.set("creds", creds);

        this.navCtrl.push(Page1);
      })
      .catch(error => {
        console.log("LOGIN-ERROR", error)
        if (error['code'] == "auth/invalid-email") {
          this._alerts.showAlert("שגיאה", "כתובת אמייל אינה חוקית", ["OK"]);
        }
        else {
          this._alerts.showAlert("Error", "Login failed", ["OK"])
        }
      });
  }

  register() {
    this.navCtrl.push(RegestrationFormPage);
  }

  logout() {
    this._loginService.logout();
  }
}
