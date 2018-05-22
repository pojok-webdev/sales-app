import { Component } from '@angular/core';
import { App,MenuController, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';                                                                                                                   
import { Observable } from 'rxjs/Observable';
@Component({                                                                                                                                                
  selector: 'page-visits',
  templateUrl: 'visits.html'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
})
export class VisitsPage {
  clns : Observable<any>;
  myclients = [];
  constructor(private http: HttpClient,public app:App,public menu: MenuController,public nav: NavController) {
    menu.enable(true);
    this.clns = this.http.get('http://192.168.0.117:1946/visits');
    this.clns.subscribe(
      data=>{
        this.myclients = data;
        console.log("dataku",data);
      }
    );
  };
}