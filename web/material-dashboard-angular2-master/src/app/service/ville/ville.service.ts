import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private httpClient: HttpClient) { }


  public getVilles() {

    return this.httpClient.get(environment.BASE_URL + 'ville/list');

  }




}
