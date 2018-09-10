import { Injectable } from '@angular/core';
import { Article } from "../shared/article";
import { ARTICLES } from "../shared/articles-data";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Promise<Article[]> {
    return Promise.resolve(ARTICLES);
  }

  getArticle(id: number): Promise<Article> {
    return Promise.resolve(ARTICLES.filter(article => article.id === id)[0]);
  }
}
