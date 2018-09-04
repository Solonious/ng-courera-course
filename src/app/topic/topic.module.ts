import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicRoutingModule } from "./topic-routing.module";
import { CoreModule } from "../core/core.module";

import { TopicComponent } from './topic.component';
import { TopicdetailComponent } from '../topicdetail/topicdetail.component';

@NgModule({
  imports: [
    CommonModule,
    TopicRoutingModule,
    CoreModule
  ],
  declarations: [
    TopicComponent,
    TopicdetailComponent,
  ]
})
export class TopicModule { }
