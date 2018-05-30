import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { ImeiProvider } from '../../providers/imei/imei'
import { UserProvider } from '../../providers/user/user'
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
  constructor(private http: HttpClient,public imei: ImeiProvider,public user: UserProvider){ 
    let that = this
    imei.getImei(function(imei){
      that.device.IMEI = imei
      user.getData(imei,function(data){
        that.sales.email = data.email
        that.sales.username = data.username
      })
    });
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
}