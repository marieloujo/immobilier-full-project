import {Commune} from "../commune/commune.model";

export class Departement {

  id: Number;

  libelle: String;

  communes: Array<Commune>;

  createdAt: any;

  updateAt: any;

}
