import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TheMovieDbService } from '../../../shared/services';

@Component({
  selector: 'll-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  @Output() movies = new EventEmitter<any>();

  searchControl: FormControl;
  results: any[];

  constructor(private moviesService: TheMovieDbService) { }

  ngOnInit() {
    this.searchControl = new FormControl();

    this.searchControl.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.moviesService.search(term).subscribe(results => {
          console.log(results);
          this.results = results.results.map(result => {
            result['selected'] = false;
            return result;
          });
        });
      });
  }

  addMovies() {
    this.movies.emit(this.results.filter(result => result.selected));
  }

}
