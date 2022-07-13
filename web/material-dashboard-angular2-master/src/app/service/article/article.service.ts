import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Article} from '../../model/article/article.model';
import {environment} from '../../../environments/environment';
import {OauthService} from '../oauth/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient, private oauthService: OauthService) {
  }


  public getArticles(page: number) {

    const params = new HttpParams().set('page', String(page));


    return this.httpClient.get(environment.BASE_URL + 'article/list', {params: params});
  }


  public getArticlesLocation(page: number) {

    const params = new HttpParams().set('page', String(page));

    return this.httpClient.get(environment.BASE_URL + 'article/list/location', {params: params});
  }



  public getArticlesVente(page: number) {

    const params = new HttpParams().set('page', String(page));

    return this.httpClient.get(environment.BASE_URL + 'article/list/vente', {params: params});
  }


  // tslint:disable-next-line:max-line-length
  public filterArticle(page: Number, keyword: String, villeId: Number, categorie: String, prixStart: String, prixEnd: String) {

    const params = new HttpParams().set('page', String(page))
        .set('keyWord', String(keyword))
        .set('villeId', String(villeId))
        .set('categorie', String(categorie))
        .set('prxStart', String(prixStart))
        .set('prixEnd', String(prixEnd));

    console.log(params)

    return this.httpClient.get(environment.BASE_URL + 'article/list/filtre', this.oauthService.getCustomHttpHeaderForResource(params))

  }


  public createArticles(article: Article, fileList: any[]) {

    const formData: FormData = new FormData();
    // @ts-ignore

    for (let i = 0; i < fileList.length; i ++) {
        formData.append('files', fileList[i]);
    };

    // formData.append('files', JSON.stringify(fileList));
    formData.append('article', JSON.stringify(article));

    return this.httpClient.post(environment.BASE_URL + 'article/create', formData)

  }



  public updateArticles(article: Article) {

    return this.httpClient.put(environment.BASE_URL + 'article/update', article)

  }


  public findArticlebyId(id: number) {

    return this.httpClient.get(environment.BASE_URL + 'article/' + id)

  }

  public deleteArticlebyId(id: number) {

    return this.httpClient.delete(environment.BASE_URL + 'delete/' + id)

  }




}
