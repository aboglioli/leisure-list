import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { LoginService } from './login.service';
import { List } from '../../model';

@Injectable()
export class DatabaseService {

  constructor(private af: AngularFire,
              private loginService: LoginService) { }

  get lists(): Observable<any[]> {
    const uid = this.loginService.getUserId();

    return this.loginService.getState()
      .switchMap(user => {
        const uid = user.uid || 0;

        return this.af.database.list(`/${uid}/lists`);
      });
  }

  saveList(list: List) {
    const uid = this.loginService.getUserId();

    const key = this.af.database.list(`/${uid}/lists`).push(list).key;

    list.setId(key);
  }

  removeList(list: List) {
    const uid = this.loginService.getUserId();

    this.af.database.list(`/${uid}/lists/${list.getId()}`).remove();
  }

  updateList(list: List) {
    const uid = this.loginService.getUserId();
    this.af.database.list(`/${uid}/lists`).update(list.getId(), list);
  }

}
