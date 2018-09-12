import { Injectable } from '@angular/core';
import { Article } from "../shared/article";
import { ARTICLES } from "../shared/articles-data";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Promise<Article[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(ARTICLES);
      }, 2000);
    });
  }

  getArticle(id: number): Promise<Article> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(ARTICLES.filter(article => article.id === id)[0]);
        }, 5000);
    });
  }
}
