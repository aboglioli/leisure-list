import { Component, OnInit, Input } from '@angular/core';

import { List, Element } from '../../../model';

@Component({
  selector: 'll-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() list: List;
  @Input() element: Element;

  constructor() { }

  ngOnInit() {
  }

}
