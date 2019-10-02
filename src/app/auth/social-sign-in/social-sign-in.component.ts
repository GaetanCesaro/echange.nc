import { Component } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: 'app-social-sign-in',
  templateUrl: './social-sign-in.component.html',
  styleUrls: ['../auth.component.scss']
})
export class SocialSignInComponent {

  constructor(private router: Router) {}

  loginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = (<firebase.auth.OAuthCredential>result.credential).accessToken;
        // The signed-in user info.
        var user = result.user;
        this.addUser(user);
        this.router.navigate(["/home"]);
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
      });
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
