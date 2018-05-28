import { Component } from '@angular/core';
import { Uid } from '@ionic-native/uid';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
@Component({
  templateUrl: 'settings.html'
})
export class AppSettingsPage {
  request: Observable <any>
  sales = {
    username: '',
    email: '@padi.net.id'
  }
  device={
    IMEI : ''
  };
  constructor(private http: HttpClient,private uid:Uid, private androidPermissions: AndroidPermissions){ 
    this.getImei();
    this.getSetting();
  }
  getSetting(){
    this.request = this.http.get('http://192.168.0.117:1946/getmobiledevice/'+this.getImei())
    this.request.subscribe(data=>{
      console.log("Data",data)
      this.sales.email = data.email;
      this.sales.username = data.username;
    })    
  }
  saveSetting(){
    this.request = this.http.post('http://192.168.0.117:1946/savemobiledevice',{
      imei:this.device.IMEI,
      user:this.sales.username,
      email:this.sales.email
    },{responseType:'text'})
    this.request.subscribe(data=>{
      console.log("Data",data)
    })
  }
  async getImei(){
    const { hasPermission } = await this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    );
   
    if (!hasPermission) {
      const result = await this.androidPermissions.requestPermission(
        this.androidPermissions.PERMISSION.READ_PHONE_STATE
      );
   
      if (!result.hasPermission) {
        this.device.IMEI = 'Permission Required'
        throw new Error('Permissions required');
      }
   
      // ok, a user gave us permission, we can get him identifiers after restart app
      return;
    }
    this.device.IMEI = this.uid.IMEI
    return this.uid.IMEI
  }
}