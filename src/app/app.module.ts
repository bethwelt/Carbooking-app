import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";
//import { Welcome } from '../pages/welcome/welcome';
import { AuthService } from '../providers/auth-service';
import { SplitPane } from '../providers/split-pane';
import { Common } from '../providers/common';
//import { Login } from '../pages/login/login';
//import { Signup } from '../pages/signup/signup';
import { AddphotosPage } from '../pages/addphotos/addphotos';
import { AddPage } from '../pages/add/add';
import {Camera} from '@ionic-native/camera/ngx';
import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import { HttpModule } from "@angular/http";
import { MomentModule } from 'angular2-moment';
import { LinkyModule } from 'angular-linky';

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
	AddphotosPage,
	AddPage,
    TripDetailPage,
    TripsPage
  ],
  imports: [
    BrowserModule,
	MomentModule,
	LinkyModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
	AddphotosPage,
	AddPage,
    TripsPage
  ],
  providers: [
    StatusBar,
	AuthService,
	SplitPane,
	Common,
    Camera,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider
  ]
})

export class AppModule {
}
