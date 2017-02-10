import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { LoginPage } from '../pages/login/login';
import { Page2 } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import { RegestrationFormPage } from '../pages/regestration-form/regestration-form'
import { Storage } from '@ionic/storage';


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
    AngularFireModule.initializeApp(firbaseConfig)
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
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginService,
    alerts,
    Storage
  ]
})
export class AppModule { }
