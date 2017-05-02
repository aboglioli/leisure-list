import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './lists/lists.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { GamesComponent } from './games/games.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  {
    path: 'lists',
    component: ListsComponent,
    children: [
      {
        path: 'movies',
        component: MoviesComponent,
      },
      {
        path: 'add-movies/:listId',
        component: AddMoviesComponent
      },
      {
        path: 'games',
        component: GamesComponent
      },
      {
        path: 'music',
        component: MusicComponent
      },
      {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
