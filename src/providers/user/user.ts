import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  request: Observable <any>
  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  getData(imei,callback){
    this.request = this.http.get('http://192.168.0.117:1946/getmobiledevice/'+imei)
    this.request.subscribe(data=>{
      console.log("Data",data)
      callback(data[0]);
    })
  }

}
