import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Organization } from "../../entities/organization";
import { OrganizationService } from "../../providers/organization-service";
import { OrganizationFormPage } from "../organization-form/organization-form";
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'organization-list.html'
})
export class OrganizationListPage {
  items:Observable<any[]>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _organizationService: OrganizationService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksListPage');
    this.items = this._organizationService.list().valueChanges();
  }

  add(){
    let item:Organization = new Organization();
    item.name="DDD";
    item.email="ooo@abc.com"        
    this._organizationService.create(item);
  }

  itemSelected(item) {   
    this.navCtrl.push(OrganizationFormPage, { item: item });
  }
}
