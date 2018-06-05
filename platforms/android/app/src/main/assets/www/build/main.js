webpackJsonp([1],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/deliverycheck/deliverycheck.module": [
		158
	],
	"../pages/mappage/mappage.module": [
		290,
		0
	],
	"../pages/multidelivery/multidelivery.module": [
		168
	],
	"../pages/navigate/navigate.module": [
		169
	],
	"../pages/orders/orders.module": [
		170
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverycheckPageModule", function() { return DeliverycheckPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deliverycheck__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeliverycheckPageModule = /** @class */ (function () {
    function DeliverycheckPageModule() {
    }
    DeliverycheckPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__deliverycheck__["a" /* DeliverycheckPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__deliverycheck__["a" /* DeliverycheckPage */]),
            ],
        })
    ], DeliverycheckPageModule);
    return DeliverycheckPageModule;
}());

//# sourceMappingURL=deliverycheck.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliverycheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_service_order_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orders_orders__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeliverycheckPage = /** @class */ (function () {
    //order={quantity:null}
    function DeliverycheckPage(navCtrl, navParams, service, http, datepipe, platform, global, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.http = http;
        this.datepipe = datepipe;
        this.platform = platform;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.Returnorder = [];
        this.tenant_id = localStorage.getItem("tenant_id");
        this.meal_time = localStorage.getItem("meal_time");
        this.flag_id = localStorage.getItem("flag_id");
    }
    DeliverycheckPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    DeliverycheckPage.prototype.ionViewWillLeave = function () {
        // Unregister the custom back button action for this page
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    DeliverycheckPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    DeliverycheckPage.prototype.customHandleBackButton = function () {
        alert("Please complete Delivery");
    };
    DeliverycheckPage.prototype.ionViewDidLoad = function () {
        this.check();
    };
    DeliverycheckPage.prototype.onChange = function (newValue, oldvalue, index) {
        if (newValue >= oldvalue) {
            alert("Please Enter valid Quantity");
            this.checklist[index].quantity = oldvalue;
        }
    };
    DeliverycheckPage.prototype.check = function () {
        var _this = this;
        this.last_date = Date.now();
        this.todaydate = this.datepipe.transform(this.last_date, 'dd-MM-yyyy');
        this.http.get(this.global.baseUrl + 'histories?date=' + this.todaydate + '&tenant_id=' + this.tenant_id + '&meal_time=' + this.meal_time).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.checklist = data.history.dispatch;
        });
    };
    DeliverycheckPage.prototype.checkorder = function () {
        var _this = this;
        this.Returnorder = [];
        for (var i_1 = 0; i_1 < this.checklist.length; i_1++) {
            this.Returnorder.push({ "dispatch_id": this.checklist[i_1].dispatch_id,
                "is_checked": this.checklist[i_1].is_checked,
                "dispatch_qty": this.checklist[i_1].quantity });
        }
        this.http.put(this.global.baseUrl + 'update_is_checked', { "data": this.Returnorder })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
        var status = true;
        for (var i = 0; i < this.Returnorder.length; i++) {
            if (this.Returnorder[i].is_checked == false) {
                status = false;
                break;
            }
        }
        if (status != false) {
            this.is_fully_dispatched = true;
        }
        else {
            this.is_fully_dispatched = false;
        }
        this.http.put(this.global.baseUrl + 'status', { "id": this.flag_id, "delivery_status": "Dispatched", "is_fully_dispatched": this.is_fully_dispatched })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__orders_orders__["a" /* OrdersPage */]);
        });
    };
    DeliverycheckPage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'LOGOUT?',
            message: 'Do you want to Logout?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        var logoutuser = JSON.parse(localStorage.getItem("user"));
                        _this.http.put(_this.global.baseUrl + 'dispatch_logout', { "id": logoutuser.id })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            localStorage.clear();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        });
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    DeliverycheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deliverycheck',template:/*ion-inline-start:"/home/it/VIGNESH/demo/src/pages/deliverycheck/deliverycheck.html"*/'<!--\n  Generated template for the DeliverycheckPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="primary">\n    \n    <ion-title>CHECK UTENSILS</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content  class="bg-color">\n\n\n<ion-card *ngFor="let order of checklist;let i = index">\n \n    <ion-item>\n      <ion-label>{{order.utensil_name[0]}}</ion-label>\n      <ion-toggle value="foo" [(ngModel)]="order.is_checked" checked="order.is_checked"></ion-toggle>\n    </ion-item>\n\n    <ion-card-content>\n        <ion-row>\n          <ion-label>{{order.normal_menu}}</ion-label>\n          <ion-label>{{order.cate_name[0]}}</ion-label>\n        </ion-row>\n        <ion-row>\n\n    		<ion-col col-6>{{order.actual_qty}}</ion-col>\n    		<ion-col col-6 [hidden]="order.is_checked == false">\n          <input type="number" [(ngModel)]="order.quantity" [value]="order.quantity" [max]="order.dummy_qty" style="width:100%"  [required]="order.quantity" (ngModelChange)="onChange($event,order.dummy_qty,i)" required>\n        </ion-col>\n   		</ion-row>\n   	\n\n  </ion-card-content>\n</ion-card>\n\n<ion-card style="background-color: transparent;">\n<button ion-button color="dark"   round icon-start block (click)="checkorder()">\n       <ion-icon name="checkmark"></ion-icon>\n      Accept\n</button>\n</ion-card>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/it/VIGNESH/demo/src/pages/deliverycheck/deliverycheck.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_order_service_order_service__["a" /* OrderServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__providers_global__["a" /* Globals */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DeliverycheckPage);
    return DeliverycheckPage;
}());

//# sourceMappingURL=deliverycheck.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginProvider = /** @class */ (function () {
    function LoginProvider(http, global) {
        this.http = http;
        this.global = global;
        //console.log('Hello LoginProvider Provider');
    }
    LoginProvider.prototype.login = function (username, password) {
        console.log(username, password);
        return this.http.post(this.global.baseUrl + 'kitchen_users/dispatch_login', { "user_name": username, "password_digest": password })
            .map(function (response) {
            var user = response.json();
            // console.log(user)
            localStorage.setItem("user", JSON.stringify(user));
            // console.log(user)
        });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* Globals */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultideliveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigate_navigate__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_order_service_order_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MultideliveryPage = /** @class */ (function () {
    function MultideliveryPage(navCtrl, navParams, http, global, alertCtrl, service, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.service = service;
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    MultideliveryPage.prototype.ionViewDidLoad = function () {
        this.mDeliveryCheck();
    };
    MultideliveryPage.prototype.apply = function (i) {
        return String.fromCharCode(65 + i);
    };
    MultideliveryPage.prototype.mDeliveryCheck = function () {
        var _this = this;
        var mealtime = localStorage.getItem("DCMealTime");
        this.http.get(this.global.baseUrl + 'delivery_list?meal_time=' + mealtime).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.multiselect = data;
            for (var i = 0; i < _this.multiselect.length; i++) {
                _this.selectedCategory = [];
            }
        });
    };
    MultideliveryPage.prototype.updateCheckedOptions = function (id) {
        var idx = this.selectedCategory.indexOf(id);
        if (idx > -1) {
            this.selectedCategory.splice(idx, 1);
        }
        else {
            this.selectedCategory.push(id);
        }
    };
    MultideliveryPage.prototype.reorderItems = function (indexes) {
        var element = this.multiselect[indexes.from];
        this.multiselect.splice(indexes.from, 1);
        this.multiselect.splice(indexes.to, 0, element);
    };
    MultideliveryPage.prototype.navigate = function () {
        var _this = this;
        if (this.multiselect == undefined || this.multiselect.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Habitos',
                subTitle: 'No Delivery available to Navigate',
                buttons: ['Ok']
            });
            alert_1.present();
        }
        else if (this.selectedCategory.length != 0) {
            this.Orderarray = [];
            for (var i = 0; i < this.multiselect.length; i++) {
                for (var j = 0; j < this.selectedCategory.length; j++) {
                    if (this.multiselect[i].tenant_id == this.selectedCategory[j]) {
                        this.Orderarray.push(this.multiselect[i].tenant_id);
                    }
                }
            }
            var user = JSON.parse(localStorage.getItem("user"));
            var mealtime = localStorage.getItem("DCMealTime");
            var userName = user.name;
            var data = {
                meal_time: mealtime,
                driver_name: userName,
                tenant_destination: this.Orderarray
            };
            this.waypoints = [];
            this.navdest = [];
            this.http.post(this.global.baseUrl + 'delivery_order', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                var getid = data.length - 1;
                var getLatLan = data[getid].latitude + ',' + data[getid].longitude;
                localStorage.setItem("destinate", getLatLan);
                for (var i = 0; i < data.length; i++) {
                    _this.navdest.push(data[i].latitude + ',' + data[i].longitude);
                }
                localStorage.setItem("navDestiny", JSON.stringify(_this.navdest));
                if (data.length == 0) {
                    _this.waypoints = [];
                }
                else if (data.length == 1) {
                    _this.waypoints = [];
                }
                else {
                    for (var i = 0; i < data.length - 1; i++) {
                        _this.waypoints.push({
                            location: data[i].latitude + ',' + data[i].longitude,
                            stopover: true
                        });
                    }
                }
                localStorage.setItem("waypoints", JSON.stringify(_this.waypoints));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__navigate_navigate__["a" /* NavigatePage */]);
            });
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Habitos',
                subTitle: 'Select the delivery Order before start navigation',
                buttons: ['Ok']
            });
            alert_2.present();
        }
    };
    MultideliveryPage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'LOGOUT?',
            message: 'Do you want to Logout?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        var logoutuser = JSON.parse(localStorage.getItem("user"));
                        _this.http.put(_this.global.baseUrl + 'dispatch_logout', { "id": logoutuser.id })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            localStorage.clear();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                        });
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    MultideliveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-multidelivery',template:/*ion-inline-start:"/home/it/VIGNESH/demo/src/pages/multidelivery/multidelivery.html"*/'<!--\n  Generated template for the MultideliveryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Multi Delivery Order</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list reorder="true" (ionItemReorder)="reorderItems($event)"> \n   <ion-item *ngFor="let Multi of multiselect; let i = index" [attr.data-index]="i">\n    <ion-label><span class="label1">{{Multi.tenant_name}}</span><span class="label2" style="float:right;color:white;border-radius:50%;background:darkgreen;width:17px;text-align:center;">{{apply(i)}}</span></ion-label>\n    <ion-checkbox color="violet" [checked]="selectedCategory.indexOf(Multi.tenant_id) >= 0" (click)="updateCheckedOptions(Multi.tenant_id,$event)"></ion-checkbox>\n   </ion-item>\n  </ion-list> \n  <ion-list *ngIf="multiselect == undefined || multiselect?.length==0">\n    <ion-item> \n       <ion-label>No Delivery Available</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer (click)="navigate()">\n  <ion-toolbar color="primary">\n    <ion-title class="btn-align">Start Navigate</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/it/VIGNESH/demo/src/pages/multidelivery/multidelivery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* Globals */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_order_service_order_service__["a" /* OrderServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], MultideliveryPage);
    return MultideliveryPage;
}());

//# sourceMappingURL=multidelivery.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_location_tracker_location_tracker__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__orders_orders__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NavigatePage = /** @class */ (function () {
    function NavigatePage(navCtrl, navParams, locationTracker, launchNavigator, http, datepipe, platform, global, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.locationTracker = locationTracker;
        this.launchNavigator = launchNavigator;
        this.http = http;
        this.datepipe = datepipe;
        this.platform = platform;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.start = 'chicago, il';
        this.end = 'chicago, il';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.PauseArray = [];
        this.ResumeArray = [];
        this.DeliveredTenantID = [];
        this.destinate = localStorage.getItem("destinate");
        //this.tenant_id=localStorage.getItem("tenant_id");
        //this.meal_time=localStorage.getItem("meal_time");
        this.value = 'stop';
        this.emergency = "Personal";
    }
    NavigatePage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    NavigatePage.prototype.ionViewWillLeave = function () {
        // Unregister the custom back button action for this page
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    NavigatePage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    NavigatePage.prototype.customHandleBackButton = function () {
        alert("Please complete Delivery");
    };
    NavigatePage.prototype.ionViewDidLoad = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        var username = user.name;
        this.http.get(this.global.baseUrl + 'delivery_details?meal_time=' + localStorage.getItem('DCMealTime') + '&driver_name=' + username).map(function (res) { return res.json(); }).subscribe(function (data) {
            localStorage.setItem("tenantIDforRoute", data[0].tenant_id);
            localStorage.setItem("navigateDest", data[0].latitude + ',' + data[0].longitude);
        });
        this.locationTracker.startTracking();
        this.initMap();
        this.calculateDisplayRouteInit();
    };
    NavigatePage.prototype.intervalstart = function () {
        var _this = this;
        this.timeInterval = setInterval(function () {
            _this.calculateAndDisplayRoute('Start', null);
        }, 1000 * 30);
    };
    NavigatePage.prototype.intervalDestroy = function () {
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
        }
    };
    ;
    //https://github.com/dpa99c/phonegap-launch-navigator-example
    NavigatePage.prototype.navigate = function () {
        //var data=JSON.parse(localStorage.getItem("navDestiny")); 
        var current = this.locationTracker.lat + ',' + this.locationTracker.lng;
        var options = {
            start: current
        };
        this.launchNavigator.navigate(localStorage.getItem("navigateDest"), options)
            .then(function (success) { return alert('Launched navigator'); }, function (error) { return alert('Error launching navigator: ' + error); });
    };
    NavigatePage.prototype.start1 = function (val) {
        this.latest_date = Date.now();
        this.date = this.datepipe.transform(this.latest_date, 'dd-MM-yyyy');
        this.time = this.datepipe.transform(this.latest_date, 'hh:mm:ss');
        if (val == 'start') {
            this.StartArray = this.time;
            this.value = val;
            this.calculateAndDisplayRoute('Start', null);
            this.intervalstart();
        }
        else if (val == 'pause') {
            this.PauseArray.push(this.time);
            this.intervalDestroy();
            this.value = 'resume';
        }
        else if (val == 'resume') {
            this.ResumeArray.push(this.time);
            this.calculateAndDisplayRoute('resume', null);
            this.value = 'start';
            this.intervalstart();
        }
    };
    NavigatePage.prototype.stop1 = function () {
        var _this = this;
        this.latest_date = Date.now();
        this.time = this.datepipe.transform(this.latest_date, 'hh:mm:ss');
        this.value = 'stop';
        this.intervalDestroy();
        this.locationTracker.stopTracking();
        var current = this.locationTracker.lat + ',' + this.locationTracker.lng;
        //var current='11.004556, 76.961632';
        var data = JSON.parse(localStorage.getItem("waypoints"));
        this.directionsService.route({
            origin: current,
            destination: localStorage.getItem("navigateDest"),
            //waypoints: data,
            //optimizeWaypoints: true,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
                //console.log(response.routes[0].legs[0].distance.text)
                //console.log(response.routes[0].legs[0].duration.text)
                var distance = response.routes[0].legs[0].distance.text;
                var duration = response.routes[0].legs[0].duration.text;
                _this.http.post(_this.global.baseUrl + 'delivery_updates', { "tenant_id": _this.tenant_id,
                    "meal_time": _this.meal_time,
                    "delivery_time": duration,
                    "time": new Date(),
                    "distance": distance,
                    "delivery_status": 'Delivered' })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.user = JSON.parse(localStorage.getItem("user"));
                    _this.http.post(_this.global.baseUrl + 'delivery_histories', {
                        "date": _this.date,
                        "tenant_id": _this.tenant_id,
                        "meal_time": _this.meal_time,
                        "pause_time": _this.PauseArray,
                        "resume_time": _this.ResumeArray,
                        "start_time": _this.StartArray,
                        "stop_time": _this.time,
                        "created_by": _this.user.name,
                        "menu_customer_id": localStorage.getItem("flag_id")
                    })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.http.put(_this.global.baseUrl + 'status', {
                            "id": localStorage.getItem("flag_id"),
                            "delivery_status": "Delivered"
                        })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            _this.PauseArray = [];
                            _this.ResumeArray = [];
                            var user = JSON.parse(localStorage.getItem('user'));
                            var username = user.name;
                            _this.DeliveredTenantID.push(_this.tenant_id);
                            localStorage.setItem("DeliveredTenantID", _this.DeliveredTenantID);
                            localStorage.setItem("deliverID", _this.deliverOrderId);
                            if (localStorage.getItem('deliverID') != undefined) {
                                _this.http.get(_this.global.baseUrl + 'delivery_details?meal_time=' + localStorage.getItem('DCMealTime') + '&driver_name=' + username + '&delivery_order_id=' + localStorage.getItem("deliverID") + '&tenant_id=' + _this.DeliveredTenantID).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    localStorage.setItem("tenantIDforRoute", data[0].tenant_id);
                                    localStorage.setItem("navigateDest", data[0].latitude + ',' + data[0].longitude);
                                });
                            }
                            console.log(_this.popup.length);
                            if (_this.popup.length == 1) {
                                _this.value = 'stop';
                                localStorage.removeItem("deliverID");
                                _this.intervalDestroy();
                                _this.locationTracker.stopTracking();
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__orders_orders__["a" /* OrdersPage */]);
                            }
                            else {
                                //let latest_date = Date.now();
                                //let time =this.datepipe.transform(latest_date, 'hh:mm:ss');
                                //this.StartArray=time;
                                _this.start1('start');
                                _this.locationTracker.startTracking();
                                //this.calculateAndDisplayRoute('Start',null);
                            }
                        });
                    });
                });
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    NavigatePage.prototype.emergencyPause = function () {
        this.calculateAndDisplayRoute('Paused', this.emergency);
    };
    NavigatePage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'LOGOUT?',
            message: 'Do you want to Logout?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        var logoutuser = JSON.parse(localStorage.getItem("user"));
                        _this.http.put(_this.global.baseUrl + 'dispatch_logout', { "id": logoutuser.id })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            localStorage.clear();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        });
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    NavigatePage.prototype.initMap = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 7,
            center: { lat: 11.01, lng: 76.95 }
        });
        this.directionsDisplay.setMap(this.map);
    };
    NavigatePage.prototype.calculateAndDisplayRoute = function (deliveryStatus, reason) {
        var _this = this;
        var current = this.locationTracker.lat + ',' + this.locationTracker.lng;
        //var current='11.004556, 76.961632';
        var data = JSON.parse(localStorage.getItem("waypoints"));
        this.directionsService.route({
            origin: current,
            destination: localStorage.getItem("navigateDest"),
            /*waypoints: data,
            optimizeWaypoints: true,*/
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
                //console.log(response.routes[0].legs[0].distance.text)
                //console.log(response.routes[0].legs[0].duration.text)
                var distance = response.routes[0].legs[0].distance.text;
                var duration = response.routes[0].legs[0].duration.text;
                _this.http.post(_this.global.baseUrl + 'delivery_updates', { "tenant_id": localStorage.getItem("tenantIDforRoute"),
                    "meal_time": localStorage.getItem("DCMealTime"),
                    "delivery_time": duration,
                    "time": Date.now(),
                    "distance": distance,
                    "delivery_status": deliveryStatus,
                    "remark": reason })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                });
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    NavigatePage.prototype.calculateDisplayRouteInit = function () {
        var _this = this;
        var current = this.locationTracker.lat + ',' + this.locationTracker.lng;
        //var current='11.004556, 76.961632';
        var data = JSON.parse(localStorage.getItem("waypoints"));
        this.directionsService.route({
            origin: current,
            destination: this.destinate,
            waypoints: data,
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    NavigatePage.prototype.checkPopup = function () {
        var _this = this;
        this.popup = [];
        var user = JSON.parse(localStorage.getItem('user'));
        var username = user.name;
        if (localStorage.getItem('deliverID') != undefined) {
            if ((localStorage.getItem("DeliveredTenantID")) != undefined) {
                this.tenantID = localStorage.getItem("DeliveredTenantID");
            }
            else {
                this.tenantID = this.tenant_id;
            }
            this.http.get(this.global.baseUrl + 'delivery_details?meal_time=' + localStorage.getItem('DCMealTime') + '&driver_name=' + username + '&delivery_order_id=' + localStorage.getItem("deliverID") + '&tenant_id=' + this.tenantID).map(function (res) { return res.json(); }).subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.popup.push({
                        "tenant_name": (data[i].tenant_name).toString(),
                        "tenant_id": (data[i].tenant_id).toString()
                    });
                }
                _this.deliverOrderId = data[0].delivery_order_id;
                var alert = _this.alertCtrl.create();
                alert.setTitle('Place of Delivery');
                _this.popup.forEach(function (l) {
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
                    handler: function (id) {
                        //this point you should have the proper "number" value
                        if (id != undefined) {
                            _this.latest_date = Date.now();
                            _this.date = _this.datepipe.transform(_this.latest_date, 'dd-MM-yyyy');
                            var tenant_id = id;
                            _this.http.get(_this.global.baseUrl + 'todaymenus?type=' + _this.date + '&tenant_id=' + tenant_id).map(function (res) { return res.json(); }).subscribe(function (data) {
                                _this.tenantdetails = data.order;
                                for (var i = 0; i < _this.tenantdetails.length; i++) {
                                    if (_this.tenantdetails[i].meal_time == localStorage.getItem('DCMealTime') && _this.tenantdetails[i].delivery_status == 'Dispatched') {
                                        _this.meal_time = _this.tenantdetails[i].meal_time;
                                        localStorage.setItem("flag_id", _this.tenantdetails[i].flag_id);
                                    }
                                }
                                _this.tenant_id = data.order[0].tenant.id;
                                _this.stop1();
                            });
                        }
                    }
                });
                alert.present();
            });
        }
        else {
            this.http.get(this.global.baseUrl + 'delivery_details?meal_time=' + localStorage.getItem('DCMealTime') + '&driver_name=' + username).map(function (res) { return res.json(); }).subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.popup.push({
                        "tenant_name": (data[i].tenant_name).toString(),
                        "tenant_id": (data[i].tenant_id).toString()
                    });
                }
                _this.deliverOrderId = data[0].delivery_order_id;
                var alert = _this.alertCtrl.create();
                alert.setTitle('Place of Delivery');
                _this.popup.forEach(function (l) {
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
                    handler: function (id) {
                        //this point you should have the proper "number" value
                        if (id != undefined) {
                            _this.latest_date = Date.now();
                            _this.date = _this.datepipe.transform(_this.latest_date, 'dd-MM-yyyy');
                            var tenant_id = id;
                            _this.http.get(_this.global.baseUrl + 'todaymenus?type=' + _this.date + '&tenant_id=' + tenant_id).map(function (res) { return res.json(); }).subscribe(function (data) {
                                _this.tenantdetails = data.order;
                                for (var i = 0; i < _this.tenantdetails.length; i++) {
                                    if (_this.tenantdetails[i].meal_time == localStorage.getItem('DCMealTime') && _this.tenantdetails[i].delivery_status == 'Dispatched') {
                                        _this.meal_time = _this.tenantdetails[i].meal_time;
                                        localStorage.setItem("flag_id", _this.tenantdetails[i].flag_id);
                                    }
                                }
                                _this.tenant_id = data.order[0].tenant.id;
                                _this.stop1();
                            });
                        }
                    }
                });
                alert.present();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], NavigatePage.prototype, "mapElement", void 0);
    NavigatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-navigate',template:/*ion-inline-start:"/home/it/VIGNESH/demo/src/pages/navigate/navigate.html"*/'<!--\n  Generated template for the NavigatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="primary">\n    \n    <ion-title>NAVIGATE</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="bg-color">\n \n\n\n <!-- <div id="floating-panel">\n    <b>Start: </b>\n    <select [(ngModel)]="start" id="start" (change)="calculateAndDisplayRoute()">\n      <option value="chicago, il">Chicago</option>\n      <option value="st louis, mo">St Louis</option>\n      <option value="joplin, mo">Joplin, MO</option>\n      <option value="coimbatore">Altius Tech</option>\n      <option value="amarillo, tx">Amarillo</option>\n      <option value="gallup, nm">Gallup, NM</option>\n      <option value="flagstaff, az">Flagstaff, AZ</option>\n      <option value="winona, az">Winona</option>\n      <option value="kingman, az">Kingman</option>\n      <option value="barstow, ca">Barstow</option>\n      <option value="san bernardino, ca">San Bernardino</option>\n      <option value="los angeles, ca">Los Angeles</option>\n    </select><br>\n    <b>End: </b>\n    <select [(ngModel)]="end" id="end" (change)="calculateAndDisplayRoute()">\n      <option value="chicago, il">Chicago</option>\n      <option value="st louis, mo">St Louis</option>\n      <option value="joplin, mo">Joplin, MO</option>\n      <option value="oklahoma city, ok">Oklahoma City</option>\n      <option value="amarillo, tx">Amarillo</option>\n      <option value="gallup, nm">Gallup, NM</option>\n      <option value="flagstaff, az">Flagstaff, AZ</option>\n      <option value="winona, az">Winona</option>\n      <option value="kingman, az">Kingman</option>\n      <option value="barstow, ca">Barstow</option>\n      <option value="san bernardino, ca">San Bernardino</option>\n      <option value="los angeles, ca">Los Angeles</option>\n    </select>\n    </div> -->\n    <div #map="" id="map"></div>\n\n    <ion-row *ngIf="value == \'resume\'">\n       <select class="full-width" [(ngModel)]="emergency" (change)="emergencyPause()">\n        <option value="Personal">Personal</option>\n        <option value="Fuel">Fuel</option>\n        <option value="Puncture">Puncture</option>\n        <option value="Accident">Accident</option>\n        <option value="Break Down">Break Down</option>\n        <option value="Other">Other</option>\n      </select>\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-6>\n          <button ion-button full primary *ngIf="value == \'stop\'" (click)="start1(\'start\')">Start</button>\n          <button ion-button full primary *ngIf="value == (\'start\' || \'resume\')" (click)="start1(\'pause\')">pause</button>\n          <button ion-button full *ngIf="value == \'resume\'" (click)="start1(\'resume\')" class="danger">Resume</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button full (click)="checkPopup()" [disabled]="(value == \'resume\') || (value == \'stop\')" class="secondary">Delivered</button>\n        </ion-col>\n      </ion-row>\n\n  \n  <button ion-button full primary *ngIf="value == \'start\'" (click)="navigate()">launch</button>\n  \n</ion-content>\n'/*ion-inline-end:"/home/it/VIGNESH/demo/src/pages/navigate/navigate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_location_tracker_location_tracker__["a" /* LocationTracker */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__providers_global__["a" /* Globals */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NavigatePage);
    return NavigatePage;
}());

//# sourceMappingURL=navigate.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTracker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_location_accuracy__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationTracker = /** @class */ (function () {
    function LocationTracker(zone, backgroundGeolocation, geolocation, locationAccuracy) {
        this.zone = zone;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.lat = 0;
        this.lng = 0;
    }
    LocationTracker.prototype.startTracking = function () {
        var _this = this;
        console.log("start");
        // Background Tracking
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () { return console.log('Request successful'); }, function (error) { return console.log('Error requesting location permissions', error); });
            }
        });
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            debug: true,
            interval: 2000
        };
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            console.log(location);
            console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
            });
        }, function (err) {
            console.log(err);
        });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
        // Foreground Tracking
        var options = {
            frequency: 10000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            console.log(position);
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        });
    };
    LocationTracker.prototype.stopTracking = function () {
        console.log('stopTracking');
        this.backgroundGeolocation.stop();
        this.watch.unsubscribe();
    };
    LocationTracker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_location_accuracy__["a" /* LocationAccuracy */]])
    ], LocationTracker);
    return LocationTracker;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultideliveryPageModule", function() { return MultideliveryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multidelivery__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MultideliveryPageModule = /** @class */ (function () {
    function MultideliveryPageModule() {
    }
    MultideliveryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__multidelivery__["a" /* MultideliveryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__multidelivery__["a" /* MultideliveryPage */]),
            ],
        })
    ], MultideliveryPageModule);
    return MultideliveryPageModule;
}());

//# sourceMappingURL=multidelivery.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatePageModule", function() { return NavigatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigate__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NavigatePageModule = /** @class */ (function () {
    function NavigatePageModule() {
    }
    NavigatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__navigate__["a" /* NavigatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__navigate__["a" /* NavigatePage */]),
            ],
        })
    ], NavigatePageModule);
    return NavigatePageModule;
}());

//# sourceMappingURL=navigate.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]),
            ],
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_orders_orders_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_navigate_navigate_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_order_service_order_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_deliverycheck_deliverycheck_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_multidelivery_multidelivery_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_location_tracker_location_tracker__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_background_geolocation__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_location_accuracy__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_global__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_orders_orders_module__["OrdersPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_navigate_navigate_module__["NavigatePageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_deliverycheck_deliverycheck_module__["DeliverycheckPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_multidelivery_multidelivery_module__["MultideliveryPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/deliverycheck/deliverycheck.module#DeliverycheckPageModule', name: 'DeliverycheckPage', segment: 'deliverycheck', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mappage/mappage.module#MappagePageModule', name: 'MappagePage', segment: 'mappage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/multidelivery/multidelivery.module#MultideliveryPageModule', name: 'MultideliveryPage', segment: 'multidelivery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/navigate/navigate.module#NavigatePageModule', name: 'NavigatePage', segment: 'navigate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_order_service_order_service__["a" /* OrderServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_location_tracker_location_tracker__["a" /* LocationTracker */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_20__providers_global__["a" /* Globals */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_location_accuracy__["a" /* LocationAccuracy */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//LocationTracker,BackgroundGeolocation, Geolocation,LaunchNavigator,
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_orders_orders__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    //rootPage:any = HomePage;
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.setRootPage();
        });
    }
    MyApp.prototype.setRootPage = function () {
        if (localStorage.getItem("role") == "11") {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_orders_orders__["a" /* OrdersPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/it/VIGNESH/demo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/it/VIGNESH/demo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])();
var Globals = /** @class */ (function () {
    function Globals() {
        //baseUrl="http://api.texparts.in:81/api/v1/";
        //baseUrl="http://192.168.1.72:3005/api/v1/";
        this.baseUrl = "http://api.idlidabba.com/api/v1/";
        //baseUrl=" http://api.learnstein.com:81/api/v1/";
    }
    return Globals;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_orders__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_location_accuracy__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, service, locationAccuracy, platform, http, alertCtrl, global) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.locationAccuracy = locationAccuracy;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.model = { username: '', password: '' };
        platform.registerBackButtonAction(function () {
            var confirm = _this.alertCtrl.create({
                title: 'Exit IDLIDABBA?',
                message: 'Do you want to exit?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function () {
                            console.log('Disagree clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            platform.exitApp();
                            console.log('Agree clicked');
                        }
                    }
                ]
            });
            confirm.present();
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () { return console.log('Request successful'); }, function (error) { return console.log('Error requesting location permissions', error); });
            }
        });
    };
    HomePage.prototype.login = function () {
        var _this = this;
        this.service.login(this.model.username, this.model.password)
            .subscribe(function (res) {
            _this.user = JSON.parse(localStorage.getItem("user"));
            if (_this.user.hh == 'Invalid') {
                alert("Invalid Credentials");
                _this.model.password = '';
            }
            else if (_this.user.role_id == 11) {
                localStorage.setItem("role", _this.user.role_id);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__orders_orders__["a" /* OrdersPage */]);
            }
            else if (_this.user == false) {
                alert("Logged in another device");
            }
            else if (_this.user.role_id == 5 || _this.user.role_id == 6) {
                _this.http.put(_this.global.baseUrl + 'dispatch_logout', { "id": _this.user.id })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    alert("Username & Password is not assigned for delivery login");
                    localStorage.clear();
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'LOGOUT?',
            message: 'Do you want to Logout?',
            buttons: [
                {
                    text: 'Cancle',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        var logoutuser = JSON.parse(localStorage.getItem("user"));
                        _this.http.put(_this.global.baseUrl + 'dispatch_logout', { "id": logoutuser.id })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            localStorage.clear();
                            _this.navCtrl.push(HomePage_1);
                            //this.navCtrl.popToRoot ();
                            //this.navCtrl.setRoot (LoginPage);
                        });
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/it/VIGNESH/demo/src/pages/home/home.html"*/'<ion-content class="bg-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col offset-4>\n      	<img src="./assets/imgs/habitos.png" width="100" height="150px">\n      	<p style="color: #EE5423;font-size: 15px;padding-left: 9px;">&nbsp;&nbsp;&nbsp;&nbsp;Delivery</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>  \n  <ion-list>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="model.username" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="model.password" required></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" (click)="login()" block>Sign In</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/it/VIGNESH/demo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_location_accuracy__["a" /* LocationAccuracy */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_global__["a" /* Globals */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_service_order_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deliverycheck_deliverycheck__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__multidelivery_multidelivery__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams, service, http, datepipe, platform, alertCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.http = http;
        this.datepipe = datepipe;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.global = global;
    }
    OrdersPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    OrdersPage.prototype.ionViewWillLeave = function () {
        // Unregister the custom back button action for this page
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    OrdersPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    OrdersPage.prototype.customHandleBackButton = function () {
        alert("Please complete Delivery");
    };
    OrdersPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad OrdersPage');
        this.order();
    };
    OrdersPage.prototype.order = function () {
        var _this = this;
        var logoutuser = JSON.parse(localStorage.getItem("user"));
        var tenant_id = logoutuser.tenant.toString();
        this.latest_date = Date.now();
        //this.date =this.datepipe.transform(this.latest_date, 'yyyy-MM-dd');
        this.date = this.datepipe.transform(this.latest_date, 'dd-MM-yyyy');
        //console.log(this.date,"Date")
        this.http.get(this.global.baseUrl + 'todaymenus?type=' + this.date + '&tenant_id=' + tenant_id).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.orderlist = data.order;
        });
    };
    OrdersPage.prototype.doRefresh = function (refresher) {
        this.order();
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    OrdersPage.prototype.checkorder = function (tenant_id, mealtime, flag_id, lat, lng, del_status) {
        if (del_status == 'Delivered') {
            alert("Delivery Already Completed");
        }
        else if (del_status == 'Dispatched') {
            alert("This order ready for delivery");
        }
        else {
            localStorage.setItem("tenant_id", tenant_id);
            localStorage.setItem("meal_time", mealtime);
            localStorage.setItem("flag_id", flag_id);
            var destination = lat + ',' + lng;
            localStorage.setItem("destinate", destination);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__deliverycheck_deliverycheck__["a" /* DeliverycheckPage */]);
        }
    };
    OrdersPage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'LOGOUT?',
            message: 'Do you want to Logout?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        var logoutuser = JSON.parse(localStorage.getItem("user"));
                        _this.http.put(_this.global.baseUrl + 'dispatch_logout', { "id": logoutuser.id })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            localStorage.clear();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    //new code begins here
    OrdersPage.prototype.deliverycheck = function () {
        for (var i = 0; i < this.orderlist.length; i++) {
            if (this.orderlist[i].delivery_status == 'Dispatched') {
                this.MealTime = this.orderlist[i].meal_time;
            }
        }
        if (this.MealTime != undefined) {
            localStorage.setItem("DCMealTime", this.MealTime);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__multidelivery_multidelivery__["a" /* MultideliveryPage */]);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Habitos',
                subTitle: 'No Delivery is ready to start',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"/home/it/VIGNESH/demo/src/pages/orders/orders.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="primary">\n    \n    <ion-title>Order</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="bg-color">\n<ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n	<!-- {{orderlist | json}} -->\n\n<ion-card *ngFor="let order of orderlist" (click)="checkorder(order.tenant.id,order.meal_time,order.flag_id,order.tenant.latitude,order.tenant.longitude,order.delivery_status)"  [hidden]="order.delivery_status == \'Menu Planned\'" padding>\n\n  <ion-card-header>\n    {{order.tenant.name}}\n  </ion-card-header>\n  <ion-card-content [color]="order.delivery_status == \'Dispatched\' ? \'secondary\' : \'primary\'">\n   {{order.meal_time}}\n   <span *ngIf="order.delivery_status == \'Dispatched\'">(Ready For Delivery)</span>\n   <span *ngIf="order.delivery_status == (\'Packed\')">(Not Ready For Delivery)</span>\n   <span *ngIf="order.delivery_status == (\'packed\')">(Not Ready For Delivery)</span>\n   <span *ngIf="order.delivery_status == \'Delivered\'">(Order is Delivered)</span>\n  </ion-card-content>\n</ion-card>\n\n<!-- 	<div class="row" *ngFor="let order of orderlist">\n		{{order.tenant.name}}\n	</div> -->\n\n<!-- <button (click)="order()">Direction</button>\n<button (click)="logout()">Logout</button> -->\n</ion-content>\n\n<ion-footer (click)="deliverycheck()">\n  <ion-toolbar color="primary">\n    <ion-title class="btn-align">Start Delivery</ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/it/VIGNESH/demo/src/pages/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_order_service_order_service__["a" /* OrderServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__providers_global__["a" /* Globals */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderServiceProvider = /** @class */ (function () {
    function OrderServiceProvider(http) {
        this.http = http;
        console.log('Hello OrderServiceProvider Provider');
    }
    /*order1() {
            return this.http.get('http://texparts.in:81/api/v1/todaymenus?type=17-11-2017&tenant_id=2,4,3,6,5')
                .map((response: Response) => {
                    let user = response.json();
                    console.log(user)
                   
                });
        }*/
    OrderServiceProvider.prototype.logout = function () {
        this.userdata = JSON.parse(localStorage.getItem("user"));
        return this.http.put('http://texparts.in:81/api/v1/dispatch_logout', { "id": this.userdata.id })
            .map(function (response) {
            console.log(response.json);
        });
    };
    OrderServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], OrderServiceProvider);
    return OrderServiceProvider;
}());

//# sourceMappingURL=order-service.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map