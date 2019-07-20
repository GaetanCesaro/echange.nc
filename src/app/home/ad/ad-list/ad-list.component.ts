import { Component, OnChanges } from '@angular/core';
import { AdService } from '../ad.service';
import { Ad } from '../ad.model';

@Component({
  selector: 'ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnChanges {

  filter: string;
  ads: Ad[];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.getAdList(this.filter);
  }

  ngOnChanges() {
    this.getAdList(this.filter);
  }

  getAdList(filter: string) {
    this.ads = this.adService.find(filter);
    console.log("Ads : ", this.ads);
  }

}
