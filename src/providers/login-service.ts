import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class LoginService {

  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello LoginService Provider');
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);   
  }

  register(email="", password="") {
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
