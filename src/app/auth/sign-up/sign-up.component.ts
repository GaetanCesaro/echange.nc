import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: "sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent {
  mouseoverLogin: boolean;
  signUpInvalid = false;
  errorMessage: string;

  constructor(private router: Router) {}

  signup(loginForm: NgForm) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(loginForm.value.email, loginForm.value.password)
      .then(userCredential => {
        this.addUser(userCredential, loginForm);
        this.router.navigate(["/home"]);
      })
      .catch(error => {
        this.processSignupError(error, loginForm);
      });
  }

  processSignupError(error, loginForm: NgForm) {
    this.signUpInvalid = true;

    console.log("ERROR - Firebase createUserWithEmailAndPassword() - " + error.code);

    switch(error.code) {
      case "auth/email-already-in-use":
        this.errorMessage = "L'email renseigné est déjà utilisé";
        break;

      case "auth/invalid-email":
        this.errorMessage = "L'email renseigné est invalide";
        break;

      case "auth/weak-password":
        this.errorMessage = "Le mot de passe renseigné n'est pas assez sécurisé";
        break;

      case "auth/operation-not-allowed":
      default:
        this.errorMessage = "Une erreur inconnue s'est produite, contactez le support";
        break;
    }
  }

  addUser(userCredential, loginForm: NgForm) {
    if (userCredential != null) {
      var db = firebase.firestore();

      console.log({ userCredential });
      console.log({ loginForm });

      db.collection("users")
        .add({
          firstname: loginForm.value.firstname,
          lastname: loginForm.value.lastname,
          email: userCredential.user.email
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  }

  loginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
}
