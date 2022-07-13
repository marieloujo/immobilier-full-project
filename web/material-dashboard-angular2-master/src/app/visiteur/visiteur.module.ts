import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {RouterModule} from "@angular/router";
import { ProduitsComponent } from './produits/produits.component';
import { ProduitItemComponent } from './produit-item/produit-item.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterVComponent } from './footer-v/footer-v.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({

    declarations: [
        IndexComponent,
        ProduitsComponent,
        ProduitItemComponent,
        ContactsComponent,
        AboutUsComponent,
        HeaderComponent,
        FooterVComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule
    ]
})


export class VisiteurModule { }
