import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../../service/article/article.service';
import {Article} from '../../model/article/article.model';
import {Router} from '@angular/router';


declare var $: any;




@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {


  private loading = false;
  private errorChargement = false;

  private articles;

  private environnement = environment;


  constructor(private articleService: ArticleService, private router: Router) {


  }

  ngOnInit() {
    this.getArticle(0);
  }


    navigateToCreate() {
        this.router.navigate(['/app/articles-add']);
    }


    getArticle(page: number) {
    this.loading = true;
      this.articleService.getArticles(page).subscribe({
        next: value => {
          console.log(value);
          this.loading = false;
          this.errorChargement = false;
          this.articles = value;
        },
        error: err => {
          this.loading = false;
          this.errorChargement = false;
        },
        complete: () => {
          this.loading = false;
        }
      })
    }
}
