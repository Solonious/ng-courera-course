import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from "./core/core.module";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";

import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { TopicService } from "./services/topic.service";

import { NotFoundComponent } from './not-found/not-found.component';
import { SkranjiFontDirective } from './directives/skranji-font.directive';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    SkranjiFontDirective,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
