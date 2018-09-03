import { Injectable } from '@angular/core';
import { Article } from "../shared/article";
import { ARTICLES } from "../shared/articles-data";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Article[] {
    return ARTICLES;
  }

  getArticle(id: number): Article {
    return ARTICLES.filter(article => article.id === id)[0];
  }
}
