import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TranslateService } from '@ngx-translate/core';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      translate.use('he');
      translate.setDefaultLang('he');
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

