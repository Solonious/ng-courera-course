import { Component, OnInit } from '@angular/core';
import { TopicService } from "../services/topic.service";

import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Topic } from "../shared/topic";

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.scss']
})
export class TopicdetailComponent implements OnInit {

  topic: Topic;

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.topicService.getTopic(id).then(topic => this.topic = topic);
  }

  goBack(): void {
    this.location.back();
  }

}
