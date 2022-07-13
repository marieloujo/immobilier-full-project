import { Router, CanActivate } from '@angular/router';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';
import {OauthService} from './service/oauth/oauth.service';

@Injectable()
export class AdminGuard implements CanActivate {
    environnement = environment;
    user: any;
    userAuthorities: Array<string> = [];
    constructor(private router: Router,
                private Cookie: CookieService, private oauthService: OauthService) { }

    canActivate() {
      if (this.Cookie.check('user') && this.oauthService.getAccessToken() !== null) {
            // logged in so check if is admin
            this.user = JSON.parse(this.Cookie.get('user'));
            this.userAuthorities = this.user.authorities.map(autority => autority.authorith ).map(r => r.role);
            return this.isAdmin();
        } else {
        // not logged in so redirect to login page
        this.Cookie.delete('access_token');
        this.router.navigate(['app/login']);
        return false;
      }


    }



  isAdmin(): boolean {
        return this.userAuthorities.indexOf(this.environnement.ROLE_ADMIN) > -1;
  }
}
