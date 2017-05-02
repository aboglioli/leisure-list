import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ListType, List, MoviesList } from '../../model';

@Injectable()
export class ListService {
  private lists: List[];
  private listsSource: BehaviorSubject<List[]>;

  constructor() {
    this.lists = [];

    // BehaviorSubject requires an initial value
    this.listsSource = new BehaviorSubject<List[]>([]);
  }

  getObservable(): Observable<List[]> {
    return this.listsSource.asObservable();
  }

  create(name: string, type: string): boolean {
    name = name.toLowerCase();
    type = type.toLowerCase();

    const existingList = this.lists.find(list => list.getName() === name);

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

      this.listsSource.next(this.lists);

      return true;
    }

    return false;
  }

}
