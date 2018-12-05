import { Injectable } from '@angular/core';

import { Topic } from "../shared/topic";
import { TOPICS } from "../shared/topics-data";

import { HttpClient } from '@angular/common/http';

import { endpoints } from '../shared/endpoints';

import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(endpoints.getTopics());
  }

  getTopic(id: number): Observable<Topic> {
    return this.http.get<Topic>(endpoints.getTopic(id));
  }

}
