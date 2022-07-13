import {Departement} from "../departement/departement.model";
import {Ville} from "../ville/ville.model";


export class Commune {

  id: Number;

  libelle: String;

  departement: Departement;

  villes: Array<Ville>;

  createdAt: any;

  updateAt: any;

}
