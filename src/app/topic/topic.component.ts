import { Component, OnInit } from '@angular/core';

import { Topic } from '../shared/topic';

import { TopicService } from "../services/topic.service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topics: Topic[];

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.topicService.getTopics().subscribe(topics => this.topics = topics);
  }

}
