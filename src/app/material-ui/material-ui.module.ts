import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class MaterialUiModule { }
