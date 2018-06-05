import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class OrderServiceProvider {

  constructor(public http: Http) {
    console.log('Hello OrderServiceProvider Provider');
    
  }

userdata:any;

/*order1() {
        return this.http.get('http://texparts.in:81/api/v1/todaymenus?type=17-11-2017&tenant_id=2,4,3,6,5')
            .map((response: Response) => {
                let user = response.json();
                console.log(user)
               
            });
    }*/

  logout() {
        this.userdata=JSON.parse(localStorage.getItem("user"));
        return this.http.put('http://texparts.in:81/api/v1/dispatch_logout', { "id":this.userdata.id })
            .map((response: Response) => {
                console.log(response.json)
            });
    }



 




}
