import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'echange-app-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EchangeAppComponent implements OnInit {
  title = 'Echange.nc';

  constructor() { }

  ngOnInit() {

  }
}
