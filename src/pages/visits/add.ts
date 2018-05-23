import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { EntryOtpPage } from '../visits/entryOtp';
@Component({
  templateUrl: 'add.html'
})
export class AddVisitPage {
  request: Observable<any>
  client = {
    name:'',
    address:'',
    phone:''
  }
  constructor(private http: HttpClient, public nav :NavController){}
  sendRequest(){
    console.log("Should be sent")
    this.request = this.http.post(
      'http://192.168.0.117:1946/reqotp',
      {
        clientname:this.client.name,
        address:this.client.address,
        phone:this.client.phone
      },{responseType:'text'}
    )
    this.request.subscribe(data=>{
      console.log("Data",data);
      this.nav.push(EntryOtpPage);
    })
  }
}