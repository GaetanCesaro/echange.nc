import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'echange-app-root',
  templateUrl: './echange-app.component.html',
  styleUrls: ['./echange-app.component.scss']
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
