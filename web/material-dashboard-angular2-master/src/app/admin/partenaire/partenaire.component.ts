import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Utilisateur} from '../../model/utilisateur/utilisateur.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from '../../service/utilisateur/utilisateur.service';


declare var $: any;


@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {


  private environnement = environment;

  private loading = true;
  private isPhysicalPersone = true;
  private errorChargement = false;
  private erreurInterne = false;
  private patenaireDelete = false;
  private patenaireCreate = false;
  private formSubmit = false;
  private isUpdate = false;

  private partenaires;
  private partenairesEntreprise = [];
  private partenairesPersonne = [];

  private utilisateur: Utilisateur = new Utilisateur();

  private formGroupCreate: FormGroup;
  private deleteForm: FormGroup;


  constructor(private utilisateurService: UtilisateurService, private formBuilder: FormBuilder) {

    this.formGroupCreate = this.formBuilder.group({
      firt_name: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.email],
      adresse: [''],
      sexe: ['sexe'],
      ifu: ['', Validators.required],
      entreprise: ['', Validators.required]
    });

    this.deleteForm = this.formBuilder.group({
      id: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.getUtilisateurs();
  }




  getUtilisateurs() {
    this.utilisateurService.getUtilisateurs().subscribe( {
      next: value => {
        this.partenaires = value;
      },
      error: err => {
        this.loading = false;
        this.errorChargement = true;
        this.dataTable();
        // $('.dataTables_empty').html('Impossible de charger les donnée une erreur est intervenu');
      },
      complete: () => {
        this.loading = false;
        this.getSepareteValue();
      },
    });
  }


  createPartenaireValidate() {
    this.formSubmit = true;

    // if (!this.isUpdate) this.utilisateur = new Utilisateur();

    if (this.isPhysicalPersone) {
      this.formGroupCreate.get('entreprise').setValue('entreprise');
      this.formGroupCreate.get('ifu').setValue('ifu');

      if (this.formGroupCreate.valid) {
        this.loading = true;

        this.utilisateur.nomPrenoms = this.formGroupCreate.get('firt_name').value;
        this.utilisateur.sexe = this.formGroupCreate.get('sexe').value;
        this.utilisateur.physicalPerson = true;

      } else {
        this.formGroupCreate.get('entreprise').setValue('');
        this.formGroupCreate.get('ifu').setValue('');
      }

    } else {
      this.formGroupCreate.get('firt_name').setValue('firt_name');

      if (!this.formGroupCreate.valid) {
        this.formGroupCreate.get('firt_name').setValue('');
      } else {
        this.loading = true;

        this.utilisateur.nomPrenoms = this.formGroupCreate.get('entreprise').value;
        this.utilisateur.ifu = this.formGroupCreate.get('ifu').value;
        this.utilisateur.physicalPerson = false;
      }
    }

    if (this.formGroupCreate.valid) {
      this.utilisateur.telephone = this.formGroupCreate.get('telephone').value;
      this.utilisateur.email = this.formGroupCreate.get('email').value;
      this.utilisateur.adresse = this.formGroupCreate.get('adresse').value;
      this.utilisateur.role = environment.ROLE_VENDEUR;

      console.log(this.utilisateur);

      this.createPartenaire(this.utilisateur);
    }

  }


  deleteSubmit() {

    this.loading = true;

    if (this.deleteForm.valid) {

      this.utilisateurService.deleteUtilisateurbyId(this.deleteForm.get('id').value).subscribe({

        next: value => {
          $('#deleteModal').modal('toggle');
          this.patenaireDelete = true;
          this.loading = false;
          this.getUtilisateurs();
          this.showSuccessNotification('top', 'center', 'Utilisateur supprimé avec sucess')
        },
        error: err => {
          $('#deleteModal').modal('toggle');
          this.patenaireDelete = false;
          this.loading = false;
          this.showErrorNotification('top', 'center', 'Echec de suppression de l\'utilisateur')
        },
        complete: () => {

        }
      })

    }

  }


  createPartenaire(user: Utilisateur) {

    this.utilisateurService.createUtilisateurs(user).subscribe({
      next: value => {
        console.log(value);
        this.resetForm();
        this.patenaireCreate = true;
        this.loading = false;

        if (this.isUpdate) {
          this.showSuccessNotification('top', 'center', 'Utilisateur modifié avec sucess');
        } else {
          this.showSuccessNotification('top', 'center', 'Utilisateur ajouté avec sucess')
        }

        this.isUpdate = false;
        this.utilisateur = new Utilisateur();

        this.getUtilisateurs();
      },
      error: err => {
        this.resetForm();
        this.patenaireCreate = false;
        this.loading = false;
        this.isUpdate = false;
        this.erreurInterne = true;

        if (this.isUpdate) {
          this.showErrorNotification('top', 'center', 'Echec de modification de l\'utilisateur');
        } else {
          this.showErrorNotification('top', 'center', 'Echec de création de l\'utilisateur')
        }

        this.isUpdate = false;

        this.utilisateur = new Utilisateur();
      }, complete(): void {
      }
    })

  }





  getSepareteValue() {

    this.partenairesEntreprise = [];
    this.partenairesPersonne = [];


    for (let i = 0; i < this.partenaires.length; i++) {

      if (this.partenaires[i].physicalPerson) {

        this.partenairesPersonne.push(this.partenaires[i])

      } else { this.partenairesEntreprise.push(this.partenaires[i]) }

    }


    this.dataTable();

  }



  toggleVisibility(e) {
    this.isPhysicalPersone = e.target.checked;

    console.log(this.isPhysicalPersone);

  }


  openCreateDialog() {

    this.resetForm();
  }

  openDeleteModal(causeId: number) {
    this.deleteForm.get('id').setValue(causeId);
    $('#deleteModal').modal('toggle');
  }


  bingData(user: Utilisateur) {

    this.isUpdate = true;
    this.utilisateur = user;

    this.formGroupCreate.get('firt_name').setValue(user.nomPrenoms);
    this.formGroupCreate.get('telephone').setValue(user.telephone);
    this.formGroupCreate.get('email').setValue(user.email);
    this.formGroupCreate.get('adresse').setValue(user.adresse);
    this.formGroupCreate.get('sexe').setValue(user.sexe);

    if (!user.physicalPerson) {
      this.formGroupCreate.get('entreprise').setValue(user.nomPrenoms);
      this.formGroupCreate.get('ifu').setValue(user.ifu);
    }

    this.isPhysicalPersone = user.physicalPerson;

    $('.modal-add-partenaire').modal('toggle');

  }


  resetForm() {

    this.formSubmit = false;

    this.formGroupCreate.get('firt_name').setValue('');
    this.formGroupCreate.get('entreprise').setValue('');
    this.formGroupCreate.get('ifu').setValue('');
    this.formGroupCreate.get('telephone').setValue('');
    this.formGroupCreate.get('email').setValue('');
    this.formGroupCreate.get('adresse').setValue('');
    this.formGroupCreate.get('sexe').setValue('sexe');

    $('.modal-add-partenaire').modal('toggle');

  }


  deleteback() {

    this.deleteForm.get('id').setValue('');

  }


  dataTable() {
    $(document).ready( () => {
      $('#partenaire-list').DataTable({
        pageLength: 10,
        retrieve: true,
        // language: { url: '../../../assets/commons/French.json'},
        bInfo: true
      });

      $('#partenaire-list-persone').DataTable({
        pageLength: 10,
        retrieve: true,
        // language: { url: '../../../assets/commons/French.json'},
        bInfo: true
      });

      $('#partenaire-list-entreprise').DataTable({
        pageLength: 10,
        retrieve: true,
        // language: { url: '../../../assets/commons/French.json'},
        bInfo: true
      });

      /*$('#partenaire-list_filter').addClass("float-right");
      $('#partenaire-list_paginate').addClass("float-right");

      $('#partenaire-list-persone_filter').addClass("float-right");
      $('#partenaire-list-persone_paginate').addClass("float-right");

      $('#partenaire-list-entreprise_filter').addClass("float-right");
      $('#partenaire-list-entreprise_paginate').addClass("float-right");

      $('.pagination').addClass("float-right");
      $('.dataTables_empty').addClass("text-center");*/
    } ); // dataTable
  }


  showSuccessNotification(from, align, message) {

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: 'notifications',
      message: '' + message

    }, {
      timer: 4000,
      placement: {
        from: from,
        align: align
      },
      // tslint:disable-next-line:max-line-length
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-success alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
    });
  }


  showErrorNotification(from, align, message) {

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: 'notifications',
      message: '' + message

    }, {
      timer: 4000,
      placement: {
        from: from,
        align: align
      },
      // tslint:disable-next-line:max-line-length
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-danger alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
    });
  }


}
