import { Component, OnInit } from '@angular/core';
import { Article } from "../shared/article";
import { ArticleService } from "../services/article.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[];

  constructor(private atricleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.atricleService.getArticles();
  }

}
