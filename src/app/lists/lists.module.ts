import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './movies-routing.module';
import { ListsComponent } from './lists.component';
import { SharedModule } from '../shared/shared.module';
import { MyListsComponent } from './my-lists/my-lists.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ],
  declarations: [ListsComponent, MyListsComponent]
})
export class ListsModule { }
