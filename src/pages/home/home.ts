import { Component } from '@angular/core';
import { App,MenuController, NavController } from 'ionic-angular';
import { VisitsPage } from '../visits/visits'
import { AddVisitPage } from '../visits/add'
import { EntryOtpPage } from '../visits/entryOtp';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(app:App,public menu: MenuController,public nav: NavController) {
    menu.enable(true);
  }
  openMenu(){
    this.menu.open();
  }
  sayHello = ()=>{
    console.log("Hello");
    this.nav.push(VisitsPage);
  }
  openPage = (pageToOpen)=>{
    console.log("openPage",pageToOpen);
    this.nav.push(VisitsPage);
  }
  entryOtp = ()=>{
    console.log("openPage");
    this.nav.push(EntryOtpPage);
  }
  addVisitPage = ()=>{
    this.nav.push(AddVisitPage);
  }
}
