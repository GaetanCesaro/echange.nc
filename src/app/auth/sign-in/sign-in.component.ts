import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  email: string;
  password: string;
  mouseoverLogin: boolean;
  signInInvalid:boolean = false;

  constructor(private router: Router) { }

  login(formValues) {
    firebase.auth().signInWithEmailAndPassword(formValues.email, formValues.password).catch(function(error) {
      console.log("ERROR - Firebase signInWithEmailAndPassword() - " + error)

      this.errorMessage = error.message;
      this.signUpInvalid = true;
    }).finally(function(){
      this.router.navigate(["/home"]);
    });
  }

  cancel() {
    this.router.navigate(["/home"]);
  }

}
