import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router,
              public listService: ListService) { }

  ngOnInit() {
    this.lists = [];
    this.filteredLists = [];

    this.listService.getObservable().subscribe(lists => {
      this.lists = lists;
      this.filteredLists = this.lists;
    });
  }

  filterLists(term: string) {
    this.filteredLists = this.lists
      .filter(list => list.getName().indexOf(term) !== -1);
  }

  addMovies(list: List) {
    this.router.navigate(['lists', 'add-movies', list.getId()]);
  }

  removeList(list: List) {
    this.listService.remove(list);
  }

}
