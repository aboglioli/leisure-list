import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { LoginService } from './login.service';
import { List, Movie } from '../../model';

@Injectable()
export class DatabaseService {

  constructor(private afDatabase: AngularFireDatabase,
              private router: Router,
              private loginService: LoginService) { }

  getLists(): Observable<List[]> {
    return this.loginService.user
      .switchMap(user => {
        const uid = user && user.uid;

        if(!uid) {
          this.loginService.logout();
          this.router.navigate(['/']);
        } else {
          return this.afDatabase.list(`/${uid}/lists`);
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
    const uid = this.loginService.uid;

    const key = this.afDatabase.list(`/${uid}/lists`).push({
      name: list.getName(),
      elements: list.getElements()
    }).key;

    list.setId(key);
  }

  removeList(list: List) {
    const uid = this.loginService.uid;

    this.afDatabase.list(`/${uid}/lists/${list.getId()}`).remove();
  }

  updateList(list: List) {
    const uid = this.loginService.uid;

    this.afDatabase.list(`/${uid}/lists`).update(list.getId(), {
      name: list.getName(),
      elements: list.getElements()
    });
  }

}
