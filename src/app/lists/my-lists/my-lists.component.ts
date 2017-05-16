import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { List } from '../../model';
import { ListService } from '../../shared/services';

@Component({
  selector: 'll-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.scss']
})
export class MyListsComponent implements OnInit {
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

  addElements(list: List) {
    this.router.navigate(['lists', 'add', list.getId()]);
  }

  removeList(list: List) {
    this.listService.remove(list);
  }

}
