(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Bienvenido!</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"getInit($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"arrastra para actualizar\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Actualizando...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-item>\r\n    <ion-label>Filtrar Por</ion-label>\r\n    <ion-select value=\"0\" okText=\"Seleccionar\" cancelText=\"Cancelar\" (ionChange)=\"addFilter($event)\">\r\n      <ion-select-option value=\"0\">Todos</ion-select-option>\r\n      <ion-select-option *ngFor=\"let items of marks\" [value]=\"item.idMarca\">{{item.nombre}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of list\">\r\n      <ion-label>{{item.nombreModelo}}</ion-label>\r\n      <ion-label>{{item.nombreMarca}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n\r\n<div class=\"width-100 center\">\r\n  <button class=\"btnLogin color-blank text-bold box-shadow\" (click)=\"logOut()\">Cerrar Sesion</button>\r\n </div>");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnLogin {\n  width: 80%;\n  height: 40px;\n  border: none;\n  border-radius: 20px;\n  background-color: #8800FF;\n  font-size: 5vw;\n  transition: all 0.2s;\n}\n\n.btnLogin:focus {\n  background-color: #a43bff;\n}\n\n.btnLogin:disabled {\n  background-color: #3a3939;\n}\n\n@media (min-width: 800px) {\n  .btnLogin {\n    width: 35%;\n    font-size: 3vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXEpvY3pNXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcZnJlZWxhbmNlclxcSHVtYW5UZWNoUHJ1ZWJhVGVjbmljYS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0csVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7QUNESjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FES0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0VDRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAuYnRuTG9naW57XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODAwRkY7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbn1cclxuXHJcbi5idG5Mb2dpbjpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNDNiZmY7XHJcbn1cclxuXHJcbi5idG5Mb2dpbjpkaXNhYmxlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDU3LCA1Nyk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHsgXHJcbiAgLmJ0bkxvZ2luIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICB9XHJcblxyXG59IiwiLmJ0bkxvZ2luIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODAwRkY7XG4gIGZvbnQtc2l6ZTogNXZ3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLmJ0bkxvZ2luOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0M2JmZjtcbn1cblxuLmJ0bkxvZ2luOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMzkzOTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5idG5Mb2dpbiB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBmb250LXNpemU6IDN2dztcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_modals_loading_modal_loading_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/loading-modal/loading-modal.page */ "./src/app/modals/loading-modal/loading-modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let HomePage = class HomePage {
    constructor(modalLoadingController, router, storage, apiService) {
        this.modalLoadingController = modalLoadingController;
        this.router = router;
        this.storage = storage;
        this.apiService = apiService;
    }
    ngOnInit() {
        this.getInit();
    }
    getInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.openLoadingModal();
            try {
                const response = yield this.apiService.getAuto();
                if (response.response) {
                    this.list = response.data.resultados;
                    this.marks = response.data.marcas;
                }
            }
            catch (error) {
                console.error(error);
            }
            this.dismissLoading();
            if (event) {
                event.target.complete();
            }
        });
    }
    addFilter(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.openLoadingModal();
            const parameters = `?idMarca=${value.detail.value}`;
            const response = yield this.apiService.getAuto(parameters);
            if (response.response) {
                this.list = response.data.resultados;
            }
            this.dismissLoading();
        });
    }
    logOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.clear();
            yield this.storage.set('LOGGED', false);
            this.router.navigateByUrl('');
        });
    }
    //Loading
    openLoadingModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalLoadingController.create({
                component: src_app_modals_loading_modal_loading_modal_page__WEBPACK_IMPORTED_MODULE_5__["LoadingModalPage"],
                cssClass: 'modaLoading',
                componentProps: {}
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
    //// Modal Dismis
    dismissLoading() {
        this.modalLoadingController.dismiss();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map