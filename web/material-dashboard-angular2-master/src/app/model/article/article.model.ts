import {Illustration} from '../illustration/illustration.model';
import {Utilisateur} from '../utilisateur/utilisateur.model';
import {Ville} from '../ville/ville.model';


export class Article {

  id: Number;

  libelle: String;

  description: String;

  adresse: String;

  prix: Number;

  qualifier: String;

  categorie: String;

  surface: String;

  nbChambre: Number;

  nbDouche: Number;

  rent: boolean;

  enabled: boolean;

  illustrations: Array<Illustration>;

  user: Utilisateur;

  ville: Ville;

  createdAt: any;

  updateAt: any;

}
