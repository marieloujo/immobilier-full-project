import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../service/article/article.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import {VilleService} from '../../service/ville/ville.service';
import {isNull, isUndefined} from 'util';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';


declare var $: any;

declare interface Categorie {
    name: string;
}


export const CATEGORIES: Categorie[] = [
    { name: 'Appartement' },
    { name: 'Maison' },
    { name: 'Parcelle' },
];



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: [
      './index.component.css',
      '../../../assets/css/material-kit.min.css?v=2.2.0'
  ]
})


export class IndexComponent implements OnInit {


    private loading = true;
    private errorChargement = false;
    private formSubmit = false;
    private isSearch = false;

    private articles: any;
    private articlesFiltre: any;
    private articlesRent: any;
    private articlesNotRent: any;


    private pages: any[];
    private pagesFiltre: any[];
    private pagesRent: any[];
    private pagesNotRent: any[];

    private categories: any[];
    private villeList;

    private selected = 1;
    private selectedRent = 1;
    private selectedNotRent = 1;

    private formGroupSearch: FormGroup;

    private environnement = environment;

  constructor(private articleService: ArticleService, private router: Router,
              private formBuilder: FormBuilder, private villeService: VilleService) {

      this.formGroupSearch = this.formBuilder.group({
          keyWord: [''],
          ville: ['', Validators.required],
          categorie: ['', Validators.required],
          price: [''],
      });

  }

  ngOnInit() {
      this.getArticle(0);
      this.getVilles();

      this.categories = CATEGORIES.filter(categorie => categorie);
  }



    getArticle(page: number) {
        this.articleService.getArticles(page).subscribe({
            next: value => {
                console.log( 'articles' + value);
                this.loading = false;
                this.errorChargement = false;
                this.articles = value;

                this.pages = new Array<any>();
                const totalPage = this.articles.totalPage;

                for (let i = 0; i < totalPage; i++) {
                    this.pages.push(i + 1);
                }
            },
            error: err => {
                this.loading = false;
                this.errorChargement = false;
            },
            complete: () => {}
        })
    }


    getArticleInRent(page: number) {
        this.articleService.getArticlesLocation(page).subscribe({
            next: value => {
                console.log(value);
                this.loading = false;
                this.errorChargement = false;
                this.articlesRent = value;

                this.pagesRent = new Array<any>();
                const totalPage = this.articlesRent.totalPage;

                for (let i = 0; i < totalPage; i++) {
                    this.pagesRent.push(i + 1);
                }
            },
            error: err => {
                this.loading = false;
                this.errorChargement = false;
            },
            complete: () => {}
        })
    }


    getArticleInnotRent(page: number) {
        this.articleService.getArticlesVente(page).subscribe({
            next: value => {
                console.log(value);
                this.loading = false;
                this.errorChargement = false;
                this.articlesNotRent = value;

                this.pagesNotRent = new Array<any>();
                const totalPage = this.articlesNotRent.totalPage;

                for (let i = 0; i < totalPage; i++) {
                    this.pagesNotRent.push(i + 1);
                }
            },
            error: err => {
                this.loading = false;
                this.errorChargement = false;
            },
            complete: () => {}
        })
    }


    paginate(index: number, isSimple: boolean, isRent: boolean) {
        if (isSimple) {
            this.selected = index;
            this.articles = [];
            this.getArticle(this.selected - 1);
        } else if (isRent) {
            this.selectedRent = index;
            this.articlesRent = [];
            this.getArticleInRent(this.selectedRent - 1);
        } else {
            this.selectedNotRent = index;
            this.articlesNotRent = [];
            this.getArticleInRent(this.selectedNotRent - 1);
        }
    }


    getVilles() {

        this.loading = true;

        this.villeService.getVilles().subscribe({
            next: data => {
                this.loading = false;

                this.villeList = data;

                console.log(this.villeList)

            },
            error: err => {
                console.log(err)
            },
            complete: () => {}
        })

    }


    search(page: Number) {

      if (this.formGroupSearch.valid) {

          this.isSearch = true;

          this.articleService.filterArticle(page, this.formGroupSearch.get('keyWord').value,
              this.formGroupSearch.get('ville').value, this.formGroupSearch.get('categorie').value,
              $('#price-left').html(), $('#price-right').html()).subscribe({

              next: value => {

                  console.log(value);

                  this.articlesFiltre = value;
                  this.loading = false;
                  this.errorChargement = false;
                  this.articles = value;

                  this.pagesFiltre = new Array<any>();
                  const totalPage = this.articlesFiltre.totalPage;

                  for (let i = 0; i < totalPage; i++) {
                      this.pagesFiltre.push(i + 1);
                  }
              },
              error: err => {
                  this.handleError(err);
                  this.showErrorNotification('top', 'center',
                      'Une erreur est survenue, impossible de rechercher les article');
              },
              complete: () => {}
          })

      }

    }





    showErrorNotification(from, align, message) {

        const color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: 'notifications',
            message: '' + message

        }, {
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            // tslint:disable-next-line:max-line-length
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-danger alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }




    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };


}
