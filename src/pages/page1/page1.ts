import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { NavController } from 'ionic-angular';
import {MembersListPagePage} from '../members-list-page/members-list-page'
@Component({
  
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

clickPerson(){
  console.log("Person click");  
}

clickPayments(){
  console.log("Payments click");  
}

clickMembers(){
  console.log("Members click");
  this.navCtrl.push(MembersListPagePage, { })
}


}
