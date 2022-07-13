import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {OauthService} from '../../../service/oauth/oauth.service';
import {environment} from '../../../../environments/environment';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/app/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/app/admin/partenaires', title: 'Partenaires',  icon: 'person', class: '' },
    { path: '/app/articles', title: 'Articles',  icon: 'person', class: '' },
    /*{ path: '/app/user-profile', title: 'User Profile',  icon: 'person', class: '' },
    { path: '/app/table-list', title: 'Table List',  icon: 'content_paste', class: '' },
    { path: '/app/typography', title: 'Typography',  icon: 'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon: 'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon: 'unarchive', class: 'active-pro' },*/
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    environnement = environment;
    user: any;
    userAuthorities: Array<string> = [];
    menuItems: any[];

  private isAdmin: boolean;

  constructor(private router: Router,
              private Cookie: CookieService, private oauthService: OauthService) { }

  ngOnInit() {
      this.isAdmin = this.canActivate();
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }


  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };



    canActivate() {
        if (this.Cookie.check('user') && this.oauthService.getAccessToken() !== null) {
            // logged in so check if is admin
            this.user = JSON.parse(this.Cookie.get('user'));
            this.userAuthorities = this.user.authorities.map(autority => autority.authorith ).map(r => r.role);
            return this.userAuthorities.indexOf(this.environnement.ROLE_ADMIN) > -1;
        } else {
            // not logged in so redirect to login page
            this.Cookie.delete('access_token');
            this.router.navigate(['app/login']);
            return false;
        }


    }





}
