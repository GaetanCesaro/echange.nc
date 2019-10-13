import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private authService: AuthService, private toastrService: ToastrService) { }

  signOut(){
    this.authService.signOut();
    this.toastrService.info("Déconnexion réussie");
  }

  isSignedIn(): boolean{
    return this.authService.isSignedIn();
  }

}
