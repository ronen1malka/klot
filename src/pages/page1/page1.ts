import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MembersListPage } from '../members-list-page/members-list-page'
import { OrganizationListPage } from "../organization-list/organization-list";
import { TranslateService } from '@ngx-translate/core';
@Component({
  
  templateUrl: 'page1.html'
})
export class Page1 {
  tester ;
  constructor(public navCtrl: NavController,translate: TranslateService) {
    // translate.setDefaultLang('en');
  }

clickPerson(){
  console.log("Person click");  
}

clickPayments(){
  console.log("Payments click");  
}

clickMembers(){
  console.log("Members click");
  this.navCtrl.push(MembersListPage, { })
}

clickOrgs(){
  console.log("Members click");
  this.navCtrl.push(OrganizationListPage, { })
}


}
