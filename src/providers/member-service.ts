import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
import { BaseFirebaseDaoService } from './base-firebase-dao-service'
import 'rxjs/add/operator/map';


@Injectable()
export class MemberService extends BaseFirebaseDaoService {

  constructor(public af: AngularFire) {
    super(af, "/members");
    
  }



}
