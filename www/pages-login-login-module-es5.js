function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ionContent\">\r\n\r\n  <div class=\"divPrimary center\">\r\n    <h1 class=\"h1Title color-primary text-bold\">Geniant</h1>\r\n    <img class=\"imgLogo\" src=\"assets/logo.png\" alt=\"image logo\" />\r\n\r\n    <form class=\"form\" (ngSubmit)=\"login()\">\r\n      <input class=\"inputLogin marginTopImg box-shadow\" [(ngModel)]=\"loginData.user\" name=\"user\" type=\"text\"\r\n        placeholder=\"Correo electronico\" />\r\n      <input class=\"inputLogin margintopInput box-shadow\" [(ngModel)]=\"loginData.password\" name=\"password\"\r\n        type=\"password\" placeholder=\"Contraseña\" />\r\n\r\n      <ion-grid class=\"ionGrid\">\r\n        <ion-row>\r\n          <ion-col size=\"10\">\r\n            <h4 class=\"h4Remember text-left\">Recordar sesion</h4>\r\n          </ion-col>\r\n          <ion-col size=2>\r\n            <ion-checkbox class=\"chbox\" [(ngModel)]=\"isRemember\" name=\"checkRemember\"></ion-checkbox>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n      <button class=\"btnLogin color-blank text-bold box-shadow\" type=\"submit\">Iniciar Sesion</button>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"divSignUp width-100 center\">\r\n    <h3 class=\"text-xsmall h3SignUp\" (click)=\"openModal()\">Registarme! <ion-icon class=\"iconSignUp\" name=\"person-add-outline\"></ion-icon> </h3>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\n\n*:focus {\n  outline: none;\n}\n\n.divPrimary {\n  width: 100%;\n}\n\n.h1Title {\n  font-size: 9vw;\n  margin-top: 85px;\n  color: #8800FF;\n}\n\n.ionContent {\n  --background: #e6eaf1;\n}\n\n.imgLogo {\n  width: 35%;\n  margin-top: 40px;\n  border-radius: 10px;\n}\n\n.inputLogin {\n  width: 80%;\n  height: 50px;\n  border: none;\n  border-radius: 22px;\n  padding-left: 15px;\n}\n\n.marginTopImg {\n  margin: 30px 0 0 0px;\n}\n\n.margintopInput {\n  margin-top: 15px;\n}\n\n.btnLogin {\n  width: 80%;\n  margin-top: 30px;\n  height: 40px;\n  border: none;\n  border-radius: 20px;\n  background-color: #8800FF;\n  font-size: 5vw;\n  transition: all 0.2s;\n}\n\n.btnLogin:focus {\n  background-color: #a43bff;\n}\n\n.h4Remember {\n  color: #00000085;\n}\n\n.ionGrid {\n  padding: 10px 40px 0 40px;\n}\n\n.chbox {\n  margin-top: 3px;\n}\n\n.divSignUp {\n  position: absolute;\n  bottom: 0px;\n}\n\n.h3SignUp {\n  margin-bottom: 10px;\n  color: #423333;\n}\n\n.iconSignUp {\n  color: #2f2929;\n  font-size: 15px;\n  padding-top: 0px;\n}\n\n@media (min-width: 800px) {\n  .ionGrid {\n    padding: 10px 30% 0 30%;\n  }\n\n  .btnLogin {\n    width: 40%;\n    margin-top: 30px;\n    height: 50px;\n    font-size: 2vw;\n  }\n\n  .h1Title {\n    font-size: 5vw;\n    margin-top: 10%;\n    display: none;\n  }\n\n  .form {\n    padding: 0 20%;\n  }\n\n  .imgLogo {\n    width: 48%;\n    margin-top: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxKb2N6TVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXGZyZWVsYW5jZXJcXEh1bWFuVGVjaFBydWViYVRlY25pY2Evc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxTQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLG9CQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSx1QkFBQTtFQ0FOOztFREdFO0lBQ0ksVUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUNBTjs7RURHRTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsYUFBQTtFQ0FOOztFREdFO0lBQ0ksY0FBQTtFQ0FOOztFREdFO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbio6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZGl2UHJpbWFyeXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaDFUaXRsZXtcclxuICAgIGZvbnQtc2l6ZTogOXZ3O1xyXG4gICAgbWFyZ2luLXRvcDogODVweDtcclxuICAgIGNvbG9yOiAjODgwMEZGO1xyXG59XHJcblxyXG4uaW9uQ29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2U2ZWFmMTtcclxufVxyXG5cclxuLmltZ0xvZ297XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dExvZ2lue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tYXJnaW5Ub3BJbWd7XHJcbiAgICBtYXJnaW46IDMwcHggMCAwIDBweDtcclxufVxyXG5cclxuLm1hcmdpbnRvcElucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmJ0bkxvZ2lue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4MDBGRjtcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxufVxyXG5cclxuLmJ0bkxvZ2luOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E0M2JmZjtcclxufVxyXG5cclxuLmg0UmVtZW1iZXJ7XHJcbiAgICBjb2xvcjogIzAwMDAwMDg1O1xyXG59XHJcblxyXG4uaW9uR3JpZHsgICBcclxuICAgIHBhZGRpbmc6IDEwcHggNDBweCAwIDQwcHg7XHJcbn1cclxuXHJcbi5jaGJveHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLmRpdlNpZ25VcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uaDNTaWduVXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICM0MjMzMzM7XHJcbn1cclxuXHJcbi5pY29uU2lnblVwe1xyXG4gICAgY29sb3I6ICMyZjI5Mjk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHsgXHJcbiAgICAuaW9uR3JpZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMCUgMCAzMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bkxvZ2luIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5oMVRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZ0xvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG4gfSIsImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBtYXJnaW46IDA7XG59XG5cbio6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGl2UHJpbWFyeSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaDFUaXRsZSB7XG4gIGZvbnQtc2l6ZTogOXZ3O1xuICBtYXJnaW4tdG9wOiA4NXB4O1xuICBjb2xvcjogIzg4MDBGRjtcbn1cblxuLmlvbkNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlNmVhZjE7XG59XG5cbi5pbWdMb2dvIHtcbiAgd2lkdGg6IDM1JTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmlucHV0TG9naW4ge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4ubWFyZ2luVG9wSW1nIHtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwcHg7XG59XG5cbi5tYXJnaW50b3BJbnB1dCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5idG5Mb2dpbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODgwMEZGO1xuICBmb250LXNpemU6IDV2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5idG5Mb2dpbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNDNiZmY7XG59XG5cbi5oNFJlbWVtYmVyIHtcbiAgY29sb3I6ICMwMDAwMDA4NTtcbn1cblxuLmlvbkdyaWQge1xuICBwYWRkaW5nOiAxMHB4IDQwcHggMCA0MHB4O1xufVxuXG4uY2hib3gge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5kaXZTaWduVXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4uaDNTaWduVXAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzQyMzMzMztcbn1cblxuLmljb25TaWduVXAge1xuICBjb2xvcjogIzJmMjkyOTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmlvbkdyaWQge1xuICAgIHBhZGRpbmc6IDEwcHggMzAlIDAgMzAlO1xuICB9XG5cbiAgLmJ0bkxvZ2luIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG5cbiAgLmgxVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm0ge1xuICAgIHBhZGRpbmc6IDAgMjAlO1xuICB9XG5cbiAgLmltZ0xvZ28ge1xuICAgIHdpZHRoOiA0OCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_models_login_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/login-model */
    "./src/app/models/login-model.ts");
    /* harmony import */


    var src_app_modals_sign_up_modal_sign_up_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/modals/sign-up-modal/sign-up-modal.page */
    "./src/app/modals/sign-up-modal/sign-up-modal.page.ts");
    /* harmony import */


    var src_app_modals_loading_modal_loading_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modals/loading-modal/loading-modal.page */
    "./src/app/modals/loading-modal/loading-modal.page.ts");
    /* harmony import */


    var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/api/api.service */
    "./src/app/services/api/api.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(toastCtrl, apiService, router, storage, modalCtrl, modalLoadingController) {
        _classCallCheck(this, LoginPage);

        this.toastCtrl = toastCtrl;
        this.apiService = apiService;
        this.router = router;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.modalLoadingController = modalLoadingController;
        this.loginData = new src_app_models_login_model__WEBPACK_IMPORTED_MODULE_5__["LoginModel"]();
        this.isRemember = true;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var userTemp, passwordTemp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storage.get('USER');

                  case 2:
                    userTemp = _context.sent;

                    if (!(userTemp != null)) {
                      _context.next = 10;
                      break;
                    }

                    this.loginData.user = userTemp;
                    _context.next = 7;
                    return this.storage.get('PASS');

                  case 7:
                    passwordTemp = _context.sent;
                    this.loginData.password = passwordTemp;
                    this.login();

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "login",
        value: function login() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var response, toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.loginData.user.length == 0)) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    if (!(this.loginData.password.length == 0)) {
                      _context2.next = 4;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 4:
                    this.openLoadingModal();
                    _context2.prev = 5;
                    _context2.next = 8;
                    return this.apiService.login(this.loginData);

                  case 8:
                    response = _context2.sent;

                    if (!response.response) {
                      _context2.next = 18;
                      break;
                    }

                    if (this.isRemember) {
                      this.storage.set('USER', this.loginData.user);
                      this.storage.set('PASS', this.loginData.password);
                    }

                    _context2.next = 13;
                    return this.storage.set('LOGGED', true);

                  case 13:
                    _context2.next = 15;
                    return this.storage.set('TOKEN', response.data.jwt);

                  case 15:
                    this.router.navigateByUrl('home');
                    _context2.next = 22;
                    break;

                  case 18:
                    toast = this.toastCtrl.create({
                      message: response.message,
                      duration: 3000,
                      position: 'top'
                    });
                    _context2.next = 21;
                    return toast;

                  case 21:
                    _context2.sent.present();

                  case 22:
                    _context2.next = 28;
                    break;

                  case 24:
                    _context2.prev = 24;
                    _context2.t0 = _context2["catch"](5);
                    console.error(_context2.t0);
                    this.dismissLoading();

                  case 28:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[5, 24]]);
          }));
        }
      }, {
        key: "openModal",
        value: function openModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: src_app_modals_sign_up_modal_sign_up_modal_page__WEBPACK_IMPORTED_MODULE_6__["SignUpModalPage"],
                      backdropDismiss: false,
                      cssClass: 'modalCss'
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.onDidDismiss().then(function (recive) {
                      var data = recive.data;

                      if (data.finish) {
                        _this.loginData.password = data.data.password;
                        _this.loginData.user = data.data.user;
                      }
                    });
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } //Loading

      }, {
        key: "openLoadingModal",
        value: function openLoadingModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalLoadingController.create({
                      component: src_app_modals_loading_modal_loading_modal_page__WEBPACK_IMPORTED_MODULE_7__["LoadingModalPage"],
                      cssClass: 'modaLoading',
                      componentProps: {}
                    });

                  case 2:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function (dataReturned) {});
                    _context4.next = 6;
                    return modal.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } //// Modal Dismis

      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          this.modalLoadingController.dismiss();
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map