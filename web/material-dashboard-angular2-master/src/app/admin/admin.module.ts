import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxLoadingModule} from 'ngx-loading';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        NgxLoadingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatAutocompleteModule
    ]
})
export class AdminModule { }
