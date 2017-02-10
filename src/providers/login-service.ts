import { Injectable } from '@angular/core';
import { AngularFire,AuthMethods,AuthProviders } from 'angularfire2';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  constructor(private af: AngularFire) {
    console.log('Hello LoginService Provider');
  }

  login(email, password) {
    return this.af.auth.login({
      email: email,
      password: password
    },{
    method:AuthMethods.Password,
    provider:AuthProviders.Password
   });   
  }

  register(email="", password="") {
    return this.af.auth.createUser({
      email: email,
      password: password
      
    });
  }

  logout() {
    this.af.auth.logout();
  }
}
