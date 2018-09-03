import { Injectable } from '@angular/core';

import { Topic } from "../shared/topic";
import { TOPICS } from "../shared/topics-data";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  getTopics(): Topic[] {
    return TOPICS;
  }

  getTopic(id: number): Topic {
    return TOPICS.filter(topic => topic.id === id)[0];
  }

}
