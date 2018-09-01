import { Component, OnInit, Input } from '@angular/core';

import { Topic } from "../shared/topic";

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.scss']
})
export class TopicdetailComponent implements OnInit {

  @Input() topic: Topic;

  constructor() { }

  ngOnInit() {
  }

}
