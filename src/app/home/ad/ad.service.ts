import { Injectable } from '@angular/core';
import { Ad } from './ad.model';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  find(filter: string): Ad[] {
    return ads;
  }
}

const ads : Ad[] = [
  {
    id: 1,
    title: "Bricolage mobilier intérieur",
    description: "Tous bricolages intérieurs, montage de rideaux, fixations murales, petites réparation de meubles, etc...",
    image: "bricolage.jpeg"
  },
  {
    id: 2,
    title: "Plomberie",
    description: "Plomberie intérieure (réparations, installations, etc...)",
    image: "plombier.jpeg"
  },
  {
    id: 3,
    title: "Electricité générale",
    description: "Opérations d'élécticité d'usage général intérieur et extèrieur",
    image: "electricien.jpeg"
  },
  {
    id: 4,
    title: "Installations d'éviers",
    description: "Eviers, mitigeurs, douches, etc...",
    image: "evier.jpeg"
  },
  {
    id: 5,
    title: "Petit outillage",
    description: "Tous types d'outils portatifs (tournevis, clés, visseuses, etc...)",
    image: "outils.jpeg"
  },
  {
    id: 6,
    title: "Outils de découpe",
    description: "Outillage massif de découpe (scies, scies circulaires, foreuses, etc...)",
    image: "scie_circulaire.jpeg"
  }
]