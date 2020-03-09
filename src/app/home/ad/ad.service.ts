import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import { Ad } from "./ad.model";
import { Post, Query } from "./graphql.types";

@Injectable({
  providedIn: "root"
})
export class AdService {
  constructor(private apollo: Apollo) {}

  find(filter: string): Ad[] {
    return ads;
  }

  findAllPosts(): Observable<Post[]> {
    return this.apollo
      .watchQuery<Query>({
        query: gql`
          query findAllPosts {
            findAllPosts {
              id
              title
              description
              price
              owner {
                id
                firstName
                lastName
              }
            }
          }
        `
      })
      .valueChanges.pipe(map(result => result.data.findAllPosts));
  }
}

const ads: Ad[] = [
  {
    id: 1,
    title: "Bricolage mobilier intérieur",
    description:
      "Tous bricolages intérieurs, montage de rideaux, fixations murales, petites réparation de meubles, etc...",
    image: "bricolage.jpg"
  },
  {
    id: 2,
    title: "Plomberie",
    description: "Plomberie intérieure (réparations, installations, etc...)",
    image: "plombier.jpg"
  },
  {
    id: 3,
    title: "Electricité générale",
    description:
      "Opérations d'élécticité d'usage général intérieur et extèrieur",
    image: "electricien.jpg"
  },
  {
    id: 4,
    title: "Installations d'éviers",
    description: "Eviers, mitigeurs, douches, etc...",
    image: "evier.jpg"
  },
  {
    id: 5,
    title: "Petit outillage",
    description:
      "Tous types d'outils portatifs (tournevis, clés, visseuses, etc...)",
    image: "outils.jpg"
  },
  {
    id: 6,
    title: "Outils de découpe",
    description:
      "Outillage massif de découpe (scies, scies circulaires, foreuses, etc...)",
    image: "scie_circulaire.jpg"
  }
];
