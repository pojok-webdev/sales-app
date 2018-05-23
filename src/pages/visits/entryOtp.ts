import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Component({
  templateUrl: 'entryOtp.html'
})
export class EntryOtpPage {
  sending : Observable<any>;
  otp = {
    val:'0',confirm:'waiting ....'
  }
  constructor(private http: HttpClient){}
  sendOtp = ()=>{
    console.log('OTP to send',this.otp.val)
    this.sending = this.http.get('http://192.168.0.117:1946/confirmotp/'+this.otp.val);
    this.sending.subscribe(data=>{
      console.log("Data observed",data);
      if(data.changedRows >0){
        console.log('There are data affected');
        this.otp.confirm = "Entri OTP Berhasil";
      }else{
        this.otp.confirm = "Entri OTP Tidak Berhasil";
      }
    })
  }
}
