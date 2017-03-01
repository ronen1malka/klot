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

  get(key: string) {
    this.af.database.object(this.rootDoc + "/" + key);
  }

  update(key: string, item: any) {
    this.af.database.object(this.rootDoc + "/" + key).update(item);
  }

  create(list: FirebaseListObservable<any[]>, item: any) {    
    list.push(item);
  }

  remove(key: string):firebase.Promise<void> {
    return this.af.database.object(this.rootDoc + "/" + key).remove();
  }
}
