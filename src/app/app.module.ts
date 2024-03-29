import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { appRoutes } from "src/routes";
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSearch, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { ToastrModule } from 'ngx-toastr'

import { EchangeAppComponent } from './echange-app.component';
import { HomeComponent } from './home/home.component';

import { environment } from './../environments/environment';

import {
  NavbarComponent,
  Error404Component,
  SearchBarComponent
} from './shared/index';

import {
  AdListComponent,
  AdDetailsComponent,
  AdCreateComponent,
  AdService
} from './ad/index';

import {
  AuthService,
  AuthComponent,
  SignInComponent,
  SignUpComponent,
  SocialSignInComponent
} from './auth/index';

@NgModule({
  declarations: [
    EchangeAppComponent,
    HomeComponent,
    NavbarComponent,
    Error404Component,
    SearchBarComponent,
    AdListComponent,
    AdDetailsComponent,
    SignInComponent,
    SignUpComponent,
    AuthComponent,
    SocialSignInComponent,
    AdCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AdService
  ],
  bootstrap: [EchangeAppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    // Ajout des composants icones Font-Awesome utilisés
    library.add(faSignOutAlt, faSignInAlt, faUser, faSearch, faFacebook, faTwitter, faGoogle);

    // Connexion au serveur GraphQL
    apollo.create({
      link: httpLink.create({ uri: environment.graphqlHostname + "/graphql" }),
      cache: new InMemoryCache()
    });
  }
}
