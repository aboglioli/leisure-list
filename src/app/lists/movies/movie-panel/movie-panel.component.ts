import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MoviesList } from '../../../model';

@Component({
  selector: 'll-movie-panel',
  templateUrl: './movie-panel.component.html',
  styleUrls: ['./movie-panel.component.scss']
})
export class MoviePanelComponent implements OnInit {
  @Input() list: MoviesList;
  @Output() removeList = new EventEmitter<MoviesList>();
  @Output() addMovies = new EventEmitter<MoviesList>();

  constructor() { }

  ngOnInit() {
  }

}
