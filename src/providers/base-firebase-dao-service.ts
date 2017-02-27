import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class BaseFirebaseDaoService {

  public rootDoc: string = "";
  constructor(public af: AngularFire) {
    console.log('Hello BaseFirebaseDaoService Provider');
  }

  list(): FirebaseListObservable<any[]> {
    return this.af.database.list('rootDoc');
  }

  get() {

  }

  update() {

  }

  create() {

  }

  remove() {

  }
}
