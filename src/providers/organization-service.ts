import {AngularFireDatabase} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { BaseFirebaseDaoService } from "./base-firebase-dao-service";



@Injectable()
export class OrganizationService extends BaseFirebaseDaoService{

  constructor(public db: AngularFireDatabase) {
    super(db, "/orgs");   
  }
}