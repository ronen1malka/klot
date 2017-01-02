import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { AngularFireModule } from 'angularfire2';

const config = {
  apiKey: "AIzaSyBXFVJ0IluXJ2xFujaUguJygC9KO1FyTjo",
  authDomain: "project1-e57a3.firebaseapp.com",
  databaseURL: "https://project1-e57a3.firebaseio.com",
  storageBucket: "project1-e57a3.appspot.com",
  messagingSenderId: "777962288428"
};


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
