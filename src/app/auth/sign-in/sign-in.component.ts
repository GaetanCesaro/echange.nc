import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthComponent } from '../auth.component';

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
        this.router.navigate(["/home"]);
      })
    .catch(error => {
      this.signInInvalid = true;
      console.log("ERROR - Firebase signInWithEmailAndPassword() - " + error.code);
      this.errorMessage = this.authComponent.processAuthErrors(error);
    });
  }
}
