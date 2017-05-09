import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { List } from '../../model';

@Component({
  selector: 'll-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  @Output() removeList = new EventEmitter<List>();
  @Output() addElements = new EventEmitter<List>();

  constructor() { }

  ngOnInit() {
  }

}
