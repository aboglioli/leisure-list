import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { List, Element, ElementType } from '../../model';

@Component({
  selector: 'll-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  @Output() removeList = new EventEmitter<List>();
  @Output() addElements = new EventEmitter<List>();

  movies: Element[];
  games: Element[];
  music: Element[];

  constructor() { }

  ngOnInit() {
    this.movies = this.list.getElementsByType(ElementType.MOVIE);
  }

}
