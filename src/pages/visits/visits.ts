import { Component } from '@angular/core';
import { App,MenuController, NavController } from 'ionic-angular';
@Component({
  selector: 'page-visits',
  templateUrl: 'visits.html'
})
export class VisitsPage {
  constructor(app:App,public menu: MenuController,public nav: NavController) {
    menu.enable(true);
  }
}