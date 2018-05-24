import { Component } from '@angular/core';

@Component({
  templateUrl: 'settings.html'
})
export class AppSettingsPage {
  sales = {
    name: 'puji',
    email: 'puji@padi.net.id'
  }
  constructor(){ }
  saveSetting(){
    
  }
}