import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Globals } from '../../providers/global';
import 'rxjs/add/operator/map'


@Injectable()
export class LoginProvider {

  constructor(public http: Http,public global:Globals) {
    //console.log('Hello LoginProvider Provider');
  }

   login(username: string, password: string) {
   console.log(username,password)
        return this.http.post(this.global.baseUrl+'kitchen_users/dispatch_login', { "user_name" : username, "password_digest" : password })
           .map((response: Response) => {
                let user = response.json();
               // console.log(user)
                localStorage.setItem("user",JSON.stringify(user));
               // console.log(user)
                 });
               
            
    }


     /*logout() {
        let logoutuser=JSON.parse(localStorage.getItem("user"));
        return this.http.post('http://api.texparts.in:81/api/v1/dispatch_logout', { "id":logoutuser.id })
            .map((response: Response) => {
               // console.log(response.json)
            });
    }*/

}
