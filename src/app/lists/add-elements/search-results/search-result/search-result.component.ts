import { Component, OnInit, Input } from '@angular/core';

import { Element } from '../../../../model';
import { TheMovieDbService } from '../../../../shared/services';

@Component({
  selector: 'll-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() element: Element;

  constructor(public movieService: TheMovieDbService) { }

  ngOnInit() {
  }

}
