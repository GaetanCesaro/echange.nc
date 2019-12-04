import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthComponent } from '../auth.component';
import { User } from '../models/user.model';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../auth.component.scss']
})
export class SignInComponent {

  email: string;
  password: string;
  mouseoverLogin: boolean;
  signInInvalid: boolean = false;
  errorMessage: string = "";

  constructor(private router: Router, private authComponent: AuthComponent) { }

  signIn(loginForm: NgForm) {
    console.log({loginForm})
    firebase.auth().signInWithEmailAndPassword(loginForm.value.email, loginForm.value.password)
      .then(() => {
        this.loadUser(loginForm.value.email);
        this.router.navigate(["/home"]);
      })
    .catch(error => {
      this.signInInvalid = true;
      console.log("ERROR - Firebase signInWithEmailAndPassword() - " + error.code);
      this.errorMessage = this.authComponent.processAuthErrors(error);
    });
  }

  loadUser(email: string) {
    var db = firebase.firestore();
    db.collection("users").doc(email).get().then(function(doc) {
      if (doc.exists) {
          console.log("Utilisateur trouvé:", doc.data());

          this.documentDataToUser(doc.data());
          
      } else {
          console.log("Utilisateur non trouvé:", email);
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    })
  }

  documentDataToUser(docData: firebase.firestore.DocumentData): User {
    let user: User = {
      firstName: docData!["firstName"],
      lastName: docData!["lastName"],
      displayName: docData!["displayName"],
      email: docData!["email"],
      photoUrl: docData!["photoUrl"]
    }

    return user;
  }
}
