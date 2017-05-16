import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { List, Element, ElementType } from '../../model';
import { ListService } from '../../shared/services';

@Component({
  selector: 'll-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  @Output() removeList = new EventEmitter<List>();
  @Output() addElements = new EventEmitter<List>();

  renameMode: boolean;
  listName: string;

  movies: Element[];
  games: Element[];
  music: Element[];

  constructor(private router: Router,
              private listService: ListService) { }

  ngOnInit() {
    this.sortElementsByType();

    this.listName = this.list.getName();
  }

  rename() {
    if(this.listName && this.listName.length > 4) {
      this.list.setName(this.listName);

      this.listService.update(this.list);

      this.renameMode = false;
    }
  }

  goToDetail(element: Element) {
    this.router.navigate(['detail', element.getId()]);
  }

  removeElement(element: Element) {
    this.list.removeElement(element);

    this.listService.update(this.list);

    this.sortElementsByType();
  }

  private sortElementsByType() {
    this.movies = this.list.getElementsByType(ElementType.MOVIE);
  }

}
