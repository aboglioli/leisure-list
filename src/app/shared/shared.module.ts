import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { LoginService, TheMovieDbService, ListService, DatabaseService } from './services';
import { PanelComponent } from './core/panel/panel.component';
import { CardComponent } from './core/card/card.component';
import { SearchInputComponent } from './core/search-input/search-input.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    PanelComponent,
    CardComponent,
    SearchInputComponent
  ],
  declarations: [PanelComponent, CardComponent, SearchInputComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LoginService,
        ListService,
        TheMovieDbService,
        DatabaseService,
        AngularFireAuth,
        AngularFireDatabase
      ]
    };
  }
}
