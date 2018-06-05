import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform ,AlertController} from 'ionic-angular';
import { OrderServiceProvider } from '../../providers/order-service/order-service';
import { HomePage } from '../home/home';
import { DeliverycheckPage } from '../deliverycheck/deliverycheck';
import { MultideliveryPage } from '../multidelivery/multidelivery';
import { Http} from '@angular/http';
import { DatePipe } from '@angular/common';
import { Globals } from '../../providers/global';
 

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  
  MealTime:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service: OrderServiceProvider,public http: Http,public datepipe: DatePipe,public platform: Platform,public alertCtrl:AlertController,public global:Globals) {
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
    //console.log('ionViewDidLoad OrdersPage');
    this.order();
  }

  orderlist:any;
  latest_date:any;
  date:any;

  order() {

  let logoutuser=JSON.parse(localStorage.getItem("user"));
  let tenant_id=logoutuser.tenant.toString();
  this.latest_date = Date.now();
  //this.date =this.datepipe.transform(this.latest_date, 'yyyy-MM-dd');
  this.date =this.datepipe.transform(this.latest_date, 'dd-MM-yyyy');
  //console.log(this.date,"Date")

    this.http.get(this.global.baseUrl+'todaymenus?type='+this.date+'&tenant_id='+tenant_id).map(res => res.json()).subscribe(data => {
        this.orderlist = data.order;
    });
  }

 doRefresh(refresher) {
   this.order();
   setTimeout(() => {

      refresher.complete();
    }, 2000);
  }



  checkorder(tenant_id,mealtime,flag_id,lat,lng,del_status) {
    if(del_status == 'Delivered'){
      alert("Delivery Already Completed");
    }else if(del_status == 'Dispatched'){
      alert("This order ready for delivery");
    }
    else{
      localStorage.setItem("tenant_id",tenant_id);
      localStorage.setItem("meal_time",mealtime);
      localStorage.setItem("flag_id",flag_id);
      var destination=lat+','+lng;
      localStorage.setItem("destinate",destination);  
      this.navCtrl.push(DeliverycheckPage);
    }  
    
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
          }
        }
      ]
    });
    confirm.present();
    

  }

  //new code begins here
  deliverycheck(){
   for(let i=0;i<this.orderlist.length;i++){
     if(this.orderlist[i].delivery_status=='Dispatched'){
       this.MealTime = this.orderlist[i].meal_time;
     }
   }
   if(this.MealTime!=undefined){
     localStorage.setItem("DCMealTime",this.MealTime);
     this.navCtrl.push(MultideliveryPage);  
   }else{
     let alert = this.alertCtrl.create({
       title: 'Habitos',
       subTitle: 'No Delivery is ready to start',
       buttons: ['OK']
     });
     alert.present();
   }
  } 

}