import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdService } from '../ad.service';
import { Ad } from '../ad.model';

@Component({
  selector: 'app-ad-create',
  templateUrl: './ad-create.component.html',
  styleUrls: ['./ad-create.component.scss']
})
export class AdCreateComponent implements OnInit {

  categories: string[];
  
  category: string;
  title: string;
  description: string;
  price: number;

  mouseoverLogin: boolean;
  adCreateInvalid: boolean = false;
  errorMessage: string = "";

  constructor(private router: Router, private adService: AdService) { }

  ngOnInit() {
    this.categories = static_categories;
  }

  createAd(adForm: NgForm) {
    console.log({adForm})

    let ad : Ad = {
      category: this.category,
      title: this.title,
      description: this.description,
      price: this.price,
      imageUrl: '',
      owner: null
    };

    this.adService.createAd(ad)
      .then(() => {
        console.log("coucou");
      })
      .catch(error => {
        this.adCreateInvalid = true;
        console.log("ERROR - createAd() - " + error.code);
        this.errorMessage = error.errorMessage;
      });
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