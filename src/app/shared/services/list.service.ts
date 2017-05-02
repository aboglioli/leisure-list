import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DatabaseService } from '../../shared/services/database.service';
import { ListType, List, MoviesList } from '../../model';

@Injectable()
export class ListService {
  private lists: List[];
  private listsSource: BehaviorSubject<List[]>;

  constructor(private database: DatabaseService) {
    this.lists = [];

    this.database.lists.subscribe(lists => {
      this.lists = [];

      lists.forEach(list => {
        this.lists.push(new MoviesList(list.name, list.$key));
      });

      this.listsSource.next(this.lists);
    });

    // BehaviorSubject requires an initial value
    this.listsSource = new BehaviorSubject<List[]>([]);
  }

  getObservable(): Observable<List[]> {
    return this.listsSource.asObservable();
  }

  create(name: string, type: string): boolean {
    type = type.toLowerCase();

    const existingList = this.lists
      .find(list => list.getName().toLowerCase() === name.toLowerCase());

    if(!existingList) {
      let list;

      switch(type) {
      case 'movies':
        list = new MoviesList(name);
        break;
      case 'games':
        // TODO: implement GamesList
        list = new MoviesList(name);
        break;
      case 'music':
        // TODO: implement MusicList
        list = new MoviesList(name);
        break;
      default:
        list = new MoviesList(name);
        break;
      }

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

}
