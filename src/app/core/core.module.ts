import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialUiModule } from "../material-ui/material-ui.module";
import { FormsModule } from '@angular/forms';


import { RuneConverterPipe} from "../pipes/rune-converter.pipe";


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialUiModule,
    FormsModule,
  ],
  declarations: [RuneConverterPipe],
  exports: [
    RuneConverterPipe,
    FlexLayoutModule,
    MaterialUiModule,
    FormsModule,
  ]
})
export class CoreModule { }
