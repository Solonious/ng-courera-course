import { Injectable } from '@angular/core';

import { Topic } from "../shared/topic";
import { TOPICS } from "../shared/topics-data";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  getTopics(): Promise<Topic[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(TOPICS)
      }, 2000);
    });
  }

  getTopic(id: number): Promise<Topic> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(TOPICS.filter(topic => topic.id === id)[0]);
      }, 2000);
      });
  }

}
