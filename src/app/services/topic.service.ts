import { Injectable } from '@angular/core';

import { Topic } from "../shared/topic";
import { TOPICS } from "../shared/topics-data";

import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  getTopics(): Observable<Topic[]> {
    return of(TOPICS).pipe(delay(2000))
  }

  getTopic(id: number): Observable<Topic> {
    return of(TOPICS.filter(topic => topic.id === id)[0]).pipe(delay(2000));
  }

}
