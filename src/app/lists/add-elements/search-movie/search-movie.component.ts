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
  @Output() results = new EventEmitter<Element[]>();

  constructor(private movieService: TheMovieDbService) { }

  ngOnInit() { }

  search(term: string) {
    if(term && term.length > 3) {
      this.movieService.searchMulti(term).subscribe(results => {
        const movieResults = results.map(result => {
          return new Movie(result);
        });

        this.results.emit(movieResults);
      });
    } else {
      this.results.emit([]);
    }
  }

}
