import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from "./material-ui/material-ui.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { DishService } from "./services/dish.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    FlexLayoutModule,
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
