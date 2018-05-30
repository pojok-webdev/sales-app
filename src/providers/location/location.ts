import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation'
/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

  constructor(public http: HttpClient,public geolocation : Geolocation) {
    console.log('Hello LocationProvider Provider');
  }
  getCurrentLocation(callback){
    this.geolocation.getCurrentPosition()
    .then(location=>{
      callback(location)
//      this.loc.latitude = location.coords.latitude
//      this.loc.longitude = location.coords.longitude
    })
    .catch(err=>{
      console.log("Error",err)
    });
  }
  watchLocation(callback){
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data)=>{
      console.log("Data",data)
      callback(data)
//      this.loc.longitude = data.coords.longitude;
//      this.loc.latitude = data.coords.latitude;
//      console.log("Data Latitude",data.coords.latitude);
//      console.log("Data Longitude",data.coords.longitude);
    })
  }

}
