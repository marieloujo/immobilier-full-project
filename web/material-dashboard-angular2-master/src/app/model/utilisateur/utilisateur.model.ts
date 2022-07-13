import {Article} from "../article/article.model";

export class Utilisateur {

  id: Number;

  nomPrenoms: String;

  sexe: String;

  telephone: String;

  email: String;

  adresse: String;

  username: String;

  password: String;

  physicalPerson: boolean;

  ifu: String;

  role: String;

  articles: Array<Article>;

  createdAt: any;

  updateAt: any;

}
