import { Injectable } from '@angular/core';

import { Topic } from "../shared/topic";
import { TOPICS } from "../shared/topics-data";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  getTopics(): Promise<Topic[]> {
    return Promise.resolve(TOPICS);
  }

  getTopic(id: number): Promise<Topic> {
    return Promise.resolve(TOPICS.filter(topic => topic.id === id)[0]);
  }

}
