import { Component,  ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform,AlertController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker/location-tracker';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { HomePage } from '../home/home';
import { Http} from '@angular/http';

import { DatePipe } from '@angular/common';
import { OrdersPage } from '../orders/orders';
import { Globals } from '../../providers/global';
declare var google;

@IonicPage()
@Component({
  selector: 'page-navigate',
  templateUrl: 'navigate.html',
})



export class NavigatePage {

  @ViewChild('map') mapElement: ElementRef;
  
  waypoints: any;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  user:any;
  destinate:any;
  tenant_id:any;
  meal_time:any;
  timeInterval:any;
  value:string;
  emergency:string;
  latest_date:any;
  date:any;
  time:any;
  StartArray:any;
  PauseArray:Array<any>=[];
  ResumeArray:Array<any>=[];
  popup:any;
  tenantdetails:any;
  deliverOrderId:any;
  DeliveredTenantID:any=[];
  tenantID:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public locationTracker:LocationTracker,public launchNavigator: LaunchNavigator,public http: Http,public datepipe: DatePipe,public platform: Platform,public global:Globals,public alertCtrl:AlertController) {
    this.destinate=localStorage.getItem("destinate");
    //this.tenant_id=localStorage.getItem("tenant_id");
    //this.meal_time=localStorage.getItem("meal_time");

    this.value='stop';
    this.emergency="Personal";   
  }

  public unregisterBackButtonAction: any;
  
  ionViewDidEnter() {
    this.initializeBackButtonCustomHandler();
  }


  ionViewWillLeave() {
    // Unregister the custom back button action for this page
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  public initializeBackButtonCustomHandler(): void {
      this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
          this.customHandleBackButton();
      }, 10);
  }

  private customHandleBackButton(): void {
    alert("Please complete Delivery")
  }

  ionViewDidLoad() {
    
    let user=JSON.parse(localStorage.getItem('user'));
    let username=user.name;
    this.http.get(this.global.baseUrl+'delivery_details?meal_time='+localStorage.getItem('DCMealTime')+'&driver_name='+username).map(res => res.json()).subscribe(data => {
        localStorage.setItem("tenantIDforRoute",data[0].tenant_id);
        localStorage.setItem("navigateDest",data[0].latitude+','+data[0].longitude);
    })
    this.locationTracker.startTracking();
    this.initMap();
    this.calculateDisplayRouteInit();
    
  }

  intervalstart(){
    this.timeInterval=setInterval(() => {
        
         this.calculateAndDisplayRoute('Start',null);
       }, 1000 * 30); 
  }
  
  intervalDestroy() {

    if (this.timeInterval) {
      clearInterval(this.timeInterval);
      
    }

  };
  
  //https://github.com/dpa99c/phonegap-launch-navigator-example
  
  navigate(){
   //var data=JSON.parse(localStorage.getItem("navDestiny")); 
   var current= this.locationTracker.lat+','+this.locationTracker.lng
      let options: LaunchNavigatorOptions = {
        start: current
      };

      this.launchNavigator.navigate(localStorage.getItem("navigateDest"), options)
        .then(
          success => alert('Launched navigator'),
          error => alert('Error launching navigator: ' + error)
      );
  }

  start1(val){
  
  this.latest_date = Date.now();
  this.date =this.datepipe.transform(this.latest_date, 'dd-MM-yyyy');

  this.time =this.datepipe.transform(this.latest_date, 'hh:mm:ss');
 
    if(val == 'start'){
      
      this.StartArray=this.time;
      this.value=val;
      this.calculateAndDisplayRoute('Start',null);
      this.intervalstart();
    }
    else if(val == 'pause'){
      

      this.PauseArray.push(this.time)
      this.intervalDestroy();
      this.value='resume';
    } 
    else if(val == 'resume'){
      
     

      this.ResumeArray.push(this.time)
      this.calculateAndDisplayRoute('resume',null)
      this.value='start';
      this.intervalstart();
    }
    
  }
 

  stop1(){ 
    
  this.latest_date = Date.now();
  this.time =this.datepipe.transform(this.latest_date, 'hh:mm:ss');

  this.value='stop';
  this.intervalDestroy();
  this.locationTracker.stopTracking();
   var current= this.locationTracker.lat+','+this.locationTracker.lng
   //var current='11.004556, 76.961632';
   var data=JSON.parse(localStorage.getItem("waypoints"));

    this.directionsService.route({
      origin: current,
      destination: localStorage.getItem("navigateDest"),
      //waypoints: data,
      //optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        
        this.directionsDisplay.setDirections(response);
        
        //console.log(response.routes[0].legs[0].distance.text)
        //console.log(response.routes[0].legs[0].duration.text)
        
        var distance=response.routes[0].legs[0].distance.text;
        
        var duration=response.routes[0].legs[0].duration.text
        

        this.http.post(this.global.baseUrl+'delivery_updates',
         { "tenant_id":this.tenant_id,
           "meal_time":this.meal_time,
           "delivery_time":duration,
           "time":new Date(),
           "distance":distance,
           "delivery_status":'Delivered'})
        .map(res => res.json())
          .subscribe(data => {
              this.user=JSON.parse(localStorage.getItem("user"));
              
              this.http.post(this.global.baseUrl+'delivery_histories',
               {
                 "date":this.date,
                 "tenant_id":this.tenant_id,
                 "meal_time":this.meal_time,
                 "pause_time":this.PauseArray,
                 "resume_time":this.ResumeArray,
                 "start_time":this.StartArray,
                 "stop_time":this.time,
                 "created_by":this.user.name,
                 "menu_customer_id":localStorage.getItem("flag_id")
                 })
              .map(res => res.json())
                .subscribe(data => {
                  

                  this.http.put(this.global.baseUrl+'status',
                   {
                     "id":localStorage.getItem("flag_id"),
                     "delivery_status":"Delivered"
                  })
                  .map(res => res.json())
                    .subscribe(data => {
                      this.PauseArray=[];
                      this.ResumeArray=[];
                      let user=JSON.parse(localStorage.getItem('user'));
                      let username=user.name;
                      this.DeliveredTenantID.push(this.tenant_id)
                      localStorage.setItem("DeliveredTenantID",this.DeliveredTenantID);
                      
                      localStorage.setItem("deliverID",this.deliverOrderId);
                      if(localStorage.getItem('deliverID')!=undefined){
                        
                        this.http.get(this.global.baseUrl+'delivery_details?meal_time='+localStorage.getItem('DCMealTime')+'&driver_name='+username+'&delivery_order_id='+localStorage.getItem("deliverID")+'&tenant_id='+this.DeliveredTenantID).map(res => res.json()).subscribe(data => {
                        localStorage.setItem("tenantIDforRoute",data[0].tenant_id);
                        localStorage.setItem("navigateDest",data[0].latitude+','+data[0].longitude);
                        })
                      
                      }
                      
                      
                      console.log(this.popup.length)
                      if(this.popup.length==1){
                       this.value='stop';
                       localStorage.removeItem("deliverID");
                       this.intervalDestroy();
                       this.locationTracker.stopTracking();
                       this.navCtrl.push(OrdersPage);  
                      }else{
                        //let latest_date = Date.now();
                        //let time =this.datepipe.transform(latest_date, 'hh:mm:ss');
                        //this.StartArray=time;
                        
                        this.start1('start');
                        
                        this.locationTracker.startTracking();
                        //this.calculateAndDisplayRoute('Start',null);
                      }
                      
                    })


                })


        });

      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });

  }

  emergencyPause(){
    this.calculateAndDisplayRoute('Paused',this.emergency)
  }


  logout(){
   
      let confirm = this.alertCtrl.create({
      title: 'LOGOUT?',
      message: 'Do you want to Logout?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
        let logoutuser=JSON.parse(localStorage.getItem("user"));

    this.http.put(this.global.baseUrl+'dispatch_logout', { "id":logoutuser.id })
    .map(res => res.json())
      .subscribe(data => {
        localStorage.clear();
        this.navCtrl.push(HomePage);
     
    });
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
    

  }



  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 11.01, lng: 76.95}
    });

    this.directionsDisplay.setMap(this.map);
  }


calculateAndDisplayRoute(deliveryStatus,reason) {
   
    var current= this.locationTracker.lat+','+this.locationTracker.lng;   
    //var current='11.004556, 76.961632';
    var data=JSON.parse(localStorage.getItem("waypoints"));
   
    this.directionsService.route({
    origin: current,
    destination: localStorage.getItem("navigateDest"),
    /*waypoints: data,
    optimizeWaypoints: true,*/
    travelMode: 'DRIVING'
    },(response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        
        //console.log(response.routes[0].legs[0].distance.text)
        //console.log(response.routes[0].legs[0].duration.text)

        var distance=response.routes[0].legs[0].distance.text;
        var duration=response.routes[0].legs[0].duration.text

        this.http.post(this.global.baseUrl+'delivery_updates',
         { "tenant_id":localStorage.getItem("tenantIDforRoute"),
           "meal_time":localStorage.getItem("DCMealTime"),
           "delivery_time":duration,
           "time":Date.now(),
           "distance":distance,
           "delivery_status":deliveryStatus,
           "remark":reason})
        .map(res => res.json())
          .subscribe(data => {
          });
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  calculateDisplayRouteInit() {
    
    var current= this.locationTracker.lat+','+this.locationTracker.lng;   
    //var current='11.004556, 76.961632';

    var data=JSON.parse(localStorage.getItem("waypoints"));

    this.directionsService.route({
    origin: current,
    destination: this.destinate,
    waypoints: data,
    optimizeWaypoints: true,
    travelMode: 'DRIVING'
    },(response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  checkPopup(){
     this.popup=[];
     let user=JSON.parse(localStorage.getItem('user'));
     let username=user.name;
 
     if(localStorage.getItem('deliverID')!=undefined){

      if((localStorage.getItem("DeliveredTenantID"))!=undefined){
         this.tenantID= localStorage.getItem("DeliveredTenantID"); 
      }else{
        this.tenantID=this.tenant_id;
      }
      this.http.get(this.global.baseUrl+'delivery_details?meal_time='+localStorage.getItem('DCMealTime')+'&driver_name='+username+'&delivery_order_id='+localStorage.getItem("deliverID")+'&tenant_id='+this.tenantID).map(res => res.json()).subscribe(data => {
      
      for(let i=0;i<data.length;i++){
         this.popup.push({
                           "tenant_name": (data[i].tenant_name).toString(),
                           "tenant_id": (data[i].tenant_id).toString()
                         })  
      }
      this.deliverOrderId=data[0].delivery_order_id;
      const alert = this.alertCtrl.create();
    
     alert.setTitle('Place of Delivery');

   this.popup.forEach(l => {
            alert.addInput({
                type: 'radio',
                label: l.tenant_name,
                value: l.tenant_id
            });
        });

        alert.addButton({
            text: 'Cancel',
            role: 'cancel',
        });

        alert.addButton({
            text: 'OK',
            handler: id => {
                //this point you should have the proper "number" value
                
                if(id!=undefined){
                
                this.latest_date = Date.now();

                this.date =this.datepipe.transform(this.latest_date, 'dd-MM-yyyy');
                
                let tenant_id=id;

                this.http.get(this.global.baseUrl+'todaymenus?type='+this.date+'&tenant_id='+tenant_id).map(res => res.json()).subscribe(data => {
                    this.tenantdetails = data.order;
                    
                    for (let i = 0; i < this.tenantdetails.length; i++) {
                       if(this.tenantdetails[i].meal_time==localStorage.getItem('DCMealTime') && this.tenantdetails[i].delivery_status == 'Dispatched'){
                         this.meal_time=this.tenantdetails[i].meal_time;
                         localStorage.setItem("flag_id",this.tenantdetails[i].flag_id);
                       }
                    }
                    this.tenant_id=data.order[0].tenant.id;
                    
                    this.stop1();
                });
               } 
            }
        });

        alert.present();
      
    });    
     }else{
      this.http.get(this.global.baseUrl+'delivery_details?meal_time='+localStorage.getItem('DCMealTime')+'&driver_name='+username).map(res => res.json()).subscribe(data => {
      
      for(let i=0;i<data.length;i++){
         this.popup.push({
                           "tenant_name": (data[i].tenant_name).toString(),
                           "tenant_id": (data[i].tenant_id).toString()
                         })  
      }
      this.deliverOrderId=data[0].delivery_order_id;
      const alert = this.alertCtrl.create();

      alert.setTitle('Place of Delivery');

      this.popup.forEach(l => {
            alert.addInput({
                type: 'radio',
                label: l.tenant_name,
                value: l.tenant_id
            });
        });

        alert.addButton({
            text: 'Cancel',
            role: 'cancel',
        });

        alert.addButton({
            text: 'OK',
            handler: id => {
                //this point you should have the proper "number" value
                
                if(id!=undefined){
                this.latest_date = Date.now();

                this.date =this.datepipe.transform(this.latest_date, 'dd-MM-yyyy');
                
                let tenant_id=id;

                this.http.get(this.global.baseUrl+'todaymenus?type='+this.date+'&tenant_id='+tenant_id).map(res => res.json()).subscribe(data => {
                    this.tenantdetails = data.order;
                   
                    for (let i = 0; i < this.tenantdetails.length; i++) {
                      if(this.tenantdetails[i].meal_time==localStorage.getItem('DCMealTime') && this.tenantdetails[i].delivery_status == 'Dispatched'){
                        this.meal_time=this.tenantdetails[i].meal_time;
                        localStorage.setItem("flag_id",this.tenantdetails[i].flag_id);
                      }
                    }  
                    this.tenant_id=data.order[0].tenant.id;
                    
                    this.stop1();
                });
              }  
            }
        });

        alert.present();
      
    });    
     }
    
  }

}
