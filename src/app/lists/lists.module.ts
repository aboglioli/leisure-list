import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists/lists.component';
import { SharedModule } from '../shared/shared.module';
import { MoviesComponent } from './movies/movies.component';
import { GamesComponent } from './games/games.component';
import { MusicComponent } from './music/music.component';
import { ListsNavbarComponent } from './lists-navbar/lists-navbar.component';
import { CreateListComponent } from './create-list/create-list.component';
import { SearchListComponent } from './search-list/search-list.component';
import { MoviePanelComponent } from './movies/movie-panel/movie-panel.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { SearchMovieComponent } from './add-movies/search-movie/search-movie.component';

@NgModule({
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule,
  ],
  declarations: [
    ListsComponent,
    ListsNavbarComponent,
    CreateListComponent,
    MoviesComponent,
    GamesComponent,
    MusicComponent,
    SearchListComponent,
    MoviePanelComponent,
    AddMoviesComponent,
    SearchMovieComponent
  ]
})
export class ListsModule { }
