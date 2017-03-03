import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BaseFirebaseDaoService } from "./base-firebase-dao-service";
import { AngularFire } from "angularfire2";


@Injectable()
export class OrganizationService extends BaseFirebaseDaoService{

  constructor(public af: AngularFire) {
    super(af, "/orgs");   
  }
}