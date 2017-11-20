webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">ServerCom</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</nav>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-3\">\n\t\t\t<hardware-list></hardware-list>\n\t\t</div>\n\t\t<div class=\"col-9\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\t\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hardwarelist_app_servercomhw_hardwarelist_component__ = __webpack_require__("../../../../../src/app/hardwarelist/app.servercomhw.hardwarelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hardwareDetails_app_servercomhw_hardwaredetails_component__ = __webpack_require__("../../../../../src/app/hardwareDetails/app.servercomhw.hardwaredetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__hardwarelist_app_servercomhw_hardwarelist_component__["a" /* HardwareListComponent */], __WEBPACK_IMPORTED_MODULE_5__hardwareDetails_app_servercomhw_hardwaredetails_component__["a" /* HardwareDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'details/:id',
                    component: __WEBPACK_IMPORTED_MODULE_5__hardwareDetails_app_servercomhw_hardwaredetails_component__["a" /* HardwareDetailsComponent */]
                }
            ], { useHash: true })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/hardwareDetails/app.servercomhw.hardwaredetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_servercom_hardwareservice__ = __webpack_require__("../../../../../src/app/service/servercom.hardwareservice.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardwareDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HardwareDetailsComponent = (function () {
    function HardwareDetailsComponent(hardwareService, route, location) {
        this.hardwareService = hardwareService;
        this.route = route;
        this.location = location;
        this.rasPiDetails = {};
        this.switchNames = [];
    }
    HardwareDetailsComponent.prototype.onSwitchChange = function (e) {
        console.log("changed", e.target.checked, e.target.name);
        this.hardwareService.toggleSwitch(2404633, e.target.name, e.target.checked);
    };
    HardwareDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.hardwareService.getHardware(+params.get('id')); })
            .subscribe(function (rasPiDetails) {
            console.log(rasPiDetails);
            _this.switchNames = Object.keys(rasPiDetails);
            _this.rasPiDetails = rasPiDetails;
        });
    };
    return HardwareDetailsComponent;
}());
HardwareDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'hardware-details',
        template: __webpack_require__("../../../../../src/app/hardwareDetails/app.servercomhw.hardwaredetails.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_servercom_hardwareservice__["a" /* HardwareService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_servercom_hardwareservice__["a" /* HardwareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_servercom_hardwareservice__["a" /* HardwareService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _c || Object])
], HardwareDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=app.servercomhw.hardwaredetails.component.js.map

/***/ }),

/***/ "../../../../../src/app/hardwareDetails/app.servercomhw.hardwaredetails.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fluid-continer\">\r\n<div class=\"row\">\r\n\t<div class=\"col\">\r\n\t\t<div class=\"alert alert-primary\" role=\"alert\"><b>Hardware</b></div>\r\n\t\t\t<tr *ngFor=\"let switchName of switchNames\">\r\n\t\t\t  <td>{{switchName}}</td>\r\n\t\t\t  <td><input type=\"checkbox\" name=\"{{switchName}}\" (change)=\"onSwitchChange($event)\" />{{rasPiDetails[switchName]}}</td>\r\n\t\t\t</tr>\r\n\r\n\t</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/hardwarelist/app.servercomhw.hardwarelist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_servercom_hardwareservice__ = __webpack_require__("../../../../../src/app/service/servercom.hardwareservice.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardwareListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HardwareListComponent = (function () {
    function HardwareListComponent(hardwareService) {
        this.hardwareService = hardwareService;
        this.rasPiHardwares = [];
    }
    HardwareListComponent.prototype.getRasPiHardware = function () {
        var _this = this;
        this.hardwareService.getAllHardwares().then(function (rasPiHardwares) { _this.rasPiHardwares = rasPiHardwares; });
    };
    HardwareListComponent.prototype.ngOnInit = function () {
        var that = this;
        /*setInterval(function(){
            that.getRasPiHardware();
        },1000);
        */
        that.getRasPiHardware();
    };
    return HardwareListComponent;
}());
HardwareListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'hardware-list',
        template: __webpack_require__("../../../../../src/app/hardwarelist/app.servercomhw.hardwarelist.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_servercom_hardwareservice__["a" /* HardwareService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_servercom_hardwareservice__["a" /* HardwareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_servercom_hardwareservice__["a" /* HardwareService */]) === "function" && _a || Object])
], HardwareListComponent);

var _a;
//# sourceMappingURL=app.servercomhw.hardwarelist.component.js.map

/***/ }),

/***/ "../../../../../src/app/hardwarelist/app.servercomhw.hardwarelist.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n\t<thead class=\"thead-default\">\r\n\t\t<tr><th>Status</th><th>Hardware</th></tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t<tr *ngFor=\"let rasPiHardware of rasPiHardwares\">\r\n\t\t<td><img height=\"15px\" src=\"assets/online.png\"></td><td><a class=\"nav-link active\" href=\"/#/details/{{ rasPiHardware.deviceId }}\">{{ rasPiHardware.givenName?rasPiHardware.givenName:rasPiHardware.deviceId }}</a></td>\r\n\t</tr>\r\n\t</tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/service/servercom.hardwareservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardwareService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var rasPiHardwares = [
    { status: "online", name: "Pundlik", id: 1, temp: 50, freq: 100, comData: [{ date: 1508438215952, text: "Spindle data 1" }, { date: 1000, text: "Spindle data 2" }, { date: 1000, text: "Spindle data 3" }] },
    { status: "offline", name: "Raspi 2", id: 2, temp: 40, freq: 110, comData: [{ date: 1508438295952, text: "Spindle data 1" }, { date: 1000, text: "Spindle data 2" }, { date: 1000, text: "Spindle data 3" }] },
    { status: "offline", name: "Raspi 3", id: 3, temp: 30, freq: 130, comData: [{ date: 1508438595952, text: "Spindle data 1" }, { date: 1000, text: "Spindle data 2" }, { date: 1000, text: "Spindle data 3" }] },
    { status: "online", name: "Raspi 4", id: 4, temp: 20, freq: 150, comData: [{ date: 1508438285952, text: "Spindle data 1" }, { date: 1000, text: "Spindle data 2" }, { date: 1000, text: "Spindle data 3" }] }
];
var HardwareService = (function () {
    function HardwareService(http) {
        this.http = http;
    }
    HardwareService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HardwareService.prototype.getAllHardwares = function () {
        var url = "http://Vinayak-PC:80/rest/raspi/all";
        return this.http.get(url).toPromise().then(function (response) { return response; }).catch(this.handleError);
    };
    HardwareService.prototype.getHardware = function (id) {
        var url = "http://Vinayak-PC:80/rest/raspi/device/" + id;
        return this.http.get(url).toPromise().then(function (response) { return response; }).catch(this.handleError);
    };
    HardwareService.prototype.toggleSwitch = function (deviceId, pinNo, pinStatus) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('Content-Type', 'application/json');
        var url = "http://Vinayak-PC:80/rest/raspi/device/" + deviceId + "/" + pinNo + "/" + pinStatus;
        //let options = new RequestOptions({ headers: headers});
        return this.http.post(url, {}, { headers: headers }).toPromise().then(function (response) { return response; }).catch(this.handleError);
    };
    return HardwareService;
}());
HardwareService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], HardwareService);

var _a;
//# sourceMappingURL=servercom.hardwareservice.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map