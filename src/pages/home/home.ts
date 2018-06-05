import { Component } from '@angular/core';
import { NavController, AlertController,Platform} from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { OrdersPage } from '../orders/orders';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Http} from '@angular/http';
import { Globals } from '../../providers/global';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public service:LoginProvider,public locationAccuracy:LocationAccuracy,platform: Platform,public http: Http,public alertCtrl:AlertController,public global:Globals) {
   platform.registerBackButtonAction(() => {
             let confirm = this.alertCtrl.create({
      title: 'Exit IDLIDABBA?',
      message: 'Do you want to exit?',
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
          platform.exitApp();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
          
        });

  }



  ionViewDidLoad() {

     this.locationAccuracy.canRequest().then((canRequest: boolean) => {

      if(canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => console.log('Request successful'),
          error => console.log('Error requesting location permissions', error)
        );
      }

    });
  }

  model: any = {username:'',password:''};
  user:any;
  login() {
       
        this.service.login(this.model.username, this.model.password)
            .subscribe(
                res => {
                
                this.user=JSON.parse(localStorage.getItem("user"));

                if(this.user.hh == 'Invalid'){
                 alert("Invalid Credentials");
                 this.model.password='';
                }else if(this.user.role_id == 11){
                  localStorage.setItem("role",this.user.role_id);
                  this.navCtrl.push(OrdersPage);
                }else if(this.user == false ){
                alert("Logged in another device")
                }else if(this.user.role_id == 5 || this.user.role_id == 6){
                  this.http.put(this.global.baseUrl+'dispatch_logout', { "id":this.user.id })
                  .map(res => res.json())
                    .subscribe(data => {
                      alert("Username & Password is not assigned for delivery login");
                      localStorage.clear();
                  })
                }
                  
                },
                error => {
                    console.log(error);
                });
    }


    public logout(){

          let confirm = this.alertCtrl.create({
      title: 'LOGOUT?',
      message: 'Do you want to Logout?',
      buttons: [
        {
          text: 'Cancle',
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
        //this.navCtrl.popToRoot ();
        //this.navCtrl.setRoot (LoginPage);
    });
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
          
    }
}
