import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { LoginPage } from '../pages/login/login';
import { Page2 } from '../pages/page2/page2';
<<<<<<< HEAD
import { HomePage } from '../pages/home/home';
import { RegestrationFormPage } from '../pages/regestration-form/regestration-form'
import { Storage } from '@ionic/storage';
=======
import { AngularFireModule } from 'angularfire2';

const config = {
  apiKey: "AIzaSyBXFVJ0IluXJ2xFujaUguJygC9KO1FyTjo",
  authDomain: "project1-e57a3.firebaseapp.com",
  databaseURL: "https://project1-e57a3.firebaseio.com",
  storageBucket: "project1-e57a3.appspot.com",
  messagingSenderId: "777962288428"
};

>>>>>>> origin/master


//Services
import { LoginService } from '../providers/login-service';
import { alerts } from '../shared/alerts';
import { AngularFireModule } from 'angularfire2';
export const firbaseConfig = {
  apiKey: "AIzaSyC_dY5Mmf9gYBGbPd2cLKurNX2HR4OZq1g",
  authDomain: "klot-8d73f.firebaseapp.com",
  databaseURL: "https://klot-8d73f.firebaseio.com",
  storageBucket: "klot-8d73f.appspot.com",
  messagingSenderId: "1098912980685"
};
@NgModule({
  declarations: [
    MyApp,
    Page1,
    LoginPage,
    RegestrationFormPage,
    Page2,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
<<<<<<< HEAD
    AngularFireModule.initializeApp(firbaseConfig)
=======
    AngularFireModule.initializeApp(config)
>>>>>>> origin/master
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    LoginPage,
    RegestrationFormPage,
    Page2,
    HomePage
  ],
<<<<<<< HEAD
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginService,
    alerts,
    Storage
  ]
=======
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
>>>>>>> origin/master
})
export class AppModule { }
