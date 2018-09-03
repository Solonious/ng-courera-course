import { Routes } from "@angular/router";

import { TopicComponent } from '../topic/topic.component';
import { TopicdetailComponent } from '../topicdetail/topicdetail.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { NotFoundComponent } from "../not-found/not-found.component";
import { ArticleComponent } from "../article/article.component";

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'about', component: AboutComponent},
  {path: 'topic', component: TopicComponent},
  {path: 'topic/:id', component: TopicdetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/404'}
];
