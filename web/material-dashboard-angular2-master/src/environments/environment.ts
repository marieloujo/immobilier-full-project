// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,


  BASE_URL: 'http://127.0.0.1:8080/api/',


  BASE_URL_OAUTH_TOKEN: 'http://localhost:8080/oauth/token',
  OAUTH_CLIENT_ID: 'immobilier',
  OAUTH_CLIENT_PASSWORD: 'admin123',


  MESSAGE_ERREUR_INTERNE: 'Une erreur interne est survenue veuillez réessayer ultérieurement.',
  MESSAGE_ERREUR_CHARGEMENT: 'Une erreur est survenue, impossible de charger les données.',



  MESSAGE_REQUIRED_USERNAME: 'Le username est obligatoire',
  MESSAGE_REQUIRED_PASSWORD: 'Le mot de passe est obligatoire',




  MESSAGE_REQUIRED_FISRT_NAME: 'Le nom et le prénom sont obligatoire',
  MESSAGE_REQUIRED_LAST_NAME: 'Le prenom est obligatoire',
  MESSAGE_REQUIRED_NUMBER: 'Le numéro de télephone est obligatoire',
  MESSAGE_REQUIRED_ENTREPRISE: 'Le nom de l\'entreprise est obligatoire',
  MESSAGE_REQUIRED_IFU: 'Le numéro ifu de l\'entreprise est obligatoire',
  MESSAGE_INVALI_EMAIL: 'Adresse email incorrect',


  MESSAGE_REQUIRED_TITRE: 'Le titre de l\'article est obligatoire',
  MESSAGE_REQUIRED_ADRESSE: 'L\' adresse de l\'article est obligatoire',
  MESSAGE_REQUIRED_CATEGORIE: 'La categorie de l\'article est obligatoire',
  MESSAGE_REQUIRED_PRIX: 'Le prix de l\'article est obligatoire',
  MESSAGE_REQUIRED_VILLE: 'La ville de l\'article est obligatoire',
  MESSAGE_REQUIRED_DESCRIPTION: 'La descrition de l\'article est obligatoire',
  MESSAGE_REQUIRED_IMAGE: 'Au moins une image est obligatoire pour illustrer l\'article',


  ROLE_VENDEUR: 'USER_VENDEUR',
  ROLE_ADMIN: 'ADMIN',

  USER_EXPIRE_IN: 10000,

};
