import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { SharedModule } from '../shared/shared.module';
import { MyListsComponent } from './my-lists/my-lists.component';
import { CreateListComponent } from './create-list/create-list.component';
import { AddElementsComponent } from './add-elements/add-elements.component';
import { ListComponent } from './list/list.component';
import { SearchMovieComponent } from './add-elements/search-movie/search-movie.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { SearchResultsComponent } from './add-elements/search-results/search-results.component';
import { SearchResultComponent } from './add-elements/search-results/search-result/search-result.component';

@NgModule({
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule
  ],
  declarations: [
    ListsComponent,
    MyListsComponent,
    ListComponent,
    CreateListComponent,
    AddElementsComponent,
    SearchMovieComponent,
    ListItemComponent,
    SearchResultsComponent,
    SearchResultComponent
  ]
})
export class ListsModule { }
