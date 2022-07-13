import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Utilisateur} from '../../model/utilisateur/utilisateur.model';
import {OauthService} from '../oauth/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpClient: HttpClient, private oauthService: OauthService) { }


  public getUtilisateurs() {

    return this.httpClient.get(environment.BASE_URL + 'utilisateur/list', this.oauthService.getHttpHeaderForResource() );

  }


  public createUtilisateurs(utilisateur: Utilisateur) {

    return this.httpClient.post(environment.BASE_URL + 'utilisateur/create', utilisateur, this.oauthService.getHttpPostHeaderForResource())

  }

  public updateUtilisateurs(utilisateur: Utilisateur) {

    return this.httpClient.put(environment.BASE_URL + 'utilisateur/update', utilisateur, this.oauthService.getHttpPostHeaderForResource())

  }

  public findUtilisateurbyId(id: number) {

    return this.httpClient.get(environment.BASE_URL + 'utilisateur/' + id, this.oauthService.getHttpHeaderForResource())

  }

  public deleteUtilisateurbyId(id: number) {

    return this.httpClient.delete(environment.BASE_URL + 'utilisateur/delete/' + id, this.oauthService.getHttpPostHeaderForResource())

  }



  findUserbyUsername(username: String) {

    return this.httpClient.get(environment.BASE_URL + 'utilisateur/username/' + username, this.oauthService.getHttpHeaderForResource() )

  }



}
