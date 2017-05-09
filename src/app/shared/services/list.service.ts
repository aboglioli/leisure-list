import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DatabaseService } from '../../shared/services/database.service';
import { List, Movie } from '../../model';

@Injectable()
export class ListService {
  private lists: List[];
  private listsSource: BehaviorSubject<List[]>;

  constructor(private database: DatabaseService) {
    this.lists = [];

    this.database.lists.subscribe(lists => {
      this.lists = [];

      lists.forEach(list => {
        const newList = new List(list.name, list.$key);

        list.elements.forEach(element => {
          // TODO: it should allow movies, games and music
          const movie = new Movie(element);
          newList.addElement(movie);
        });

        this.lists.push(newList);
      });

      console.log(lists);
      console.log(this.lists);

      this.listsSource.next(this.lists);
    });

    // BehaviorSubject requires an initial value
    this.listsSource = new BehaviorSubject<List[]>([]);
  }

  getObservable(): Observable<List[]> {
    return this.listsSource.asObservable();
  }

  findById(id: string): Observable<any> {
    return this.database.lists
      .map(lists => {
        return lists.find(list => list.$key === id);
      });
  }

  create(name: string, type: string): boolean {
    type = type.toLowerCase();

    const existingList = this.lists
      .find(list => list.getName().toLowerCase() === name.toLowerCase());

    if(!existingList) {
      const list = new List(name);

      this.lists.push(list);

      this.database.saveList(list);

      this.listsSource.next(this.lists);

      return true;
    }

    return false;
  }

  remove(list: List) {
    this.lists = this.lists.filter(l => l.getId() !== list.getId());

    this.database.removeList(list);

    this.listsSource.next(this.lists);
  }

  update(list: List) {
    this.lists = this.lists.filter(l => l.getId() !== list.getId());

    this.lists.push(list);

    this.database.updateList(list);

    this.listsSource.next(this.lists);
  }

}
