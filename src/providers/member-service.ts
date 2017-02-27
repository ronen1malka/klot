import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';


@Injectable()
export class MemberService {

  constructor(public af:AngularFire) {
    console.log('Hello MemberService Provider');
  }

}
