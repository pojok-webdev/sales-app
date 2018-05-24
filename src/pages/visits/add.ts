import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { EntryOtpPage } from '../visits/entryOtp';
import { Geolocation } from '@ionic-native/geolocation';

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
  loc = {
    longitude : 0,
    latitude : 0
  }
  am = {
    name: 'puji',
    email: 'puji@padi.net.id'
  }
  constructor(private http: HttpClient, public nav :NavController, public geolocation: Geolocation){
    this.getCurrentLocation()
  }
  getCurrentLocation(){
    this.geolocation.getCurrentPosition()
    .then(location=>{
      this.loc.latitude = location.coords.latitude
      this.loc.longitude = location.coords.longitude
    })
    .catch(err=>{
      console.log("Error",err)
    });
  }
  watchLocation(){
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data)=>{
      console.log("Data",data)
      this.loc.longitude = data.coords.longitude;
      this.loc.latitude = data.coords.latitude;
      console.log("Data Latitude",data.coords.latitude);
      console.log("Data Longitude",data.coords.longitude);
    })
  }
  sendRequest(){
      this.request = this.http.post(
        'http://192.168.0.117:1946/reqotp',
        {
          clientname:this.client.name,
          address:this.client.address,
          phone:this.client.phone,
          latitude:this.loc.latitude,
          longitude:this.loc.longitude,
          sender:this.am.name
        },{responseType:'text'}
      )
      this.request.subscribe(data=>{
        console.log("Data",data);
        this.nav.push(EntryOtpPage);
      })
    
  }
}