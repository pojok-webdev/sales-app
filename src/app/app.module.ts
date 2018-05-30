import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VisitsPage } from '../pages/visits/visits';
import { AddVisitPage } from '../pages/visits/add';
import { EntryOtpPage } from '../pages/visits/entryOtp';

import { AppSettingsPage } from '../pages/home/settings';
import { HttpClientModule } from '@angular/common/http';

import { Geolocation } from '@ionic-native/geolocation';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Uid } from '@ionic-native/uid';
import { ImeiProvider } from '../providers/imei/imei';
import { UserProvider } from '../providers/user/user';
import { LocationProvider } from '../providers/location/location';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VisitsPage,
    AddVisitPage,
    EntryOtpPage,
    AppSettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VisitsPage,
    AddVisitPage,
    EntryOtpPage,
    AppSettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Uid,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImeiProvider,
    ImeiProvider,
    UserProvider,
    LocationProvider
  ]
})
export class AppModule {}
