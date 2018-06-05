import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HockeyApp } from 'ionic-hockeyapp';

import { LoginProvider } from '../providers/login/login';
import { OrdersPageModule } from '../pages/orders/orders.module';
import { NavigatePageModule } from '../pages/navigate/navigate.module';
import { OrderServiceProvider } from '../providers/order-service/order-service';
import { DeliverycheckPageModule } from '../pages/deliverycheck/deliverycheck.module';
import { MultideliveryPageModule } from '../pages/multidelivery/multidelivery.module';
import { LocationTracker } from '../providers/location-tracker/location-tracker';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { DatePipe } from '@angular/common';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Globals } from '../providers/global';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    OrdersPageModule,
    NavigatePageModule,
    DeliverycheckPageModule,
    MultideliveryPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    OrderServiceProvider,
    LocationTracker,
    BackgroundGeolocation,
    Geolocation,
    LaunchNavigator,
    DatePipe,
    Globals,
    LocationAccuracy,
    HockeyApp
  ]
})
export class AppModule {

}

//LocationTracker,BackgroundGeolocation, Geolocation,LaunchNavigator,
