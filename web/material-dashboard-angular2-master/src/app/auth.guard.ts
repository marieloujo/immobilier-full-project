import { Router, CanActivate } from '@angular/router';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {OauthService} from './service/oauth/oauth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private Cookie: CookieService, private oauthService: OauthService) { }

    canActivate() {

        if (this.Cookie.check('user') && this.oauthService.getAccessToken() !== null) {

            console.log(this.Cookie.get('user'));
            console.log(this.Cookie.get('access_token'));
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.Cookie.delete('access_token');
        this.router.navigate(['app/login']);
        return false;
    }
}
