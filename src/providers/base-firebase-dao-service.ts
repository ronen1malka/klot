import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Injectable } from '@angular/core';



@Injectable()
export class BaseFirebaseDaoService {

  constructor(public db: AngularFireDatabase, public rootDoc: string = "") {
    console.log('Hello BaseFirebaseDaoService Provider');
  }

  list(): AngularFireList<any[]> {
    return this.db.list(this.rootDoc);
  }

  get(key: string) {
    this.db.object(this.rootDoc + "/" + key);
  }

  update(key: string, item: any) {
    this.db.object(this.rootDoc + "/" + key).update(item);
  }

  create(item: any) {
    this.db.object(this.rootDoc ).set(item);
    
    this.db.list(this.rootDoc).push(item);
  }

  remove(key: string):Promise<void> {
    return this.db.object(this.rootDoc + "/" + key).remove();
  }
}
