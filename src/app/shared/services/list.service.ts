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

    this.database.getLists().subscribe(lists => {
      this.lists = lists;

      this.listsSource.next(this.lists);
    });

    // BehaviorSubject requires an initial value
    this.listsSource = new BehaviorSubject<List[]>([]);
  }

  getObservable(): Observable<List[]> {
    return this.listsSource.asObservable();
  }

  findById(id: string): Observable<List> {
    return this.database.getLists()
      .map(lists => {
        return lists.find(list => list.getId() === id);
      });
  }

  create(name: string): boolean {
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
