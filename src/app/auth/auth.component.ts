import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  signedIn: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.signedIn = this.authService.isSignedIn();
    if (this.signedIn) {
      this.router.navigate(["/home"]);
    }
  }

  processAuthErrors(error): string {
    switch(error.code) {
      case "auth/email-already-in-use":
        return "L'email renseigné est déjà utilisé";

      case "auth/invalid-email":
        return "L'email renseigné est invalide";

      case "auth/weak-password":
        return "Le mot de passe renseigné n'est pas assez sécurisé";

      case "auth/wrong-password":
        return"Le mot de passe renseigné n'est pas valide";

      case "auth/operation-not-allowed":
      default:
        return "Une erreur inconnue s'est produite, contactez le support";
    }
  }

}
