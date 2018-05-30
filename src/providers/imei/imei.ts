import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Uid } from '@ionic-native/uid';
import { AndroidPermissions } from '@ionic-native/android-permissions';

/*
  Generated class for the ImeiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImeiProvider {

  constructor(public http: HttpClient,private uid:Uid, private androidPermissions: AndroidPermissions) {
    console.log('Hello ImeiProvider Provider');
  }
  async getImei(callback){
    const { hasPermission } = await this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    );
   
    if (!hasPermission) {
      const result = await this.androidPermissions.requestPermission(
        this.androidPermissions.PERMISSION.READ_PHONE_STATE
      );
   
      if (!result.hasPermission) {
        throw new Error('Permissions required');
      }
   
      // ok, a user gave us permission, we can get him identifiers after restart app
      return;
    }
    callback(this.uid.IMEI)
//    return this.uid.IMEI
  }

}
