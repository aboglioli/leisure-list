import { Component, OnInit } from '@angular/core';

import { List, MoviesList } from '../../model';
import { ListService } from '../../shared/services';

@Component({
  selector: 'll-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  filteredLists: List[];

  private lists: List[];

  constructor(public listService: ListService) { }

  ngOnInit() {
    this.lists = [];
    this.filteredLists = [];

    this.listService.getObservable().subscribe(lists => {
      this.lists = lists;
      this.filteredLists = lists;
    });
  }

  filterLists(term: string) {
    this.filteredLists = this.lists
      .filter(list => list.getName().indexOf(term) !== -1);
  }

}
