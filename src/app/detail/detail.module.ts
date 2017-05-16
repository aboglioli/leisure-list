import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail.component';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule
  ],
  declarations: [DetailComponent]
})
export class DetailModule { }
