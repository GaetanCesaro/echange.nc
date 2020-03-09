import { Component, OnChanges, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";

import { AdService } from "../ad.service";
import { Ad } from "../ad.model";
import { Post, Query } from "../graphql.types";

@Component({
  selector: "ad-list",
  templateUrl: "./ad-list.component.html",
  styleUrls: ["./ad-list.component.css"]
})
export class AdListComponent implements OnChanges, OnInit {
  filter: string;
  ads: Ad[];
  posts: Observable<Post[]>;

  constructor(private adService: AdService) {}

  ngOnInit() {
    // Recherche des posts via GraphQL
    this.posts = this.adService.findAllPosts();

    // Initialisation du filtre
    this.getAdList(this.filter);
  }

  ngOnChanges() {
    this.getAdList(this.filter);
  }

  getAdList(filter: string) {
    this.ads = this.adService.find(filter);
    console.log("Ads : ", this.ads);
    this.posts.subscribe(val => console.log("Posts : ", val));
  }
}
