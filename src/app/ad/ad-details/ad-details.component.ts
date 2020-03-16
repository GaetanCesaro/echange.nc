import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Ad } from '../ad.model';
import { AdService } from '../ad.service';

@Component({
  selector: 'ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent {
  @Input() ad: Ad;

  imageBasePath: string;

  constructor(private adService: AdService,
    private route: ActivatedRoute,
    private router: Router) {
      this.imageBasePath = "/assets/samples/";  // TODO A externaliser dans fichier properties
    }

}
