import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Element } from '../../../model';

@Component({
  selector: 'll-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() results: Element[];
  @Output() selectedElements = new EventEmitter<Element[]>();

  constructor() { }

  ngOnInit() {
    console.log('onInit', this.results);
  }

  selectElements() {
    const selectedElements = this.results.filter(result => result.isSelected());

    this.selectedElements.emit(selectedElements);
  }

}
