import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform,AlertController} from 'ionic-angular';
import { OrderServiceProvider } from '../../providers/order-service/order-service';
import { Http} from '@angular/http';
import { HomePage } from '../home/home';
import { OrdersPage } from '../orders/orders';
import { DatePipe } from '@angular/common';
import { Globals } from '../../providers/global';


@IonicPage()
@Component({
  selector: 'page-deliverycheck',
  templateUrl: 'deliverycheck.html',
})
export class DeliverycheckPage {

checklist:any;
tenant_id:any;
meal_time:any;
order:any;
flag_id:any;
last_date:any;
todaydate:any;

//order={quantity:null}

  constructor(public navCtrl: NavController, public navParams: NavParams,public service: OrderServiceProvider,public http: Http,public datepipe: DatePipe,public platform: Platform,public global:Globals,public alertCtrl:AlertController) {
    this.tenant_id=localStorage.getItem("tenant_id");
    this.meal_time=localStorage.getItem("meal_time");
    this.flag_id=localStorage.getItem("flag_id");
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
    this.check();
  }

  

  onChange(newValue,oldvalue,index) {
    if(newValue >= oldvalue){
      alert("Please Enter valid Quantity")
      this.checklist[index].quantity=oldvalue
    }
  }



    check(){
      this.last_date = Date.now();
      this.todaydate =this.datepipe.transform(this.last_date, 'dd-MM-yyyy');

        this.http.get(this.global.baseUrl+'histories?date='+this.todaydate+'&tenant_id='+this.tenant_id+'&meal_time='+this.meal_time).map(res => res.json()).subscribe(data => {
            this.checklist = data.history.dispatch;

        });
    }

    Returnorder:Array<any>=[];
    is_fully_dispatched:any;

    checkorder() {
    
      this.Returnorder=[];

    for(let i=0; i < this.checklist.length; i++ ){
      
      this.Returnorder.push({"dispatch_id":this.checklist[i].dispatch_id,
                              "is_checked":this.checklist[i].is_checked,
                              "dispatch_qty":this.checklist[i].quantity})
    }


    
    this.http.put(this.global.baseUrl+'update_is_checked', { "data": this.Returnorder })
    .map(res => res.json())
      .subscribe(data => {
        
       });

      var status=true;
      for(var i=0;i < this.Returnorder.length;i++){
        if(this.Returnorder[i].is_checked == false){
          status=false
          break;
        }              
      }

      if(status != false){
       this.is_fully_dispatched=true;
      }
      else{
       this.is_fully_dispatched=false; 
      }


      this.http.put(this.global.baseUrl+'status', { "id":this.flag_id,"delivery_status":"Dispatched","is_fully_dispatched": this.is_fully_dispatched })
      .map(res => res.json())
        .subscribe(data => {
            this.navCtrl.push(OrdersPage);
      })

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
