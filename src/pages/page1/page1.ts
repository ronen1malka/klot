import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  tester ;
  constructor(public navCtrl: NavController, af: AngularFire) {
    af.database.list('/list1').subscribe(x => {
      this.tester = x;
      console.log(this.tester)
    })
  }

}
