import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MovieListsComponent } from './movie-lists/movie-lists.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: '',
        component: MovieListsComponent
      },
      {
        path: 'add/:listId',
        component: AddMovies
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
