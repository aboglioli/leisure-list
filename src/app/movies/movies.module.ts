import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../shared/shared.module';
import { MovieListsComponent } from './movie-lists/movie-lists.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ],
  declarations: [MoviesComponent, MovieListsComponent]
})
export class MoviesModule { }
