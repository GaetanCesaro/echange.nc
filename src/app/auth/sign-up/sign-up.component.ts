import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  email: string;
  password: string;
  passwordBis: string;
  mouseoverLogin: boolean;
  signUpInvalid = false;
  errorMessage: string;

  constructor(private router: Router) { }

  login(formValues) {
    firebase.auth().createUserWithEmailAndPassword(formValues.email, formValues.password).catch(function(error) {
      console.log("ERROR - Firebase createUserWithEmailAndPassword() - " + error)

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
