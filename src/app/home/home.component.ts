import {Component, OnDestroy, OnInit} from '@angular/core';
import { Article } from "../shared/article";
import { ArticleService } from "../services/article.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  articles: Article[];

  constructor(private atricleService: ArticleService) { }

  ngOnInit() {
    this.atricleService.getArticles().subscribe(articles => {
      this.articles = articles
    });
  }

  ngOnDestroy() {}

}
