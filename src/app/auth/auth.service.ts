import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: firebase.User;
  token: string;

  constructor() { }

  isSignedIn(): boolean {
    return this.getCurrentUser() != null;
  }

  getCurrentUser(): firebase.User {
    return firebase.auth().currentUser;
  }

  signOut() {
    firebase.auth().signOut().then(function() {
      console.log("Sign out success");
    }).catch(function(error) {
      console.log("ERROR in SignOut - ", error);
    });
  }

  signInGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        this.token = (<firebase.auth.OAuthCredential>result.credential).accessToken; 
        // The signed-in user info.
        this.user = result.user;
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

        return null;
      });
  }

}