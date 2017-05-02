import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists/lists.component';

@NgModule({
  imports: [
    CommonModule,
    ListsRoutingModule
  ],
  declarations: [ListsComponent]
})
export class ListsModule { }
