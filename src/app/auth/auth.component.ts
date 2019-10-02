import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from "firebase";
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

}
