import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { LoginService } from './login.service';
import { List, Movie } from '../../model';

@Injectable()
export class DatabaseService {

  constructor(private af: AngularFire,
              private router: Router,
              private loginService: LoginService) { }

  getLists(): Observable<List[]> {
    return this.loginService.getState()
      .switchMap(user => {
        const uid = user && user.uid;

        if(!uid) {
          this.loginService.logout();
          this.router.navigate(['/']);
        } else {
          return this.af.database.list(`/${uid}/lists`);
        }

        return Observable.of([]);
      })
      .map(lists => {
        return lists.map(list => {
          const newList = new List(list.name, list.$key);

          if(list.elements) {
            list.elements.forEach(element => {
              newList.addElement(new Movie(element.data));
            });
          }

          return newList;
        });
      });
  }

  saveList(list: List) {
    const uid = this.loginService.getUserId();

    const key = this.af.database.list(`/${uid}/lists`).push({
      name: list.getName(),
      elements: list.getElements()
    }).key;

    list.setId(key);
  }

  removeList(list: List) {
    const uid = this.loginService.getUserId();

    this.af.database.list(`/${uid}/lists/${list.getId()}`).remove();
  }

  updateList(list: List) {
    const uid = this.loginService.getUserId();
    this.af.database.list(`/${uid}/lists`).update(list.getId(), {
      name: list.getName(),
      elements: list.getElements()
    });
  }

}
