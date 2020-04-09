import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthComponent } from '../auth.component';
import { User } from '../models/user.model';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: "sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["../auth.component.scss"]
})
export class SignUpComponent {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  passwordBis: string;

  mouseoverLogin: boolean;
  signUpInvalid = false;
  errorMessage: string;

  constructor(private router: Router, private authComponent: AuthComponent) {}

  singUp(loginForm: NgForm) {
    firebase.auth().createUserWithEmailAndPassword(loginForm.value.email, loginForm.value.password)
      .then(userCredential => {
        this.addUser(userCredential, loginForm);
        this.router.navigate(["/home"]);
      })
      .catch(error => {
        this.signUpInvalid = true;
        console.log("ERROR - Firebase createUserWithEmailAndPassword() - " + error.code);
        this.errorMessage = this.authComponent.processAuthErrors(error);
      });
  }

  addUser(userCredential, loginForm: NgForm) {
    if (userCredential != null) {
      var db = firebase.firestore();

      console.log({ userCredential });
      console.log({ loginForm });

      let user: User = {
        firstName: loginForm.value.firstname,
        lastName: loginForm.value.lastname,
        displayName: loginForm.value.firstname + " " + loginForm.value.lastname,
        email: userCredential.user.email,
        photoUrl: ""
      }

      db.collection("users").doc(userCredential.user.email)
      .set(user)
        .then(function() {
          console.log("Signup and login success !");
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  }
}
