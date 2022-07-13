import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/index';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Utilisateur} from '../../model/utilisateur/utilisateur.model';
import {CookieService} from 'ngx-cookie-service';



export class OAuthBody {
    grant_type: string;
    username: string;
    password: string;
    client_id: string;

}



@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(private router: Router, private http: HttpClient, private Cookie: CookieService) { }


    obtainAccessToken(user: Utilisateur): Observable<any> { // obtenir l'acces token
        // @ts-ignore
        const httpOptions = {
            headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: 'Basic ' + btoa(environment.OAUTH_CLIENT_ID + ':' + environment.OAUTH_CLIENT_PASSWORD)
            }),
            params: new HttpParams().append('grant_type', 'password').
            append('client_id', environment.OAUTH_CLIENT_ID).
            append('username', String( user.username)).
            append('password', String(user.password))
          };

        const body = new OAuthBody();
        body.grant_type = 'password';
        body.client_id = environment.OAUTH_CLIENT_ID;
        // @ts-ignore
        body.username = user.username;
        // @ts-ignore
        body.password = user.password;

        return this.http.post(environment.BASE_URL_OAUTH_TOKEN, body, httpOptions);

    }

    saveToken(token) { // save the token in storage
        const expireDate = new Date().getTime() + (1000 * token.expires_in);
        this.Cookie.set('access_token', token.access_token, expireDate, '/');
    }

    getAccessToken(): string {
      return this.Cookie.get('access_token');
    }

    getResource(resourceUrl): Observable<any> {
        const headers = new HttpHeaders();
        headers.set('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        headers.set('Authorization', 'Bearer ' + this.Cookie.get('access_token'));
        const options = { headers };
        return this.http.get(resourceUrl, options);
    }

    getHttpHeaderForResource() { // le token à envoyer pour chaque appel http
      this.checkCredentials();
      return {
          headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
              Authorization: 'Bearer ' + this.Cookie.get('access_token')
          })
      };
    }



    getCustomHttpHeaderForResource(param: HttpParams) { // le token à envoyer pour chaque appel http
        this.checkCredentials();
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                Authorization: 'Bearer ' + this.Cookie.get('access_token')
            }),
            param: param
        };
    }



    getHttpDownloadHeaderForResource() { // pour le cas de téléchargement de document
        this.checkCredentials();
        return {
            headers: new HttpHeaders({
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + this.Cookie.get('access_token')
            }),
           responseType: 'blob' as 'json'
        };
    }

    getHttpPostHeaderForResource() { // le token à envoyer pour chaque appel http
      this.checkCredentials();
      return {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.Cookie.get('access_token')
          })
      };
    }

    checkCredentials() {
        if (!this.Cookie.check('access_token')) {
           this.logout();
        }
    }


    logout() {
       // this.Cookie.delete('access_token'); not work
       // this.Cookie.delete('user'); not work
        this.Cookie.delete('access_token', '/');
        this.Cookie.delete('user', '/');
        this.router.navigate(['app/login']);
    }

}
