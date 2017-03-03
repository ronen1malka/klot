import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';
import { Organization } from "../../entities/organization";
import { OrganizationService } from "../../providers/organization-service";
import { OrganizationFormPage } from "../organization-form/organization-form";

@Component({
  templateUrl: 'organization-list.html'
})
export class OrganizationListPage {
  items:FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _organizationService: OrganizationService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksListPage');
    this.items = this._organizationService.list();
  }

  add(){
    let item:Organization = new Organization();
    item.name="DDD";
    item.email="ooo@abc.com"    
    this._organizationService.create(this.items,item);
  }

  itemSelected(item) {   
    this.navCtrl.push(OrganizationFormPage, { item: item });
  }
}
