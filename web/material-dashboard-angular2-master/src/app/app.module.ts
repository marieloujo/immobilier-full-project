import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app.routing';
import { AdminModule} from './admin/admin.module';
import { ComponentsModule } from './admin/components/components.module';
import { VisiteurModule} from './visiteur/visiteur.module';

import { AppComponent } from './app.component';

import { CookieService } from 'ngx-cookie-service';

import { AuthGuard} from './auth.guard';
import { AdminGuard} from './admin.guard';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AdminModule,
    ComponentsModule,
    VisiteurModule,
    RouterModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [CookieService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
