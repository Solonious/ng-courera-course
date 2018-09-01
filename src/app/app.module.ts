import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from "./material-ui/material-ui.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { AppComponent } from './app.component';
import { TopicComponent } from './menu/topic.component';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';

import { TopicService } from "./services/topic.service";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RuneConverterPipe } from './pipes/rune-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    TopicdetailComponent,
    HeaderComponent,
    FooterComponent,
    RuneConverterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    FlexLayoutModule,
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
