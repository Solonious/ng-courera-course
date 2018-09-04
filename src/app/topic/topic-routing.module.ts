import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import {TopicComponent} from "./topic.component";
import {TopicdetailComponent} from "../topicdetail/topicdetail.component";

const routes: Routes = [
  {path: '', component: TopicComponent},
  {path: ':id', component: TopicdetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
