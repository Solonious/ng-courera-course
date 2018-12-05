import { Injectable } from '@angular/core';
import { Article } from "../shared/article";
import { ARTICLES } from "../shared/articles-data";

import { HttpClient } from "@angular/common/http";

import { endpoints } from '../shared/endpoints';

import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(endpoints.getArticles());
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(endpoints.getArticle(id));
    // return of(ARTICLES.filter(article => article.id === id)[0]).pipe(delay(200));
  }
}
