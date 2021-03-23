(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_modal/modal.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_modal/modal.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jw-modal\">\n    <div align=\"center\" class=\"jw-modal-body\"  style=\"width:20%;height:50%; \">\n        <ng-content>\n          \n        </ng-content>\n    </div>\n</div>\n<div class=\"jw-modal-background\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dashboard works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top:60px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n      <div class=\"card-group\">\r\n        <div class=\"card p-4\">\r\n          <div class=\"card-body\">\r\n            <form name=\"form\" (ngSubmit)=\"reset()\" #f=\"ngForm\">\r\n              <h1 style=\"text-align:center\">Reset Password</h1>\r\n\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                </div>\r\n                <input type=\"text\" name=\"UserName\" [(ngModel)]=\"model.UserName\" class=\"form-control sty1\" placeholder=\"User Name\" required>\r\n              </div>\r\n             \r\n              <div>\r\n                <p style=\"color:#E92626;font-size:20px;font-weight:normal\" Class=\"success\" align=\"left\">\r\n                  {{errorMessage}}\r\n                </p>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <button type=\"submit\" class=\"btn btn-primary px-4\">Reset</button>\r\n                </div>\r\n                <div class=\"col-6 text-left\">\r\n                  <a class=\"nav-link\" [routerLink]=\"['../login']\">Back to Login</a>\r\n                </div>\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Hello, EDC!</h1>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top:60px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n      <div class=\"card-group\">\r\n        <div class=\"card p-4\">\r\n          <div class=\"card-body\">\r\n            <form name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\">\r\n              <h1 style=\"text-align:center\">Login</h1>\r\n\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                </div>\r\n                <input type=\"text\" name=\"UserName\" [(ngModel)]=\"model.UserName\" class=\"form-control sty1\" placeholder=\"User Name\" required>\r\n              </div>\r\n              <div class=\"input-group mb-4\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                </div>\r\n                <input type=\"password\" name=\"Passward\" [(ngModel)]=\"model.Password\" class=\"form-control\"\r\n                       placeholder=\"Password\">\r\n              </div>\r\n              <div>\r\n                <p style=\"color:#E92626;font-size:20px;font-weight:normal\" Class=\"success\" align=\"left\">\r\n                  {{errorMessage}}\r\n                </p>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <button type=\"submit\" class=\"btn btn-primary px-4\">Login</button>\r\n                </div>\r\n                <div class=\"col-6 text-right\">\r\n                  <a class=\"nav-link\" [routerLink]=\"['../forgotpassword']\">Forgot Password?</a>\r\n                </div>\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n<header>\r\n  <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\" style=\"background-color: #1b6ec2 !important\">\r\n    <div class=\"container\" >\r\n      \r\n      <a class=\"nav-link\" [routerLink]=\"['/']\">\r\n        <img src=\"../../assets/EDC logo_2021Feb01.gif\" /> Operations</a>\r\n      <button class=\"navbar-toggler\"\r\n              type=\"button\"\r\n              data-toggle=\"collapse\"\r\n              data-target=\".navbar-collapse\"\r\n              aria-label=\"Toggle navigation\"\r\n              [attr.aria-expanded]=\"isExpanded\"\r\n              (click)=\"toggle()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n           [ngClass]=\"{ show: isExpanded }\">\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <!--<li class=\"nav-item\"\r\n      [routerLinkActive]=\"['link-active']\"\r\n      [routerLinkActiveOptions]=\"{ exact: true }\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n  </li>-->\r\n          <!--<li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\">Counter</a>\r\n  </li>\r\n  <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\">Fetch data</a>\r\n  </li>-->\r\n          <!--<li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['/register']\">Register</a>\r\n  </li>-->\r\n          <!-- Admin only -->\r\n          <li class=\"nav-item\" *ngIf=\"isAuthorized\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['dashboard']\">Dashboard</a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"isAuthorized\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['listuser']\">Users (Classic)</a>\r\n  </li>\r\n          <li class=\"nav-item\" *ngIf=\"isAuthorized\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['aggriduser']\"> Users (ag Grid)</a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"isAuthorized\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['aduser']\">Users (ad Grid)</a>\r\n  </li>\r\n  <!--<li class=\"nav-item\" *ngIf=\"isAdmin\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['ngxuser']\">Users (ngx Grid)</a>\r\n  </li>-->\r\n          <!--<li class=\"nav-item\" *ngIf=\"isAdmin || isAuthorized\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['profile']\">Profile</a>\r\n  </li>-->\r\n          <!-- Anonymous only -->\r\n          <!--<li class=\"nav-item\" *ngIf=\"!isAuthorized\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['login']\">Login</a>\r\n  </li>-->\r\n          <!-- Authorized only -->\r\n          <!--<li class=\"nav-item\" *ngIf=\"isAuthorized\">\r\n    <a class=\"nav-link text-dark\" (click)=\"logout()\">Logout</a>\r\n  </li>-->\r\n          <!--<li class=\"nav-item text-dark\" *ngIf=\"isAuthorized\"> <a class=\"nav-link\"> Hi {{username}}!!</a> </li>-->\r\n          <!--<li class=\"nav-item dropdown\" *ngIf=\"isAuthorized\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n              Hi {{username}}!!\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n              <a lass=\"dropdown-item nav-link text-dark\" [routerLink]=\"['profile']\">Profile</a>\r\n              <a lass=\"dropdown-item nav-link text-dark\" (click)=\"logout()\">Logout</a>\r\n            </div>\r\n          </li>-->\r\n          <li class=\"nav-item dropdown\" *ngIf=\"isAuthorized\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Hi {{username}}\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"['profile']\">Profile</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ngx-user/ngx-user.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ngx-user/ngx-user.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 user-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h2>User Details</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-block btn-success\" style=\"width:100px\" (click)=\"addUser()\"> Add User</button>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <input type=\"text\"\r\n             style=\"padding:8px;margin:15px auto;width:30%;\"\r\n             placeholder=\"Type to filter the name column...\"\r\n             (keyup)=\"updateFilter($event)\" />\r\n      <ngx-datatable [rows]=\"users\" [columns]=\"columns\" class=\"material\" [headerHeight]=\"50\"\r\n                     [footerHeight]=\"50\"\r\n                     rowHeight=\"auto\"\r\n                     [limit]=\"10\"> </ngx-datatable>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notauthorized/notauthorized.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notauthorized/notauthorized.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>you are notauthorized.</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top:40px;\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <div class=\"card mx-4\">\n        <div class=\"card-body p-4\">\n\n\n\n          <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n            <h1 style=\"text-align:center\">User Profile</h1>\n\n            <div class=\"form-group\">\n              <label for=\"username\">Full Name:</label>\n              <input type=\"text\" formControlName=\"fullName\" placeholder=\"Full Name\" name=\"fullName\" class=\"form-control\" id=\"fullName\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">User Name:</label>\n              <input type=\"text\" formControlName=\"userName\" placeholder=\"User Name\" name=\"userName\" class=\"form-control\" id=\"userName\">\n\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Password:</label>\n              <input type=\"password\" formControlName=\"password\" placeholder=\"Password\" name=\"password\" class=\"form-control\" id=\"password\">\n\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Email:</label>\n              <input type=\"text\" formControlName=\"email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\">\n            </div>\n\n          \n            <div class=\"form-group\">\n              <label for=\"username\">Phone:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" formControlName=\"phone\" name=\"phone\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Address:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Address\" formControlName=\"address\" name=\"address\">\n            </div>\n           \n            <div>\n              <p style=\"color:#E92626;font-size:20px;font-weight:normal\" Class=\"success\" align=\"left\">\n                {{errorMessage}}\n              </p>\n            </div>\n          </form>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button type=\"submit\" class=\"btn btn-block btn-success\" style=\"width:100px\" (click)=\"onSubmit()\">Submit</button>\n            </div>\n            <!--<div class=\"col-6 text-right\">\n              <button class=\"btn btn-danger\" style=\"width:100px\" (click)=\"onCancel()\">Cancel</button>\n            </div>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top:40px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n      <div class=\"card mx-4\">\r\n        <div class=\"card-body p-4\">\r\n\r\n          \r\n\r\n          <form name=\"form1\" (ngSubmit)=\"register()\" #f=\"ngForm\">\r\n            <h1 style=\"text-align:center\">Add User</h1>\r\n            <div class=\"input-group mb-3\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"FullName\" [(ngModel)]=\"model.FullName\" name=\"FullName\" required>\r\n            </div>\r\n            <div class=\"input-group mb-4\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"UserName\" [(ngModel)]=\"model.UserName\" name=\"UserName\" required>\r\n            </div>\r\n            <div class=\"input-group mb-3\">\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"model.Password\" name=\"Password\" required>\r\n            </div>\r\n            <div class=\"input-group mb-4\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"model.Email\" name=\"Email\" required>\r\n            </div>\r\n\r\n            <div class=\"input-group mb-4\">\r\n              <select [(ngModel)]=\"model.Role\" class=\"form-control\" placeholder=\"Role\" required name=\"Role\">\r\n                <option value=\"Admin\" selected>Admin</option>\r\n                <option value=\"Editor\">Editor</option>\r\n                <option value=\"Reader\">Reader</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"input-group mb-4\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Contact No\" [(ngModel)]=\"model.Phone\" name=\"Phone\">\r\n            </div>\r\n            <div class=\"input-group mb-4\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Address\" [(ngModel)]=\"model.Address\" name=\"Address\">\r\n            </div>\r\n            <div class=\"input-group mb-4\">\r\n              <select [(ngModel)]=\"model.Status\" class=\"form-control\" placeholder=\"Status\" required name=\"Status\">\r\n                <option value=\"Active\" selected >Active</option>\r\n                <option value=\"Inactive\">Inactive</option>\r\n                \r\n              </select>\r\n            </div>\r\n            <div>\r\n              <p style=\"color:#E92626;font-size:20px;font-weight:normal\" Class=\"success\" align=\"left\">\r\n                {{errorMessage}}\r\n              </p>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-block btn-success\">Add User</button>\r\n\r\n\r\n          </form>\r\n        </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top:60px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n      <div class=\"card-group\">\r\n        <div class=\"card p-4\">\r\n          <div class=\"card-body\">\r\n            <form name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\">\r\n              <h1 style=\"text-align:center\">Reset Password</h1>\r\n\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                </div>\r\n                <input type=\"text\" name=\"Password\" [(ngModel)]=\"model.Password\" class=\"form-control sty1\" placeholder=\"Password\" required>\r\n              </div>\r\n              <div class=\"input-group mb-4\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                </div>\r\n                <input type=\"password\" name=\"ConfirmPassward\" [(ngModel)]=\"model.ConfirmPassword\" class=\"form-control\"\r\n                       placeholder=\"Confirm Password\">\r\n              </div>\r\n              <div>\r\n                <p style=\"color:#E92626;font-size:20px;font-weight:normal\" Class=\"success\" align=\"left\">\r\n                  {{errorMessage}}\r\n                </p>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <button type=\"submit\" class=\"btn btn-primary px-4\">Reset</button>\r\n                </div>\r\n               \r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/ad-user/ad-user.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/ad-user/ad-user.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 user-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h2>User Details</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-block btn-success\" style=\"width:100px\" (click)=\"addUser()\">Add User</button>\r\n  </div>\r\n \r\n  <div class=\"row\" style=\"margin-top:10px\">\r\n    <div class=\"col-md-12\">\r\n      <table datatable [dtOptions]=\"dtOptions\"  [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Full Name</th>\r\n            <th>User Name</th>\r\n            <th>Email</th>\r\n            <th>Phone</th>\r\n            <th>Address</th>\r\n            <th>Role</th>\r\n            <th>Status</th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"users?.length != 0\">\r\n          <tr *ngFor=\"let user of users\">\r\n            <td>{{ user.id }}</td>\r\n            <td>{{ user.fullName }}</td>\r\n            <td>{{ user.userName }}</td>\r\n            <td>{{ user.email }}</td>\r\n            <td>{{ user.phone }}</td>\r\n            <td>{{ user.address }}</td>\r\n            <td>{{ user.role }}</td>\r\n            <td>\r\n              {{ user.status }}\r\n            </td>\r\n            <td *ngIf=\"isNotReader\">\r\n              <button class=\"btn btn-primary px-4\" (click)=\"editUser(user)\">Edit</button>\r\n            </td>\r\n            <td>\r\n              <button class=\"btn btn-primary px-4\" (click)=\"viewUser(user)\">View</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"users?.length == 0\">\r\n          <tr>\r\n            <td colspan=\"3\" class=\"no-data-available\">No data!</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-user/add-user.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-user/add-user.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top:40px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n      <div class=\"card mx-4\">\r\n        <div class=\"card-body p-4\">\r\n\r\n\r\n\r\n          <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\r\n            <h1 style=\"text-align:center\">Create User</h1>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Full Name:</label>\r\n              <input type=\"text\" formControlName=\"fullName\" placeholder=\"Full Name\" name=\"fullName\" class=\"form-control\" id=\"fullName\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">User Name:</label>\r\n              <input type=\"text\" formControlName=\"userName\" placeholder=\"User Name\" name=\"userName\" class=\"form-control\" id=\"userName\">\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Password:</label>\r\n              <input type=\"password\" formControlName=\"password\" placeholder=\"Password\" name=\"password\" class=\"form-control\" id=\"password\">\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Email:</label>\r\n              <input type=\"text\" formControlName=\"email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Phone:</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" formControlName=\"phone\" name=\"phone\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Address:</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Address\" formControlName=\"address\" name=\"address\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Role:</label>\r\n              <select formControlName=\"role\" class=\"form-control\" placeholder=\"Role\" name=\"role\">\r\n                <option value=\"Admin\" selected=\"selected\">Admin</option>\r\n                <option value=\"Editor\">Editor</option>\r\n                <option value=\"Reader\">Reader</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Status:</label>\r\n              <select formControlName=\"status\" class=\"form-control\" placeholder=\"Status\" name=\"status\">\r\n                <option value=\"Active\" selected=\"selected\">Active</option>\r\n                <option value=\"Inactive\">Inactive</option>\r\n              </select>\r\n            </div>\r\n            <div>\r\n              <p style=\"color:#E92626;font-size:20px;font-weight:normal\" Class=\"success\" align=\"left\">\r\n                {{errorMessage}}\r\n              </p>\r\n            </div>\r\n            <!--<button type=\"submit\" class=\"btn btn-block btn-success\">Submit</button>-->\r\n\r\n\r\n          </form>\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button type=\"submit\" class=\"btn btn-block btn-success\" style=\"width:100px\" (click)=\"onSubmit()\">Submit</button>\r\n            </div>\r\n            <div class=\"col-6 text-right\">\r\n              <button class=\"btn btn-danger\" style=\"width:100px\" (click)=\"onCancel()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/aggrid-user/aggrid-user.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/aggrid-user/aggrid-user.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 user-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h2>User Details</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-block btn-success\" style=\"width:100px\" (click)=\"addUser()\">Add User</button>\r\n  </div>\r\n  <div style=\"margin: 5px;\">\r\n    <label>\r\n      <button (click)=\"onBtExport()\" style=\"margin: 5px; font-weight: bold;\">\r\n        Export to Excel\r\n      </button>\r\n    </label>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top:10px\">\r\n    <div class=\"col-md-12\">\r\n      <!--<ag-grid-angular style=\"width: 100%; height: 300px;\"\r\n                   class=\"ag-theme-alpine\"\r\n                   [rowData]=\"users\"\r\n                   [columnDefs]=\"columnDefs\">\r\n  </ag-grid-angular>-->\r\n      \r\n\r\n      <ag-grid-angular style=\"width: 100%; height: 400px;\" #agGrid\r\n                       class=\"ag-theme-alpine\"\r\n                       [rowData]=\"users\"\r\n                       [columnDefs]=\"columnDefs\" [defaultColDef]=\"defaultColDef\"\r\n                       (gridReady)=\"onGridReady($event)\"\r\n                       [frameworkComponents]=\"frameworkComponents\">\r\n      </ag-grid-angular>\r\n      <div style=\"height: 100%; box-sizing: border-box;\">\r\n        <!--<ag-grid-angular #agGrid\r\n                 style=\"width: 100%; height: 100%;\"\r\n                 id=\"myGrid\"\r\n                 class=\"ag-theme-alpine\"\r\n                 [columnDefs]=\"columnDefs\"\r\n                 [defaultColDef]=\"defaultColDef\"\r\n                 [defaultColGroupDef]=\"defaultColGroupDef\"\r\n                 [columnTypes]=\"columnTypes\"\r\n                 [rowData]=\"users\"\r\n                 ></ag-grid-angular>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit-user/edit-user.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit-user/edit-user.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top:40px;\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <div class=\"card mx-4\">\n        <div class=\"card-body p-4\">\n\n\n\n          <form [formGroup]=\"editForm\">\n            <h1 style=\"text-align:center\">Update User</h1>\n\n            <div class=\"form-group\">\n              <label for=\"username\">Full Name:</label>\n              <input type=\"text\" formControlName=\"fullName\" placeholder=\"Full Name\" name=\"fullName\" class=\"form-control\" id=\"fullName\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">User Name:</label>\n              <input type=\"text\" formControlName=\"userName\" placeholder=\"User Name\" name=\"userName\" class=\"form-control\" id=\"userName\">\n\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Password:</label>\n              <!--<input type=\"text\" formControlName=\"password\" placeholder=\"Password\" name=\"password\" class=\"form-control\" id=\"password\">-->\n              <button (click)=\"openModal('modalChangePassword')\">Change Password</button>\n              <jw-modal id=\"modalChangePassword\">\n                <h1>Change Password</h1>\n                <div class=\"row\">\n                  <div class=\"col-1\">\n\n                  </div>\n                  <div class=\"col-10\" align=\"center\">\n                    <div class=\"form-group\">\n                      <!--<label for=\"password\">Pasword:</label>-->\n                      <input type=\"text\" formControlName=\"password\" placeholder=\"Password\" name=\"password\" class=\"form-control\" id=\"password\" />\n\n                    </div>\n                  </div>\n                  <div class=\"col-1\">\n\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-6\" align=\"right\">\n                    <button (click)=\"closeModal('modalChangePassword','Ok');\" style=\"width:100px\" class=\"btn btn-block btn-success\">Ok</button>\n\n                  </div>\n                  <div class=\"col-6 text-left\">\n                    <button class=\"btn btn-danger\" style=\"width:100px\" (click)=\"closeModal('modalChangePassword','Cancel');\">Cancel</button>\n\n                  </div>\n                </div>\n              </jw-modal>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Email:</label>\n              <input type=\"text\" formControlName=\"email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\">\n            </div>\n\n\n            <div class=\"form-group\">\n              <label for=\"username\">Phone:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" formControlName=\"phone\" name=\"phone\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Address:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Address\" formControlName=\"address\" name=\"address\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Role:</label>\n              <select formControlName=\"role\" class=\"form-control\" placeholder=\"Role\" name=\"role\">\n                <option value=\"Admin\" selected>Admin</option>\n                <option value=\"Editor\">Editor</option>\n                <option value=\"Reader\">Reader</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Status:</label>\n              <select formControlName=\"status\" class=\"form-control\" placeholder=\"Status\" name=\"status\">\n                <option value=\"Active\" selected>Active</option>\n                <option value=\"Inactive\">Inactive</option>\n              </select>\n            </div>\n            <div>\n              <p style=\"color:#E92626;font-size:20px;font-weight:normal\" Class=\"success\" align=\"left\">\n                {{errorMessage}}\n              </p>\n            </div>\n\n          </form>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button type=\"submit\" class=\"btn btn-block btn-success\" style=\"width:100px\" (click)=\"onSubmit()\">Submit</button>\n            </div>\n            <div class=\"col-6 text-right\">\n              <button class=\"btn btn-danger\" style=\"width:100px\" (click)=\"onCancel()\">Cancel</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/list-user/list-user.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/list-user/list-user.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 user-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h2>User Details</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    </div>\r\n    <div class=\"row\">\r\n      <button class=\"btn btn-block btn-success\" style=\"width:100px\" (click)=\"addUser()\"> Add User</button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <table class=\"table table-striped\" width=\"100%\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"hidden\">Id</th>\r\n              <th>Full Name</th>\r\n              <th>User Name</th>\r\n\r\n              <th>Email</th>\r\n              <th>Phone</th>\r\n              <th>Address</th>\r\n              <th>Role</th>\r\n              <th>Status</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let user of users\">\r\n              <td class=\"hidden\">{{user.id}}</td>\r\n              <td>{{user.fullName}}</td>\r\n              <td>{{user.userName}}</td>\r\n\r\n              <td>{{user.email}}</td>\r\n              <td>{{user.phone}}</td>\r\n              <td>{{user.address}}</td>\r\n              <td>{{user.role}}</td>\r\n              <td>{{user.status}}</td>\r\n              <td *ngIf=\"isNotReader\">\r\n                <button class=\"btn btn-primary px-4\" (click)=\"editUser(user)\">Edit</button>\r\n              </td>\r\n              <td>\r\n                <button class=\"btn btn-primary px-4\" (click)=\"viewUser(user)\">View</button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/view-user/view-user.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/view-user/view-user.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top:40px;\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <div class=\"card mx-4\">\n        <div class=\"card-body p-4\">\n\n\n\n          <form [formGroup]=\"editForm\">\n            <h1 style=\"text-align:center\">View User</h1>\n\n            <div class=\"form-group\">\n              <label for=\"username\">Full Name:</label>\n              <input type=\"text\" formControlName=\"fullName\" placeholder=\"Full Name\" name=\"fullName\" class=\"form-control\" id=\"fullName\" disabled>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">User Name:</label>\n              <input type=\"text\" formControlName=\"userName\" placeholder=\"User Name\" name=\"userName\" class=\"form-control\" id=\"userName\" disabled>\n\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Password:</label>\n              <input type=\"text\" formControlName=\"password\" placeholder=\"Password\" name=\"password\" class=\"form-control\" id=\"password\" disabled />\n\n\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Email:</label>\n              <input type=\"text\" formControlName=\"email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\" disabled>\n            </div>\n\n\n            <div class=\"form-group\">\n              <label for=\"username\">Phone:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" formControlName=\"phone\" name=\"phone\" disabled />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Address:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Address\" formControlName=\"address\" name=\"address\" disabled>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Role:</label>\n              <select formControlName=\"role\" class=\"form-control\" placeholder=\"Role\" name=\"role\" disabled>\n                <option value=\"Admin\" selected>Admin</option>\n                <option value=\"Editor\">Editor</option>\n                <option value=\"Reader\">Reader</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"username\">Status:</label>\n              <select formControlName=\"status\" class=\"form-control\" placeholder=\"Status\" name=\"status\" disabled>\n                <option value=\"Active\" selected>Active</option>\n                <option value=\"Inactive\">Inactive</option>\n              </select>\n            </div>\n            <div>\n              <p style=\"color:#E92626;font-size:20px;font-weight:normal\" Class=\"success\" align=\"left\" disabled>\n                {{errorMessage}}\n              </p>\n            </div>\n\n          </form>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <!--<button type=\"submit\" class=\"btn btn-block btn-success\" style=\"width:100px\" (click)=\"onSubmit()\">Submit</button>-->\n            </div>\n            <div class=\"col-6 text-right\">\n              <button class=\"btn btn-danger\" style=\"width:100px\" (click)=\"onCancel()\">Cancel</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_modal/index.ts":
/*!*********************************!*\
  !*** ./src/app/_modal/index.ts ***!
  \*********************************/
/*! exports provided: ModalModule, ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.module */ "./src/app/_modal/modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _modal_module__WEBPACK_IMPORTED_MODULE_0__["ModalModule"]; });

/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "./src/app/_modal/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




/***/ }),

/***/ "./src/app/_modal/modal.component.less":
/*!*********************************************!*\
  !*** ./src/app/_modal/modal.component.less ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  /*padding: 20px;\n            background: #fff;*/\n  /* margin exposes part of the modal background */\n  /*margin: 40px;*/\n  background: #fff;\n  position: absolute;\n  float: left;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9fbW9kYWwvQzovUHJvamVjdHMvRURDTmV3L0VEQ09wZXJhdGlvbnNXZWJBcHAvRURDT3BlcmF0aW9ucy9DbGllbnRBcHAvc3JjL2FwcC9fbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Z0NBQ2dDO0FDQ2hDO0VEQ0UsaUNBQWlDO0VDQ2pDLGFBQUE7QURDRjtBQ0hBO0VES0UsOENBQThDO0VDQzVDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VEQ0YscURBQXFEO0VDQ25ELGFBQUE7RURDRixzQ0FBc0M7RUNDcEMsY0FBQTtBRENKO0FDZkE7RURpQkU7OEJBQzRCO0VBQzVCLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUNDWixnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QURDTjtBQzNCQTtFRDZCRSwrQ0FBK0M7RUNHN0MsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RURERiw0QkFBNEI7RUNHMUIsc0JBQUE7RUFDQSxhQUFBO0VEREYsK0RBQStEO0VDRzdELFlBQUE7QURESjtBQ0tBO0VESEUsNkVBQTZFO0VDSzNFLGdCQUFBO0FESEoiLCJmaWxlIjoic3JjL2FwcC9fbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNT0RBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuanctbW9kYWwge1xuICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG5qdy1tb2RhbCAuanctbW9kYWwge1xuICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLyogei1pbmRleCBtdXN0IGJlIGhpZ2hlciB0aGFuIC5qdy1tb2RhbC1iYWNrZ3JvdW5kICovXG4gIHotaW5kZXg6IDEwMDA7XG4gIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICBvdmVyZmxvdzogYXV0bztcbn1cbmp3LW1vZGFsIC5qdy1tb2RhbCAuanctbW9kYWwtYm9keSB7XG4gIC8qcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7Ki9cbiAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xuICAvKm1hcmdpbjogNDBweDsqL1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbmp3LW1vZGFsIC5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjc1O1xuICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gIHotaW5kZXg6IDkwMDtcbn1cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmp3LW1vZGFsIHtcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBkaXNwbGF5OiBub25lO1xuXG4gIC5qdy1tb2RhbCB7XG4gICAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAuanctbW9kYWwtYm9keSB7XG4gICAgICAvKnBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyovXG4gICAgICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXG4gICAgICAvKm1hcmdpbjogNDBweDsqL1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG4gIH1cblxuICAuanctbW9kYWwtYmFja2dyb3VuZCB7XG4gICAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogMC43NTtcbiAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gICAgei1pbmRleDogOTAwO1xuICB9XG59XG5cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gICAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/_modal/modal.component.ts":
/*!*******************************************!*\
  !*** ./src/app/_modal/modal.component.ts ***!
  \*******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "./src/app/_modal/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ModalComponent = class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
};
ModalComponent.ctorParameters = () => [
    { type: _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "id", void 0);
ModalComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'jw-modal',
        template: __importDefault(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_modal/modal.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__importDefault(__webpack_require__(/*! ./modal.component.less */ "./src/app/_modal/modal.component.less")).default]
    }),
    __metadata("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], ModalComponent);



/***/ }),

/***/ "./src/app/_modal/modal.module.ts":
/*!****************************************!*\
  !*** ./src/app/_modal/modal.module.ts ***!
  \****************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "./src/app/_modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ModalModule = class ModalModule {
};
ModalModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
        exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]]
    })
], ModalModule);



/***/ }),

/***/ "./src/app/_modal/modal.service.ts":
/*!*****************************************!*\
  !*** ./src/app/_modal/modal.service.ts ***!
  \*****************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ModalService = class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
};
ModalService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
], ModalService);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AppComponent = class AppComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'app';
    }
    //get isAuthorized() {
    //  return this.authService.isAuthorized();
    //}
    //get isAdmin() {
    //  return this.authService.hasRole(Role.Admin);
    //}
    logout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _notauthorized_notauthorized_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./notauthorized/notauthorized.component */ "./src/app/notauthorized/notauthorized.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _user_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/list-user/list-user.component */ "./src/app/user/list-user/list-user.component.ts");
/* harmony import */ var _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/add-user/add-user.component */ "./src/app/user/add-user/add-user.component.ts");
/* harmony import */ var _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/edit-user/edit-user.component */ "./src/app/user/edit-user/edit-user.component.ts");
/* harmony import */ var _user_aggrid_user_aggrid_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/aggrid-user/aggrid-user.component */ "./src/app/user/aggrid-user/aggrid-user.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/fesm2015/ag-grid-angular.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_modal */ "./src/app/_modal/index.ts");
/* harmony import */ var _user_ad_user_ad_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/ad-user/ad-user.component */ "./src/app/user/ad-user/ad-user.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ngx_user_ngx_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ngx-user/ngx-user.component */ "./src/app/ngx-user/ngx-user.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _renderer_button_renderer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./renderer/button-renderer.component */ "./src/app/renderer/button-renderer.component.ts");
/* harmony import */ var _button_cell_renderer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./button-cell-renderer.component */ "./src/app/button-cell-renderer.component.ts");
/* harmony import */ var _user_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/view-user/view-user.component */ "./src/app/user/view-user/view-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
































let AppModule = class AppModule {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    get isAuthorized() {
        return this.authService.isAuthorized();
    }
    get isAdmin() {
        return this.authService.isAdmin();
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] }
];
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
            _notauthorized_notauthorized_component__WEBPACK_IMPORTED_MODULE_15__["NotauthorizedComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
            _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__["ResetPasswordComponent"],
            _user_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_18__["ListUserComponent"],
            _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_19__["AddUserComponent"],
            _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_20__["EditUserComponent"],
            _user_aggrid_user_aggrid_user_component__WEBPACK_IMPORTED_MODULE_21__["AggridUserComponent"],
            _user_ad_user_ad_user_component__WEBPACK_IMPORTED_MODULE_24__["AdUserComponent"],
            _ngx_user_ngx_user_component__WEBPACK_IMPORTED_MODULE_26__["NgxUserComponent"],
            _renderer_button_renderer_component__WEBPACK_IMPORTED_MODULE_28__["ButtonRendererComponent"],
            _button_cell_renderer_component__WEBPACK_IMPORTED_MODULE_29__["BtnCellRenderer"],
            _user_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_30__["ViewUserComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_22__["AgGridModule"].withComponents([_button_cell_renderer_component__WEBPACK_IMPORTED_MODULE_29__["BtnCellRenderer"]]),
            _modal__WEBPACK_IMPORTED_MODULE_23__["ModalModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_25__["DataTablesModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_27__["NgxDatatableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
                { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
                { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"] },
                { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"] },
                { path: 'notauthorized', component: _notauthorized_notauthorized_component__WEBPACK_IMPORTED_MODULE_15__["NotauthorizedComponent"] },
                { path: 'forgotpassword', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"] },
                { path: 'resetpassword', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__["ResetPasswordComponent"] },
                { path: 'listuser', component: _user_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_18__["ListUserComponent"] },
                { path: 'adduser', component: _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_19__["AddUserComponent"] },
                { path: 'edituser', component: _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_20__["EditUserComponent"] },
                { path: 'aggriduser', component: _user_aggrid_user_aggrid_user_component__WEBPACK_IMPORTED_MODULE_21__["AggridUserComponent"] },
                { path: 'aduser', component: _user_ad_user_ad_user_component__WEBPACK_IMPORTED_MODULE_24__["AdUserComponent"] },
                { path: 'ngxuser', component: _ngx_user_ngx_user_component__WEBPACK_IMPORTED_MODULE_26__["NgxUserComponent"] },
                { path: 'viewuser', component: _user_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_30__["ViewUserComponent"] },
            ])
        ],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]])
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let AuthService = class AuthService {
    constructor(router, LoginService, http) {
        this.router = router;
        this.LoginService = LoginService;
        this.http = http;
        this.isLogin = false;
        this.url = 'http://localhost:58639/api/';
        const headerSettings = {};
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"](headerSettings);
    }
    isAuthorized() {
        if (localStorage.getItem("currentUser") === null) {
            return false;
        }
        else
            return true;
    }
    isAdmin() {
        if (localStorage.getItem("currentUserRole") === "Admin") {
            return true;
        }
        else
            return false;
    }
    logout() {
        this.LoginService.Logout();
        this.router.navigate(['/login']);
    }
    getUsers() {
        return this.http.get(this.url + 'User/GetUsers');
    }
    getUser(userId) {
        return this.http.get(this.url + 'User/GetUser/' + userId);
    }
    createUser(model) {
        //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.url + 'User/CreateUser', model, { headers: this.header });
    }
    updateUser(model) {
        //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.url + 'User/UpdateUser', model, { headers: this.header });
    }
    updateProfile(model) {
        //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.url + 'User/UpdateProfile', model, { headers: this.header });
    }
    deleteUser(userid) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.delete(this.url + '/DeleteUser?id=' + userid, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/button-cell-renderer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/button-cell-renderer.component.ts ***!
  \***************************************************/
/*! exports provided: BtnCellRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnCellRenderer", function() { return BtnCellRenderer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let BtnCellRenderer = class BtnCellRenderer {
    constructor(router) {
        this.router = router;
    }
    agInit(params) {
        this.params = params;
        this.label = this.params.label || null;
    }
    refresh(params) {
        throw new Error('Method not implemented.');
    }
    afterGuiAttached(params) {
        throw new Error('Method not implemented.');
    }
    btnClickedHandler() {
        this.params.clicked(this.params.value);
        localStorage.removeItem("editUserId");
        localStorage.setItem("editUserId", this.params.value);
        if (this.params.label === "Edit") {
            this.router.navigate(['edituser']);
        }
        else {
            this.router.navigate(['viewuser']);
        }
    }
    ngOnDestroy() {
        // no need to remove the button click handler 
        // https://stackoverflow.com/questions/49083993/does-angular-automatically-remove-template-event-listeners
    }
};
BtnCellRenderer.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
BtnCellRenderer = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'btn-cell-renderer',
        template: `
    <button (click)="btnClickedHandler($event)" class="btn btn-primary" style="width:70px">{{label}}</button>

  `,
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], BtnCellRenderer);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let DashboardComponent = class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        //this.UserForm = this.formbulider.group({
        //  UserName: ['', [Validators.required]],
        //  LoginName: ['', [Validators.required]],
        //  Password: ['', [Validators.required]],
        //  Email: ['', [Validators.required]],
        //  ContactNo: ['', [Validators.required]],
        //  Address: ['', [Validators.required]],
        //}); 
        if (localStorage.getItem("currentUser") === null) {
            this.router.navigate(['login']);
        }
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
DashboardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-dashboard',
        template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(router, LoginService) {
        this.router = router;
        this.LoginService = LoginService;
        this.model = {};
    }
    ngOnInit() {
    }
    reset() {
        debugger;
        if (confirm("Will send email now?")) {
            this.LoginService.Reset(this.model).subscribe(data => {
                debugger;
                if (data.Status == "Success") {
                    //  localStorage.setItem('currentUser', JSON.stringify(data.user));
                    //this.router.navigate(['login']);
                    //  debugger;
                    this.errorMessage = data.Message;
                }
                else {
                    this.errorMessage = data.Message;
                }
            }, error => {
                this.errorMessage = error.message;
            });
        }
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
ForgotPasswordComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-forgot-password',
        template: __importDefault(__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.Url = 'http://localhost:58639/api/';
        const headerSettings = {};
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerSettings);
    }
    Login(model) {
        debugger;
        var a = this.Url + 'UserLogin';
        return this.http.post(this.Url + 'UserLogin', model, { headers: this.header });
    }
    CreateUser(model) {
        //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.Url + 'User/CreateUser', model, { headers: this.header });
    }
    Reset(model) {
        var body = 'UserName=' + model.UserName;
        //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
        return this.http.post(this.Url + 'ForgotPassword', model, { headers: this.header });
    }
    Logout() {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentUserRole");
        localStorage.removeItem("currentUserFullName");
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LoginService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LoginService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LoginComponent = class LoginComponent {
    constructor(router, LoginService) {
        this.router = router;
        this.LoginService = LoginService;
        this.model = {};
    }
    ngOnInit() {
        sessionStorage.removeItem('UserName');
        sessionStorage.clear();
    }
    login() {
        debugger;
        this.LoginService.Login(this.model).subscribe(data => {
            debugger;
            if (data.Status == "Success") {
                localStorage.setItem('currentUser', data.user);
                localStorage.setItem('token', data.token);
                localStorage.setItem('currentUserFullName', data.user.fullName);
                localStorage.setItem('currentUserRole', data.user.role);
                localStorage.setItem('currentUserId', data.user.id);
                this.router.navigate(['dashboard']);
                debugger;
            }
            else {
                this.errorMessage = data.Message;
            }
        }, error => {
            this.errorMessage = error.message;
        });
    }
    ;
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n.nav-link {\r\n    color:white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let NavMenuComponent = class NavMenuComponent {
    constructor(router, LoginService, authService) {
        this.router = router;
        this.LoginService = LoginService;
        this.authService = authService;
        this.isExpanded = false;
        this.username = "";
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    get isAuthorized() {
        if (this.authService.isAuthorized()) {
            this.username = localStorage.getItem('currentUserFullName');
        }
        return this.authService.isAuthorized();
    }
    ngOnInit() {
        if (!this.isAuthorized) {
            this.router.navigate(['login']);
        }
    }
    get isAdmin() {
        return this.authService.isAdmin();
    }
    logout() {
        this.LoginService.Logout();
        this.router.navigate(['/login']);
    }
};
NavMenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], NavMenuComponent);



/***/ }),

/***/ "./src/app/ngx-user/ngx-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/ngx-user/ngx-user.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25neC11c2VyL25neC11c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ngx-user/ngx-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/ngx-user/ngx-user.component.ts ***!
  \************************************************/
/*! exports provided: NgxUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUserComponent", function() { return NgxUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let NgxUserComponent = class NgxUserComponent {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.rows = [];
        this.temp = [];
        this.columns = [{ prop: 'id' }, { name: 'Full Name' }, { name: 'User Name' }, { name: 'Role' }, { name: 'Email' }, { name: 'Phone' }, { name: 'Address' }, { name: 'Status' }];
    }
    ngOnInit() {
        //if (!window.localStorage.getItem('token')) {
        //  this.router.navigate(['login']);
        //  return;
        //}
        if (localStorage.getItem("currentUser") === null) {
            this.router.navigate(['login']);
        }
        else if (localStorage.getItem("currentUserRole") !== "Admin") {
            this.router.navigate(['notauthorized']);
        }
        this.apiService.getUsers()
            .subscribe(data => {
            this.temp = data;
            this.users = data;
        });
    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.fullName.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        //this.table.offset = 0;
    }
    addUser() {
        this.router.navigate(['adduser']);
    }
    ;
};
NgxUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
NgxUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ngx-user',
        template: __importDefault(__webpack_require__(/*! raw-loader!./ngx-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ngx-user/ngx-user.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./ngx-user.component.css */ "./src/app/ngx-user/ngx-user.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], NgxUserComponent);



/***/ }),

/***/ "./src/app/notauthorized/notauthorized.component.css":
/*!***********************************************************!*\
  !*** ./src/app/notauthorized/notauthorized.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGF1dGhvcml6ZWQvbm90YXV0aG9yaXplZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/notauthorized/notauthorized.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notauthorized/notauthorized.component.ts ***!
  \**********************************************************/
/*! exports provided: NotauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotauthorizedComponent", function() { return NotauthorizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NotauthorizedComponent = class NotauthorizedComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotauthorizedComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-notauthorized',
        template: __importDefault(__webpack_require__(/*! raw-loader!./notauthorized.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notauthorized/notauthorized.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./notauthorized.component.css */ "./src/app/notauthorized/notauthorized.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], NotauthorizedComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ProfileComponent = class ProfileComponent {
    constructor(router, apiService, formBuilder) {
        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        if (localStorage.getItem("currentUser") === null) {
            this.router.navigate(['login']);
        }
        let userId = localStorage.getItem("currentUserId");
        if (!userId) {
            alert("Invalid action.");
            //this.router.navigate(['list-user']);
            return;
        }
        else {
            this.apiService.getUser(userId)
                .subscribe(data => {
                //this.user = data;
                this.profileForm.setValue(data);
            });
        }
        this.profileForm = this.formBuilder.group({
            id: userId,
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            token: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    onSubmit() {
        this.apiService.updateProfile(this.profileForm.value)
            .subscribe(data => {
            if (data.Status === "Success") {
                alert('Profile updated successfully.');
                //this.router.navigate(['listuser']);
            }
            else {
                this.errorMessage = data.Message;
            }
        }, error => {
            this.errorMessage = error.Message;
        });
    }
    onCancel() {
        this.router.navigate(['listuser']);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-profile',
        template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let RegisterComponent = class RegisterComponent {
    constructor(router, LoginService) {
        this.router = router;
        this.LoginService = LoginService;
        this.model = {};
    }
    ngOnInit() {
        //this.UserForm = this.formbulider.group({
        //  UserName: ['', [Validators.required]],
        //  LoginName: ['', [Validators.required]],
        //  Password: ['', [Validators.required]],
        //  Email: ['', [Validators.required]],
        //  ContactNo: ['', [Validators.required]],
        //  Address: ['', [Validators.required]],
        //}); 
        if (localStorage.getItem("currentUser") === null) {
            this.router.navigate(['login']);
        }
        else if (localStorage.getItem("currentUserRole") !== "Admin") {
            this.router.navigate(['notauthorized']);
        }
    }
    register() {
        debugger;
        this.LoginService.CreateUser(this.model).subscribe(data => {
            debugger;
            //if (data.Status == "Success") {
            //  localStorage.setItem('currentUser', JSON.stringify(data.user));
            //  this.router.navigate(['register']);
            //  debugger;
            //}
            //else {
            //  this.errorMessage = data.Message;
            //}
        }, error => {
            this.errorMessage = error.message;
        });
    }
    ;
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }
];
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-register',
        template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/renderer/button-renderer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/renderer/button-renderer.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRendererComponent", function() { return ButtonRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
// Author: T4professor
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ButtonRendererComponent = class ButtonRendererComponent {
    agInit(params) {
        this.params = params;
        this.label = this.params.label || null;
    }
    refresh(params) {
        return true;
    }
    onClick($event) {
        if (this.params.onClick instanceof Function) {
            // put anything into params u want pass into parents component
            const params = {
                event: $event,
                rowData: this.params.node.data
                // ...something
            };
            this.params.onClick(params);
        }
    }
};
ButtonRendererComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-button-renderer',
        template: `
    <button type="button" (click)="onClick($event)">{{label}}</button>
    `
    })
], ButtonRendererComponent);



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(router, LoginService) {
        this.router = router;
        this.LoginService = LoginService;
        this.model = {};
    }
    ngOnInit() {
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
ResetPasswordComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-reset-password',
        template: __importDefault(__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./reset-password.component.css */ "./src/app/reset-password/reset-password.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/user/ad-user/ad-user.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/ad-user/ad-user.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWQtdXNlci9hZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user/ad-user/ad-user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/ad-user/ad-user.component.ts ***!
  \***************************************************/
/*! exports provided: AdUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdUserComponent", function() { return AdUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





function actionCellRenderer(params) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    // checks if the rowIndex matches in at least one of the editing cells
    let isCurrentRowEditing = editingCells.some((cell) => {
        return cell.rowIndex === params.node.rowIndex;
    });
}
class DataTablesResponse {
}
let AdUserComponent = class AdUserComponent {
    constructor(router, apiService, http) {
        this.router = router;
        this.apiService = apiService;
        this.http = http;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        //if (!window.localStorage.getItem('token')) {
        //  this.router.navigate(['login']);
        //  return;
        //}
        if (localStorage.getItem("currentUser") === null) {
            this.router.navigate(['login']);
        }
        const that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
        };
        if (localStorage.getItem("currentUserRole") === "Reader") {
            this.isNotReader = false;
        }
        else {
            this.isNotReader = true;
        }
        this.apiService.getUsers()
            .subscribe(data => {
            this.users = data;
            this.dtTrigger.next();
        });
        //this.dtOptions.ajax = (callback) => {
        //  //pass the data parameter to your service to access necessary paging info
        //  this.apiService.getUsers()
        //    .subscribe(resp => {
        //      that.data = resp.data;
        //      callback(
        //        data: []
        //      )
        //      console.log(that.data);
        //    });
        //}
        //this.dtOptions = {
        //  pagingType: 'full_numbers',
        //  pageLength: 2,
        //  serverSide: true,
        //  processing: true,
        //  "ajax": {
        //    url: 'http://localhost:58639/api/User/GetUsers',
        //    type: 'GET'
        //  },
        //  columns: [{ data: 'id' }, { data: 'fullName' }, { data: 'userName' }, { data: 'role' }, { data: 'email' }, { data: 'phone' }, { data: 'address' }, { data: 'status' }]
        //};
        //this.dataTable = $(this.table.nativeElement);
        //this.dataTable.DataTable(this.dtOptions);
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
    addUser() {
        this.router.navigate(['adduser']);
    }
    ;
    onEditButtonClick(user) {
        //this.api.startEditingCell({
        //  rowIndex: params.rowIndex,
        //  colKey: 'make'
        localStorage.removeItem("editUserId");
        localStorage.setItem("editUserId", user.id.toString());
        this.router.navigate(['edituser']);
    }
    editUser(user) {
        localStorage.removeItem("editUserId");
        localStorage.setItem("editUserId", user.id.toString());
        this.router.navigate(['edituser']);
    }
    ;
    viewUser(user) {
        localStorage.removeItem("editUserId");
        localStorage.setItem("editUserId", user.id.toString());
        this.router.navigate(['viewuser']);
    }
    ;
};
AdUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AdUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ad-user',
        template: __importDefault(__webpack_require__(/*! raw-loader!./ad-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/ad-user/ad-user.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./ad-user.component.css */ "./src/app/user/ad-user/ad-user.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AdUserComponent);



/***/ }),

/***/ "./src/app/user/add-user/add-user.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/add-user/add-user.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user/add-user/add-user.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/add-user/add-user.component.ts ***!
  \*****************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let AddUserComponent = class AddUserComponent {
    constructor(router, apiService, formBuilder) {
        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.model = {};
    }
    ngOnInit() {
        //this.UserForm = this.formbulider.group({
        //  UserName: ['', [Validators.required]],
        //  LoginName: ['', [Validators.required]],
        //  Password: ['', [Validators.required]],
        //  Email: ['', [Validators.required]],
        //  ContactNo: ['', [Validators.required]],
        //  Address: ['', [Validators.required]],
        //}); 
        if (localStorage.getItem("currentUser") === null) {
            this.router.navigate(['login']);
        }
        else if (localStorage.getItem("currentUserRole") !== "Admin") {
            this.router.navigate(['notauthorized']);
        }
        this.addForm = this.formBuilder.group({
            id: ['1'],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            token: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    onSubmit() {
        this.apiService.createUser(this.addForm.value)
            .subscribe(data => {
            if (data.Status === "Success") {
                alert('User created successfully.');
                this.router.navigate(['listuser']);
            }
            else {
                //alert(data.message);
                this.errorMessage = data.Message;
            }
        }, error => {
            this.errorMessage = error.Message;
        });
    }
    onCancel() {
        this.router.navigate(['aggriduser']);
    }
};
AddUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
AddUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-add-user',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/add-user/add-user.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./add-user.component.css */ "./src/app/user/add-user/add-user.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], AddUserComponent);



/***/ }),

/***/ "./src/app/user/aggrid-user/aggrid-user.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/aggrid-user/aggrid-user.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWdncmlkLXVzZXIvYWdncmlkLXVzZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user/aggrid-user/aggrid-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/aggrid-user/aggrid-user.component.ts ***!
  \***********************************************************/
/*! exports provided: AggridUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggridUserComponent", function() { return AggridUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_button_cell_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/button-cell-renderer.component */ "./src/app/button-cell-renderer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function dateFormatter(datestring) {
    var date = new Date(datestring);
    var dateAsString = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
    return dateAsString;
}
var numberValueFormatter = function (params) {
    return params.value.toFixed(0);
};
var numberFilterParams = {
    buttons: ['apply', 'reset'],
    closeOnApply: true
};
var dateFilterParams = {
    comparator: function (filterLocalDateAtMidnight, cellValue) {
        var date = new Date(cellValue);
        var dateAsString = ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + date.getFullYear();
        if (dateAsString == null)
            return -1;
        var dateParts = dateAsString.split('/');
        var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
            return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
            return 1;
        }
    },
    browserDatePicker: true,
    minValidYear: 2000,
    buttons: ['apply', 'reset'],
    closeOnApply: true
};
function getTextValue(cssSelector) {
    return document.querySelector(cssSelector).value;
}
function getNumericValue(cssSelector) {
    var value = parseFloat(getTextValue(cssSelector));
    if (isNaN(value)) {
        var message = 'Invalid number entered in ' + cssSelector + ' field';
        alert(message);
        throw new Error(message);
    }
    return value;
}
function myColumnWidthCallback(params) {
    var originalWidth = params.column.getActualWidth();
    if (params.index < 7) {
        return originalWidth;
    }
    return 30;
}
function getParams() {
    return {
        suppressQuotes: getValue('none'),
        columnSeparator: getValue('none'),
        //customHeader: 'none',
        //customFooter: 'none',
        columnKeys: ['fullName', 'userName', 'email', 'phone', 'address', 'role', 'status']
    };
}
function getValue(text) {
    //var text = document.querySelector(inputSelector).value;
    switch (text) {
        case 'string':
            return ('Here is a comma, and a some "quotes". You can see them using the\n' +
                'api.getDataAsCsv() button but they will not be visible when the downloaded\n' +
                'CSV file is opened in Excel because string content passed to\n' +
                'customHeader and customFooter is not escaped.');
        case 'array':
            return [
                [],
                [
                    {
                        data: {
                            value: 'Here is a comma, and a some "quotes".',
                            type: 'String',
                        },
                    },
                ],
                [
                    {
                        data: {
                            value: 'They are visible when the downloaded CSV file is opened in Excel because custom content is properly escaped (provided that suppressQuotes is not set to true)',
                            type: 'String',
                        },
                    },
                ],
                [
                    {
                        data: {
                            value: 'this cell:',
                            type: 'String',
                        },
                        mergeAcross: 1,
                    },
                    {
                        data: {
                            value: 'is empty because the first cell has mergeAcross=1',
                            type: 'String',
                        },
                    },
                ],
                [],
            ];
        case 'none':
            return;
        case 'tab':
            return '\t';
        case 'true':
            return true;
        case 'none':
            return;
        default:
            return text;
    }
}
let AggridUserComponent = class AggridUserComponent {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.rowDataClicked1 = {};
        this.rowDataClicked2 = {};
        this.frameworkComponents = {
            btnCellRenderer: src_app_button_cell_renderer_component__WEBPACK_IMPORTED_MODULE_3__["BtnCellRenderer"]
        };
        this.defaultColDef = { resizable: true };
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.apiService.getUsers()
            .subscribe(data => {
            this.users = data;
        });
    }
    addUser() {
        this.router.navigate(['adduser']);
    }
    ;
    ngOnInit() {
        if (localStorage.getItem("currentUser") === null) {
            this.router.navigate(['login']);
        }
        this.apiService.getUsers()
            .subscribe(data => {
            this.users = data;
        });
        //var gridOptions = {
        //  defaultColDef: {
        //    resizable: true,
        //  },
        //  columnDefs: columnDefs,
        //  rowData: null,
        //  onColumnResized: function (params) {
        //    console.log(params);
        //  },
        //};
        //  this.agGrid.columnApi.setColumnsVisible(['model'], false);
        //let filterInstance = this.gridOptions.api.getFilterInstance("name_col");
        if (localStorage.getItem("currentUserRole") === "Reader") {
            this.columnDefs = [{ field: 'id', width: '80', sortable: true, filter: true },
                { field: 'fullName', sortable: true, filter: true, width: '150' },
                { field: 'userName', sortable: true, filter: true, width: '120' },
                { field: 'email', sortable: true, filter: true, width: '150' },
                { field: 'phone', sortable: true, filter: true, width: '120' },
                { field: 'address', sortable: true, filter: true, width: '150' },
                { field: 'role', sortable: true, filter: true, width: '100' },
                { field: 'status', sortable: true, filter: true, width: '100' },
                {
                    field: 'createdDate', sortable: true, width: '150', filter: 'agDateColumnFilter', filterParams: dateFilterParams,
                    cellRenderer: (data) => {
                        return data.value ? (new Date(data.value)).toLocaleDateString() : '';
                    }
                },
                {
                    field: 'id',
                    headerName: '',
                    cellRenderer: 'btnCellRenderer',
                    cellRendererParams: {
                        clicked: function (field) {
                            //alert(`${field} was clicked`);
                        },
                        label: 'View'
                    },
                    width: 90,
                }
            ];
        }
        else {
            this.columnDefs = [{
                    field: 'id', width: '80', sortable: true, filter: 'agNumberColumnFilter',
                    filterParams: numberFilterParams
                },
                { field: 'fullName', sortable: true, filter: true, width: '120' },
                { field: 'userName', sortable: true, filter: true, width: '120' },
                { field: 'email', sortable: true, filter: true, width: '120' },
                { field: 'phone', sortable: true, filter: true, width: '120' },
                { field: 'address', sortable: true, filter: true, width: '120' },
                { field: 'role', sortable: true, filter: true, width: '100' },
                { field: 'status', sortable: true, filter: true, width: '100' },
                {
                    field: 'createdDate', sortable: true, width: '150', filter: 'agDateColumnFilter', filterParams: dateFilterParams,
                    cellRenderer: (data) => {
                        return dateFormatter(data.value);
                    }
                },
                {
                    field: 'id',
                    headerName: '',
                    suppressColumnsToolPanel: true,
                    suppressFiltersToolPanel: true,
                    cellRenderer: 'btnCellRenderer',
                    cellRendererParams: {
                        clicked: function (field) {
                            //alert(`${field} was clicked`);
                        },
                        label: 'Edit'
                    },
                    width: 90,
                },
                {
                    field: 'id',
                    headerName: '',
                    cellRenderer: 'btnCellRenderer',
                    cellRendererParams: {
                        clicked: function (field) {
                            //alert(`${field} was clicked`);
                        },
                        label: 'View'
                    },
                    width: 90,
                }
            ];
        }
    }
    onBtExport() {
        var params = getParams();
        if (params.suppressQuotes || params.columnSeparator) {
            alert('NOTE: you are downloading a file with non-standard quotes or separators - it may not render correctly in Excel.');
        }
        this.gridApi.exportDataAsCsv(params);
    }
    onBtnClick1(e) {
        this.rowDataClicked1 = e.rowData;
    }
    onBtnClick2(e) {
        this.rowDataClicked2 = e.rowData;
    }
    onEditButtonClick(user) {
        //this.api.startEditingCell({
        //  rowIndex: params.rowIndex,
        //  colKey: 'make'
        localStorage.removeItem("editUserId");
        localStorage.setItem("editUserId", user.id.toString());
        this.router.navigate(['edituser']);
    }
};
AggridUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AggridUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-aggrid-user',
        template: __importDefault(__webpack_require__(/*! raw-loader!./aggrid-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/aggrid-user/aggrid-user.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./aggrid-user.component.css */ "./src/app/user/aggrid-user/aggrid-user.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AggridUserComponent);



/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.ts ***!
  \*******************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_modal */ "./src/app/_modal/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let EditUserComponent = class EditUserComponent {
    constructor(router, apiService, formBuilder, modalService) {
        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
    }
    ngOnInit() {
        if (localStorage.getItem("currentUser") === null) {
            this.router.navigate(['login']);
        }
        else if (localStorage.getItem("currentUserRole") !== "Admin") {
            this.router.navigate(['notauthorized']);
        }
        let userId = localStorage.getItem("editUserId");
        if (!userId) {
            alert("Invalid action.");
            this.router.navigate(['aggriduser']);
            return;
        }
        else {
            this.apiService.getUser(userId)
                .subscribe(data => {
                this.user = data;
                this.editForm.setValue(data);
            });
        }
        this.editForm = this.formBuilder.group({
            id: [''],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            token: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    openModal(id) {
        this.modalService.open(id);
    }
    closeModal(id, status) {
        if (status === 'Ok') {
            this.modalService.close(id);
            //this.editForm.controls['password'].setValue(selected.id);
        }
        else {
            this.editForm.setValue(this.user);
            this.modalService.close(id);
        }
    }
    onSubmit() {
        this.apiService.updateUser(this.editForm.value)
            .subscribe(data => {
            if (data.Status === "Success") {
                alert('User updated successfully.');
                this.router.navigate(['aggriduser']);
            }
            else {
                this.errorMessage = data.Message;
            }
        }, error => {
            this.errorMessage = error.Message;
        });
    }
    onCancel() {
        this.router.navigate(['aggriduser']);
    }
};
EditUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_modal__WEBPACK_IMPORTED_MODULE_4__["ModalService"] }
];
EditUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit-user',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit-user/edit-user.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./edit-user.component.css */ "./src/app/user/edit-user/edit-user.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_modal__WEBPACK_IMPORTED_MODULE_4__["ModalService"]])
], EditUserComponent);



/***/ }),

/***/ "./src/app/user/list-user/list-user.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/list-user/list-user.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbGlzdC11c2VyL2xpc3QtdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/list-user/list-user.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/list-user/list-user.component.ts ***!
  \*******************************************************/
/*! exports provided: ListUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserComponent", function() { return ListUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ListUserComponent = class ListUserComponent {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    ngOnInit() {
        //if (!window.localStorage.getItem('token')) {
        //  this.router.navigate(['login']);
        //  return;
        //}
        if (localStorage.getItem("currentUser") === null) {
            this.router.navigate(['login']);
        }
        if (localStorage.getItem("currentUserRole") === "Reader") {
            this.isNotReader = false;
        }
        else {
            this.isNotReader = true;
        }
        this.apiService.getUsers()
            .subscribe(data => {
            this.users = data;
        });
    }
    deleteUser(userid) {
        this.apiService.deleteUser(userid)
            .subscribe(data => {
            //this.users = this.users.filter(u => u.id !== userid);
        });
    }
    ;
    editUser(user) {
        localStorage.removeItem("editUserId");
        localStorage.setItem("editUserId", user.id.toString());
        this.router.navigate(['edituser']);
    }
    ;
    viewUser(user) {
        localStorage.removeItem("editUserId");
        localStorage.setItem("editUserId", user.id.toString());
        this.router.navigate(['viewuser']);
    }
    ;
    addUser() {
        this.router.navigate(['adduser']);
    }
    ;
};
ListUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ListUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-list-user',
        template: __importDefault(__webpack_require__(/*! raw-loader!./list-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/list-user/list-user.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./list-user.component.css */ "./src/app/user/list-user/list-user.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], ListUserComponent);



/***/ }),

/***/ "./src/app/user/view-user/view-user.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/view-user/view-user.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdmlldy11c2VyL3ZpZXctdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/view-user/view-user.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/view-user/view-user.component.ts ***!
  \*******************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_modal */ "./src/app/_modal/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let ViewUserComponent = class ViewUserComponent {
    constructor(router, apiService, formBuilder, modalService) {
        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
    }
    ngOnInit() {
        if (localStorage.getItem("currentUser") === null) {
            this.router.navigate(['login']);
        }
        else if (localStorage.getItem("currentUserRole") !== "Admin") {
            this.router.navigate(['notauthorized']);
        }
        let userId = localStorage.getItem("editUserId");
        if (!userId) {
            alert("Invalid action.");
            this.router.navigate(['aggriduser']);
            return;
        }
        else {
            this.apiService.getUser(userId)
                .subscribe(data => {
                this.user = data;
                this.editForm.setValue(data);
            });
        }
        this.editForm = this.formBuilder.group({
            id: [''],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            token: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    openModal(id) {
        this.modalService.open(id);
    }
    closeModal(id, status) {
        if (status === 'Ok') {
            this.modalService.close(id);
            //this.editForm.controls['password'].setValue(selected.id);
        }
        else {
            this.editForm.setValue(this.user);
            this.modalService.close(id);
        }
    }
    onSubmit() {
        this.apiService.updateUser(this.editForm.value)
            .subscribe(data => {
            if (data.Status === "Success") {
                alert('User updated successfully.');
                this.router.navigate(['aggriduser']);
            }
            else {
                this.errorMessage = data.Message;
            }
        }, error => {
            this.errorMessage = error.Message;
        });
    }
    onCancel() {
        this.router.navigate(['aggriduser']);
    }
};
ViewUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_modal__WEBPACK_IMPORTED_MODULE_4__["ModalService"] }
];
ViewUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-view-user',
        template: __importDefault(__webpack_require__(/*! raw-loader!./view-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/view-user/view-user.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./view-user.component.css */ "./src/app/user/view-user/view-user.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_modal__WEBPACK_IMPORTED_MODULE_4__["ModalService"]])
], ViewUserComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\EDCNew\EDCOperationsWebApp\EDCOperations\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map