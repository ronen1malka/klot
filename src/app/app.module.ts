import { BaseFormHandler } from './../shared/base-form-handler';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, AlertController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Pages
import { Page1 } from '../pages/page1/page1';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegestrationFormPage } from '../pages/regestration-form/regestration-form'
import { MembersListPage } from '../pages/members-list-page/members-list-page'
import { MembersFormPage } from '../pages/members-form-page/members-form-page'

import { IonicStorageModule } from '@ionic/storage';
//Services
import { LoginService } from '../providers/login-service';
import { alerts } from '../shared/alerts';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { MemberService } from '../providers/member-service';
import { OrganizationService } from "../providers/organization-service";

//Components
import { butonWithIcon } from './../components/buttonWithIconComponent';
import { OrganizationFormPage } from "../pages/organization-form/organization-form";
import { OrganizationListPage } from "../pages/organization-list/organization-list";
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    MyApp,
    Page1,
    LoginPage,
    RegestrationFormPage,
    HomePage,
    butonWithIcon,
    MembersListPage,
    MembersFormPage,
    OrganizationFormPage,
    OrganizationListPage,
    BaseFormHandler
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, "Kehilot"),
    AngularFireDatabaseModule,  
    AngularFirestoreModule,  
    AngularFireAuthModule,    
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    LoginPage,
    RegestrationFormPage,
    HomePage,
    butonWithIcon,
    MembersListPage,
    MembersFormPage,
    OrganizationFormPage,
    OrganizationListPage,
    BaseFormHandler
  ],
  providers: [
    LoginService,
    MemberService,
    AngularFireAuth,
    alerts,
    StatusBar,
    SplashScreen,
    AlertController,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    OrganizationService
  ]
})
export class AppModule { }
