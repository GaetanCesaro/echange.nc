import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'echange-app-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EchangeAppComponent {
  title = 'Echange.nc';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAgcqN_DWKXnOqJpTk_kN202jPBOJU8zrU",
      authDomain: "echangenc.firebaseapp.com",
      databaseURL: "https://echangenc.firebaseio.com",
      projectId: "echangenc",
      storageBucket: "",
      messagingSenderId: "38239985711",
      appId: "1:38239985711:web:4901790a5b8d9328"
    };

    firebase.initializeApp(firebaseConfig);
  }

}
