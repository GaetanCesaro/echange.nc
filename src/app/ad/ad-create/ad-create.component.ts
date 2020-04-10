import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { AdService } from '../ad.service';
import { Ad } from '../ad.model';

@Component({
  selector: 'app-ad-create',
  templateUrl: './ad-create.component.html',
  styleUrls: ['./ad-create.component.scss']
})
export class AdCreateComponent implements OnInit {

  categories: string[];
  mouseoverLogin: boolean;
  adCreateInvalid: boolean = false;
  errorMessage: string = "";

  inputCategory: NgModel;
  inputTitle: NgModel;
  inputDescription: NgModel;
  inputPrice: NgModel;

  constructor(private router: Router, private adService: AdService) { }

  ngOnInit() {
    this.categories = static_categories;
  }

  createAd(adForm: NgForm) {
    if (adForm.valid) {
      console.log(adForm.form.value)

      let ad: Ad = adForm.form.value;

      this.adService.newAd(ad)
        .subscribe(
          {
            next(data) {
              console.log('Données retournées', data);
            },
            error(error) {
              console.log('Erreur lors de l\'ajout de l\'annonce', error);
              this.adCreateInvalid = true;
              console.log("ERROR - createAd() - " + error.code);
              this.errorMessage = error.errorMessage;
            },
            complete() { 
              console.log("Annonce créée !");
              //this.backToHomepage(); 
            }
          }
        )
    }
  }

  backToHomepage() {
    this.router.navigate(["/home"]);
  }

}

const static_categories: string[] = [
  "bricolage",
  "electromenager",
  "electricité",
  "musique",
  "nettoyage",
  "outils", 
  "plomberie"
];