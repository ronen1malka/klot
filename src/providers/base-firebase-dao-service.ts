import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class BaseFirebaseDaoService {

  constructor(public af: AngularFire, public rootDoc: string = "") {
    console.log('Hello BaseFirebaseDaoService Provider');
  }

  list(): FirebaseListObservable<any[]> {
    return this.af.database.list(this.rootDoc);
  }

  get() {

  }

  update(key: string, item: any) {
    this.af.database.object(this.rootDoc + "/" + key).set(item);
  }

  create(list: FirebaseListObservable<any[]>, item: any) {
    console.log("Create...");
    list.push(item);
  }

  remove(key: string) {
    this.af.database.object(this.rootDoc + "/" + key).remove;
  }
}
