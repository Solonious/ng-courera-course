import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../services/article.service";

import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Article } from "../shared/article";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => this.articleService.getArticle(+params['id'])))
      .subscribe(article => this.article = article);
  }

  goBack(): void {
    this.location.back();
  }

}
