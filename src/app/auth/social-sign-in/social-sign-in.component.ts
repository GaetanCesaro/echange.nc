import { Component } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from "firebase";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-social-sign-in',
  templateUrl: './social-sign-in.component.html',
  styleUrls: ['../auth.component.scss']
})
export class SocialSignInComponent {

  constructor(private router: Router, private authService: AuthService) {}

  loginGoogle() {
    Promise.resolve(this.authService.signInGoogle())
      .then(() => this.router.navigate(["/home"]));
  }

  addUser(user: firebase.User) {
    if (user != null) {
      var db = firebase.firestore();

      db.collection("users").doc(user.email)
        .set({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        })
        .then(function() {
          console.log("Social login success !");
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  }

}
