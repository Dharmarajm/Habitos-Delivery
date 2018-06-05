import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { Http} from '@angular/http';
import { Globals } from '../../providers/global';
import { NavigatePage } from '../navigate/navigate';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { OrderServiceProvider } from '../../providers/order-service/order-service';

@IonicPage()
@Component({
  selector: 'page-multidelivery',
  templateUrl: 'multidelivery.html',
})
export class MultideliveryPage {
  multiselect:any;
  selectedCategory:any;
  Orderarray:any;
  waypoints:any;
  navdest:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public global:Globals,private alertCtrl: AlertController,public service: OrderServiceProvider,platform: Platform) {
    let backAction =  platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
        backAction();
      },2)
 
  }

  ionViewDidLoad() {
    this.mDeliveryCheck();
  }

  apply(i){
   return String.fromCharCode(65 + i);
  }
  
  mDeliveryCheck(){
   let mealtime=localStorage.getItem("DCMealTime");
   this.http.get(this.global.baseUrl+'delivery_list?meal_time='+mealtime).map(res => res.json()).subscribe(data => {
      this.multiselect = data;
      
      for (let i = 0; i < this.multiselect.length; i++) {
      this.selectedCategory=[];
      }  
   });
   
  }

  updateCheckedOptions(id) {
    let idx = this.selectedCategory.indexOf(id);
    if (idx > -1) {
      this.selectedCategory.splice(idx, 1);
    } else {
      this.selectedCategory.push(id);
    }
  }

  reorderItems(indexes) {
    let element = this.multiselect[indexes.from];
    this.multiselect.splice(indexes.from, 1);
    this.multiselect.splice(indexes.to, 0, element);
  }

  navigate(){
    
    if(this.multiselect == undefined || this.multiselect.length == 0 ){
      let alert = this.alertCtrl.create({
          title: 'Habitos',
          subTitle: 'No Delivery available to Navigate',
          buttons: ['Ok']
        });
        alert.present();
    }
    else if(this.selectedCategory.length!=0){
      this.Orderarray=[];
      for (let i = 0; i < this.multiselect.length; i++) {
        for(let j = 0; j < this.selectedCategory.length; j++) {
         if(this.multiselect[i].tenant_id==this.selectedCategory[j]){
           this.Orderarray.push(this.multiselect[i].tenant_id);
         }
        }
      }
      let user=JSON.parse(localStorage.getItem("user"));
      let mealtime=localStorage.getItem("DCMealTime");
      let userName=user.name;
      let data={
                 meal_time: mealtime, 
                 driver_name: userName, 
                 tenant_destination: this.Orderarray
               };
      this.waypoints=[];
      this.navdest=[];              
      this.http.post(this.global.baseUrl+'delivery_order',data).map(res => res.json()).subscribe(data => {
        let getid = data.length-1;
       
        let getLatLan=data[getid].latitude+','+data[getid].longitude;
        localStorage.setItem("destinate",getLatLan);
        for(let i=0;i<data.length;i++){
           this.navdest.push(data[i].latitude+','+data[i].longitude);
        }
        localStorage.setItem("navDestiny",JSON.stringify(this.navdest));
       
        if(data.length==0){
          this.waypoints=[];
        }else if(data.length==1){
           this.waypoints=[];
        }else{
          for(let i=0;i<data.length-1;i++){
            this.waypoints.push({
                             location: data[i].latitude+','+data[i].longitude,
                             stopover: true
            })
          }
        }
        localStorage.setItem("waypoints",JSON.stringify(this.waypoints));
        
        this.navCtrl.push(NavigatePage);  
      });
    }else{
        let alert = this.alertCtrl.create({
          title: 'Habitos',
          subTitle: 'Select the delivery Order before start navigation',
          buttons: ['Ok']
        });
        alert.present();
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
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
    

  }
}
