import { Injectable } from '@angular/core';
import { Article } from "../shared/article";
import { ARTICLES } from "../shared/articles-data";

import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(ARTICLES).pipe(delay(2000));
  }

  getArticle(id: number): Observable<Article> {
    return of(ARTICLES.filter(article => article.id === id)[0]).pipe(delay(200));
  }
}
