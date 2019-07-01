import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { appRoutes } from "src/routes";

import { EchangeAppComponent } from './echange-app.component';
import { HomeComponent } from './home/home.component';

import {
  NavbarComponent,
  Error404Component
} from './shared/index';


@NgModule({
  declarations: [
    EchangeAppComponent,
    HomeComponent,
    NavbarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [EchangeAppComponent]
})
export class AppModule {
  constructor() {
    // Ajout des composants icones Font-Awesome utilisés
    library.add(faUser);
  }
}
