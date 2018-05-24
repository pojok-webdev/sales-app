import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  templateUrl: 'settings.html'
})
export class AppSettingsPage {
  loc = {
    longitude:0,
    latitude:0
  }
  constructor(public geolocation: Geolocation){ 
    this.getCurrentLocation()
   }
  getCurrentLocation(){
    this.geolocation.getCurrentPosition()
    .then(resp=>{
      console.log("Res Latitude",resp.coords.latitude);
      console.log("Res Longitude",resp.coords.longitude);
      this.loc.latitude = resp.coords.latitude;
      this.loc.longitude = resp.coords.longitude;
    })
    .catch(err=>{
      console.log("Error get location",err);
    })
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
}