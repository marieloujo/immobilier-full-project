import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';
import {IndexComponent} from './visiteur/index/index.component';
import {ProduitsComponent} from './visiteur/produits/produits.component';
import {AboutUsComponent} from './visiteur/about-us/about-us.component';
import {ContactsComponent} from './visiteur/contacts/contacts.component';
import {ProduitItemComponent} from './visiteur/produit-item/produit-item.component';
import {LoginComponent} from './admin/login/login.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [

  { path: 'app', redirectTo: 'app/login', pathMatch: 'full', },
  { path: 'app', component: AdminLayoutComponent, canActivate: [AuthGuard],
    children: [{
      path: '',
      loadChildren: './admin/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },

  { path: 'app/login', component: LoginComponent},

  { path: '', component: IndexComponent},
  { path: 'produits', component: ProduitsComponent },
  { path: 'apropos', component: AboutUsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'produit/:idArticle', component: ProduitItemComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
