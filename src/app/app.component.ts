import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HockeyApp } from 'ionic-hockeyapp';

import { HomePage } from '../pages/home/home';
import { OrdersPage } from '../pages/orders/orders';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

public rootPage: any;

//rootPage:any = HomePage;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, app:App, hockeyapp:HockeyApp) {
  
    platform.ready().then(() => {

      // The Android ID of the app as provided by the HockeyApp portal. Can be null if for iOS only.
    let androidAppId = '7521640ca44547128b7a4d89ccfe1330';
    // The iOS ID of the app as provided by the HockeyApp portal. Can be null if for android only.
    let iosAppId = 'null';
    // Specifies whether you would like crash reports to be automatically sent to the HockeyApp server when the end user restarts the app.
    let autoSendCrashReports = false;
    // Specifies whether you would like to display the standard dialog when the app is about to crash. This parameter is only relevant on Android.
    let ignoreCrashDialog = true;
 
    hockeyapp.start(androidAppId, iosAppId, autoSendCrashReports, ignoreCrashDialog);
   
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
        
      statusBar.styleDefault();
      splashScreen.hide();
      this.setRootPage();
    
    });
  }

   

    setRootPage(){
    if( localStorage.getItem("role") == "11") {
      this.rootPage = OrdersPage;
    } else {
      this.rootPage = HomePage;
    }
  }

}