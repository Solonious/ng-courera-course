import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialUiModule } from "../material-ui/material-ui.module";

import { RuneConverterPipe} from "../pipes/rune-converter.pipe";


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialUiModule
  ],
  declarations: [RuneConverterPipe],
  exports: [
    RuneConverterPipe,
    FlexLayoutModule,
    MaterialUiModule
  ]
})
export class CoreModule { }
