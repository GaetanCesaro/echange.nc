import { Component } from "@angular/core";
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

  signup(formValues) {
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
      .then(userCredential => this.addUser(userCredential, formValues))
      .finally(function() {
        this.router.navigate(["/home"]);
      });
  }

  cancel() {
    this.router.navigate(["/home"]);
  }

  addUser(userCredential: firebase.auth.UserCredential, formValues) {
    if (userCredential != null) {
      var db = firebase.firestore();

      console.log({ userCredential });
      console.log({ formValues });

      db.collection("users")
        .add({
          firstname: formValues.firstname,
          lastname: formValues.lastname,
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
}
