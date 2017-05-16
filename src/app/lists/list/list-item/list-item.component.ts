import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { List, Element, ElementType } from '../../../model';

@Component({
  selector: 'll-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() list: List;
  @Input() element: Element;
  @Output() detail = new EventEmitter<Element>();
  @Output() remove = new EventEmitter<Element>();

  icon: string;

  constructor() { }

  ngOnInit() {
    switch(this.element.getType()) {
      case ElementType.MOVIE:
        this.icon = 'film';
        break;
      case ElementType.GAME:
        this.icon = 'gamepad';
        break;
      case ElementType.MUSIC:
        this.icon = 'headphones';
        break;
    }
  }

}
