import { Component, OnInit } from '@angular/core';
import {OauthService} from '../../service/oauth/oauth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {Utilisateur} from '../../model/utilisateur/utilisateur.model';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {UtilisateurService} from '../../service/utilisateur/utilisateur.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loading = false;
  formSubmit = false;
  ereurInterne = false;

  environnement = environment;
  formGroupLogin: FormGroup;


  constructor(private formBuilder: FormBuilder, private oauthService: OauthService,
              private utilisateurService: UtilisateurService, private cookieService: CookieService,
              private router: Router) {

    this.formGroupLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  ngOnInit() {
    const user = this.cookieService.get('user');
    if (user !== null && this.oauthService.getAccessToken() !== '' && this.oauthService.getAccessToken() !== null) {
      this.router.navigate(['/app/dashboard']);
    }
  }



  login () {

    this.formSubmit = true;

    if (this.formGroupLogin.valid) {

      this.loading = true;

      const utilisateur: Utilisateur = new Utilisateur();

      utilisateur.username = this.formGroupLogin.get('username').value;
      utilisateur.password = this.formGroupLogin.get('password').value;


      this.oauthService.obtainAccessToken(utilisateur).subscribe({
        next: value => {
          console.log(value);
          this.ereurInterne = false;
          this.oauthService.saveToken(value);
          // console.log(this.cookieService.get('access_token'));
          this.getConnectedUser(utilisateur.username)
        },
        error: err => {
          // console.log(err);
          this.handleError(err);
          this.loading = false;
        },
        complete: () => {}
      })
    }

  }




  private getConnectedUser(username: String) {

    // @ts-ignore
    return this.utilisateurService.findUserbyUsername(username).subscribe({
      next: value => {
        console.log(value);
        this.ereurInterne = false;
        this.loading = false;
        this.cookieService.set('user', JSON.stringify(value), 1000 * environment.USER_EXPIRE_IN, '/');
        console.log( 'user' + this.cookieService.get('user'));
        this.router.navigate(['/app/dashboard']);
        this.resetform();
      },
      error: err => {
        this.loading = false;
        this.handleError(err);
        this.resetform();
      },
      complete: () => {}
    })

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


  private resetform() {
    this.formGroupLogin.get('username').setValue('');
    this.formGroupLogin.get('password').setValue('');
  }


}
