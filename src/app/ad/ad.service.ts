import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import { Ad, Query, Mutation } from "./ad.model";

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
    return this.apollo.watchQuery<Query>({
        query: findAdsQuery
      })
      .valueChanges.pipe(map(result => result.data.findAllAds));
  }

  newAd(ad: Ad) {
    console.log(ad);
    return this.apollo.mutate<Mutation>({
        mutation: newAdMutation,
        variables: {
          adTitle: ad.title,
          adDescription: ad.description,
          adPrice: ad.price,
          adCategory: ad.category,
          adOwnerId: ad.owner != undefined ? ad.owner.id : 1
        }
      });
  }
}

const findAdsQuery = gql`
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
`;

const newAdMutation = gql`
  mutation newAd(
    $adTitle: String!, 
    $adDescription: String!, 
    $adPrice: Int!,
    $adCategory: String!,
    $adOwnerId: Long! 
  ) {
    newAd(
      title: $adTitle,
      description: $adDescription,
      price: $adPrice,
      category: $adCategory,
      owner_id: $adOwnerId
    ){
        id
    }
  }
`;