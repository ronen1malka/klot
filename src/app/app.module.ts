import { BaseFormHandler } from './../shared/base-form-handler';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Pages
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegestrationFormPage } from '../pages/regestration-form/regestration-form'
import {MembersListPage} from '../pages/members-list-page/members-list-page'
import {MembersFormPage} from '../pages/members-form-page/members-form-page'

import { Storage } from '@ionic/storage';

//Services
import { LoginService } from '../providers/login-service';
import { alerts } from '../shared/alerts';
import { AngularFireModule } from 'angularfire2';
import { MemberService } from '../providers/member-service';

//Components
import { butonWithIcon } from './../components/buttonWithIconComponent';



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
    HomePage,
    butonWithIcon,
    MembersListPage,
    MembersFormPage,
    BaseFormHandler
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,ReactiveFormsModule,
    AngularFireModule.initializeApp(firbaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    LoginPage,
    RegestrationFormPage,
    Page2,
    HomePage,
    butonWithIcon,
    MembersListPage,
    MembersFormPage,
    BaseFormHandler
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginService,
    MemberService,
    alerts,
    Storage
  ]  
})
export class AppModule { }
