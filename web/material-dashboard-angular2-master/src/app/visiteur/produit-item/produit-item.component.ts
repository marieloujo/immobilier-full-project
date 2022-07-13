import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../service/article/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {isNull, isUndefined} from 'util';

@Component({
  selector: 'app-produit-item',
  templateUrl: './produit-item.component.html',
  styleUrls: [
      './produit-item.component.css',
    '../../../assets/css/material-kit.min.css?v=2.2.0'
  ]
})
export class ProduitItemComponent implements OnInit {


  private article: any;


  constructor(private articleService: ArticleService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.getParamValue();
  }




  getParamValue() {
    if (this.router.url.includes('/produit')) { // modification
      this.activatedRoute.params.subscribe(params => {
        if (isNaN(params.idArticle)) {
          return;
        }
        console.log('idArticle ' + params.idArticle);
        this.findArticle(params.idArticle);
      });
    }
  }



  findArticle(idArticle) {

    this.articleService.findArticlebyId(idArticle).subscribe({
      next: value => {
        this.article = value;
        console.log(this.article)
      },
      error: err => {
        console.log('error' + err)
      },
      complete: () => {}
    })

  }



}
