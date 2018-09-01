import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from "./material-ui/material-ui.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing/app-routing.module";

import 'hammerjs';

import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { TopicService } from "./services/topic.service";

import { RuneConverterPipe } from './pipes/rune-converter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    TopicdetailComponent,
    HeaderComponent,
    FooterComponent,
    RuneConverterPipe,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
