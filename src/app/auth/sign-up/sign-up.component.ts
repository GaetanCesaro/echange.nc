import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: "sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent {
  email: string;
  password: string;
  passwordBis: string;
  mouseoverLogin: boolean;
  signUpInvalid = false;
  errorMessage: string;

  constructor(private router: Router) {}

  signup(formValues) {
    var email = formValues.email;

    firebase
      .auth()
      .createUserWithEmailAndPassword(formValues.email, formValues.password)
      .catch(function(error) {
        console.log(
          "ERROR - Firebase createUserWithEmailAndPassword() - " + error
        );

        this.errorMessage = error.message;
        this.signUpInvalid = true;
      })
      .then(function success() {
        return this.addUser(email);
      })
      .finally(function() {
        this.router.navigate(["/home"]);
      });
  }

  cancel() {
    this.router.navigate(["/home"]);
  }

  addUser(email) {
    var db = firebase.firestore();

    console.log({ email });

    db.collection("users")
      .add({
        firstname: "Jean",
        lastname: "Louis",
        email: email
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }
}
