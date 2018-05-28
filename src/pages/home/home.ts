import { Component } from '@angular/core';
import { App,MenuController, NavController } from 'ionic-angular';
import { VisitsPage } from '../visits/visits'
import { AddVisitPage } from '../visits/add'
import { EntryOtpPage } from '../visits/entryOtp';
import { AppSettingsPage } from './settings';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  request : Observable<any>
  client = {
    name:''
  }
  searchResult = [
  ]
  constructor(app:App,public menu: MenuController,public nav: NavController, public http: HttpClient) {
    menu.enable(true);
  }
  searchClient(){
    console.log("Clicked",this.client.name)
    this.request = this.http.post('http://192.168.0.117:1946/checkclient',{
      par:this.client.name
    },{responseType:'json'})
    this.request.subscribe(data=>{
      console.log("Data",data);
      this.searchResult = data;
    },error=>{
      console.log("Error http post",error)
    })
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
  openSettingPage = ()=>{
    this.nav.push(AppSettingsPage)
  }
  entryOtp = ()=>{
    console.log("openPage");
    this.nav.push(EntryOtpPage);
  }
  addVisitPage = ()=>{
    this.nav.push(AddVisitPage);
  }
}
