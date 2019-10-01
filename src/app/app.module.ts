import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { appRoutes } from "src/routes";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { EchangeAppComponent } from './echange-app.component';
import { HomeComponent } from './home/home.component';

import {
  NavbarComponent,
  Error404Component,
  SearchBarComponent
} from './shared/index';

import {
  AdListComponent,
  AdDetailsComponent,
  AdComponent,
  AdService
} from './home/ad/index';

import {
  AuthComponent,
  SignInComponent,
  SignUpComponent
} from './auth/index'


@NgModule({
  declarations: [
    EchangeAppComponent,
    HomeComponent,
    NavbarComponent,
    Error404Component,
    SearchBarComponent,
    AdListComponent,
    AdDetailsComponent,
    AdComponent,
    SignInComponent,
    SignUpComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AdService
  ],
  bootstrap: [EchangeAppComponent]
})
export class AppModule {
  constructor() {
    // Ajout des composants icones Font-Awesome utilisés
    library.add(faUser, faSearch, faFacebook, faTwitter, faGoogle);
  }
}
