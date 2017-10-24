import {AngularFireDatabase} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { BaseFirebaseDaoService } from './base-firebase-dao-service'
import 'rxjs/add/operator/map';


@Injectable()
export class MemberService extends BaseFirebaseDaoService {

  constructor(public afd: AngularFireDatabase) {
    super(afd, "/members");
    
  }

}
