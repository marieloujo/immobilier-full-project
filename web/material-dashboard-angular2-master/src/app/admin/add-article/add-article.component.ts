import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Article} from '../../model/article/article.model';
import {ArticleService} from '../../service/article/article.service';
import {VilleService} from '../../service/ville/ville.service';
import {CommuneService} from '../../service/commune/commune.service';
import {isNull} from 'util';
import {Ville} from '../../model/ville/ville.model';
import {Utilisateur} from '../../model/utilisateur/utilisateur.model';
import {CookieService} from 'ngx-cookie-service';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';



declare var $: any;

declare interface Categorie {
  name: string;
}

declare interface Image {
  index: number;
  url: string;
  name: string;
  size: string;
}

export const CATEGORIES: Categorie[] = [
  { name: 'Appartement' },
  { name: 'Maison' },
  { name: 'Parcelle' },
];


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})

export class AddArticleComponent implements OnInit {


  private fileList: any[];

  private loading = false;
  private formSubmit = false;

  private environnement = environment;
  private formGroupCreate: FormGroup;
  private communes;
  private categories: any[];
  private villeList;

  private imgURL = new Array<Image>();
  private isVente = true;




  constructor(private formBuilder: FormBuilder, private articleService: ArticleService, private villeService: VilleService,
              private communeService: CommuneService, private cookieService: CookieService) {

    this.formGroupCreate = this.formBuilder.group({
      titre: ['', Validators.required],
      adresse: ['', Validators.required],
      categorie: ['', Validators.required],
      prix: ['', Validators.required],
      qualifier: [''],
      nbChambre: [''],
      nbDouche: [''],
      ville: ['', Validators.required],
      commune: [''],
      superficie: [''],
      description: ['', Validators.required]
    });

  }

  ngOnInit() {

    this.getVilles();
    this.getCommunes();

    this.categories = CATEGORIES.filter(categorie => categorie);

  }



  onCreateSubmit() {

    this.formSubmit = true;

    if (this.formGroupCreate.valid && !isNull(this.fileList) && this.fileList.length > 0) {
      const article = new Article();
      const user = JSON.parse(this.cookieService.get('user'));

      article.libelle = this.formGroupCreate.get('titre').value;
      article.description = this.formGroupCreate.get('description').value;
      article.adresse = this.formGroupCreate.get('adresse').value;
      article.categorie = this.formGroupCreate.get('categorie').value;
      article.nbChambre = this.formGroupCreate.get('nbChambre').value;
      article.nbDouche = this.formGroupCreate.get('nbDouche').value;
      article.prix = this.formGroupCreate.get('prix').value;
      article.qualifier = ' F' + this.formGroupCreate.get('qualifier').value;
      article.surface = this.formGroupCreate.get('superficie').value;
      article.rent = !this.isVente;

      article.ville = new Ville();
      article.ville.id = this.formGroupCreate.get('ville').value;

      article.user = new Utilisateur();
      article.user.id = user.id;

      console.log(article);

      this.loading = true;
      this.createArticle(article);
    }

  }



  createArticle(article: Article) {
    this.articleService.createArticles(article, this.fileList).subscribe({
      next: value => {

        this.formSubmit = false;
        this.loading = false;

        console.log(value);

        // this.resetForm();
        this.showSuccessNotification('top', 'center', 'Article crée avec sucess.', ' Cliquez ici pour visualiser');

      },
      error: err => {
        this.formSubmit = false;
        this.loading = false;
        // this.resetForm();
        this.showErrorNotification('top', 'center', 'Echec de création de l\'article');
      },
      complete: () => {}
    })
  }


  fileChange(event) {

    this.fileList = event.target.files;
    this.imgURL = new Array<Image>();

    if (this.fileList.length === 0) {
      return;
    }


    for (let i = 0; i < this.fileList.length; i++) {

      const mimeType = this.fileList[i].type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(this.fileList[i]);
      reader.onload = (_event) => {

        const image = { index: i, url: reader.result, name: this.fileList[i].name, size: this.bytesToSize(this.fileList[i].size) };
        // @ts-ignore
        this.imgURL.push(image);
      }
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
        // console.log(err);
        this.handleError(err);
      },
      complete: () => {}
    })

  }


  getCommunes() {

    this.loading = true;

    this.communeService.getCommunes().subscribe({
      next: value => {

        this.loading = false;

        this.communes = value;

        console.log(this.communes)

      },
      error: err => {
        // console.log(err)
        this.handleError(err);
      },
      complete: () => {}
    })

  }



  bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) { return '0 Byte'; }
    // tslint:disable-next-line:radix
    const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))));
    // @ts-ignore
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  }


  resetForm() {

    this.formGroupCreate.get('titre').setValue('');
    this.formGroupCreate.get('adresse').setValue('');
    this.formGroupCreate.get('categorie').setValue('');
    this.formGroupCreate.get('prix').setValue('');
    this.formGroupCreate.get('nbChambre').setValue('');
    this.formGroupCreate.get('nbDouche').setValue('');
    this.formGroupCreate.get('commune').setValue('');
    this.formGroupCreate.get('superficie').setValue('');
    this.formGroupCreate.get('description').setValue('');
    this.formGroupCreate.get('ville').setValue('');

    this.fileList = [];
    this.imgURL = new Array<Image>();

  }



  toggleVisibility(e) {
    this.isVente = e.target.checked;

    console.log(this.isVente);

  }



  showSuccessNotification(from, align, message, lien) {

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: 'notifications',
      message: '' + message,
      lien: '' + lien

    }, {
      timer: 4000,
      placement: {
        from: from,
        align: align
      },
      // tslint:disable-next-line:max-line-length
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-success alert-with-icon" role="alert">' +
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
