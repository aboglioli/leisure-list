import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './lists.component';
import { MyListsComponent } from './my-lists/my-lists.component';
import { AddElementsComponent } from './add-elements/add-elements.component';

const routes: Routes = [
  {
    path: 'lists',
    component: ListsComponent,
    children: [
      {
        path: '',
        component: MyListsComponent
      },
      {
        path: 'add/:listId',
        component: AddElements
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
