import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {

  constructor(private httpClient: HttpClient) { }


  public getCommunes() {

    return this.httpClient.get(environment.BASE_URL + 'commune/list');

  }

}
