import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Element, Movie } from '../../../model';
import { TheMovieDbService } from '../../../shared/services';

@Component({
  selector: 'll-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  @Output() elements = new EventEmitter<Element[]>();

  results: Element[];

  constructor(private moviesService: TheMovieDbService) { }

  ngOnInit() { }

  search(term: string) {
    this.moviesService.search(term).subscribe(results => {
      console.log(results);
      this.results = results.results.map(result => {
        return new Movie(result);
      });
    });
  }

  addElements() {
    this.elements.emit(this.results.filter(result => result.isSelected()));
  }

}
