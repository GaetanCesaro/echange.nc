import { Component, OnChanges, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";

import { AdService } from "../ad.service";
import { Ad } from "../ad.model";

@Component({
  selector: "ad-list",
  templateUrl: "./ad-list.component.html",
  styleUrls: ["./ad-list.component.css"]
})
export class AdListComponent implements OnChanges, OnInit {
  filter: string;
  ads: Observable<Ad[]>;

  constructor(private adService: AdService) {}

  ngOnInit() {
    // Recherche des posts via GraphQL
    this.ads = this.adService.findAllAds();

    // Initialisation du filtre
    this.getAdList(this.filter);
  }

  ngOnChanges() {
    this.getAdList(this.filter);
  }

  getAdList(filter: string) {
    this.ads = this.adService.findAds(filter);
    this.ads.subscribe(val => console.log("Ads: ", val));
  }
}
