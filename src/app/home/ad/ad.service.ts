import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import { Ad, Query } from "./ad.model";

@Injectable({
  providedIn: "root"
})
export class AdService {
  constructor(private apollo: Apollo) {}

  findAds(filter: string): Observable<Ad[]> {
    // TODO - Apply filter
    return this.findAllAds();
  }

  findAllAds(): Observable<Ad[]> {
    return this.apollo
      .watchQuery<Query>({
        query: gql`
          query findAllAds {
            findAllAds {
              id
              title
              description
              price
              imageUrl
              category
              owner {
                id
                firstName
                lastName
              }
            }
          }
        `
      })
      .valueChanges.pipe(map(result => result.data.findAllAds));
  }
}