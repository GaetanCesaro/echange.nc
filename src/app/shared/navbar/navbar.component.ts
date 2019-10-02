import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signOut(){
    this.authService.signOut();
  }

}
