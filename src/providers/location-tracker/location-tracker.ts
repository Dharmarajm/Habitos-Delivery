import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
 
@Injectable()
export class LocationTracker {
 
  public watch: any;   
  public lat: number = 0;
  public lng: number = 0;
 
  constructor(public zone: NgZone, public backgroundGeolocation: BackgroundGeolocation , public geolocation: Geolocation,public locationAccuracy:LocationAccuracy) {
 
  }
 
  startTracking() {
 console.log("start");
  // Background Tracking

  this.locationAccuracy.canRequest().then((canRequest: boolean) => {

  if(canRequest) {
    // the accuracy option will be ignored by iOS
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => console.log('Request successful'),
      error => console.log('Error requesting location permissions', error)
    );
  }

});

  let config = {
    desiredAccuracy: 0,
    stationaryRadius: 20,
    distanceFilter: 10,
    debug: true,
    interval: 2000
  };
 
  this.backgroundGeolocation.configure(config).subscribe((location) => {
      console.log(location);
    console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
 
    // Run update inside of Angular's zone
    this.zone.run(() => {
      this.lat = location.latitude;
      this.lng = location.longitude;
    });
 
  }, (err) => {
 
    console.log(err);
 
  });
 
  // Turn ON the background-geolocation system.
  this.backgroundGeolocation.start();
 
 
  // Foreground Tracking
 
let options = {
  frequency: 10000,
  enableHighAccuracy: true
};
 
this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
 
  console.log(position);
 
  // Run update inside of Angular's zone
  this.zone.run(() => {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  });
 
});
 
}
 
  stopTracking() {
  console.log('stopTracking');
 
  this.backgroundGeolocation.stop();
  this.watch.unsubscribe();
 
  }
 
}