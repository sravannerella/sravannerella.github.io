(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid px-0\">\n\t\n\t<div class=\"row h60vh bg-gradient row\">\n\t\t<div class=\"col-sm-12 col-md-6 my-5 d-flex align-items-center\">\n\t\t\t<h1 class=\"text-capitalize mx-auto font-weight-bold\">Hi, \n\t\t\t\t<span><br>I'm <span class=\"text-primary\">Sravan Nerella</span></span> <br>\n\t\t\t\t<span class=\"lead text-monospace animate-monospace\">Full Stack Web Developer.</span> <br>\n\t\t\t\t<span class=\"lead text-monospace text-muted\">Front End Designer / Angular / Ionic</span>\n\t\t\t</h1>\n\t\t</div>\n\t\t<div class=\"col-sm-12 col-md-6 d-flex my-5 align-items-center\">\n\t\t\t<lottie-animation-view [options]=\"lottieConfig\" class=\"fill-svg\" (animCreated)=\"handleAnimation($event)\"></lottie-animation-view>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"row my-auto bg-img-build min-h-350\">\n\t\t<div class=\"col-sm-12 col-md-6 d-flex my-5 align-items-center\">\n\t\t\t<!-- <h2 class=\"text-center mx-auto text-monospace\"><span class=\"text-violet\">let</span> me = <span class=\"text-violet\">this</span>.<span class=\"text-info\">guy</span></h2> -->\n\t\t\t<h2 class=\"text-center mx-auto font-weight-bold\">About <span class=\"text-primary\">Me</span></h2>\n\t\t</div>\n\t\t<div class=\"col-sm-12 col-md-6 d-flex my-5 align-items-center\">\n\t\t\t<p class=\"lead text-monospace text-center mx-auto\">\n\t\t\t\t<span class=\"text-capitalize\"><span class=\"text-success\">Builds</span> and <span class=\"text-info\">designs</span></span><br><br>\n\t\t\t\t<span class=\"text-warning\">Web</span> &amp; <span class=\"text-primary\">Mobile</span> <br> <br>\n\t\t\t\tApps\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t\n\n\t<div class=\"d-flex align-items-center my-auto bg-light row\">\n\t\t<div class=\"text-center mx-auto my-5 container\">\n\t\t\t<h2 class=\"font-weight-bold\">Expectations will never satisfy you, and comparison will never let you enjoy your achievements. Therefore, stop expecting more and comparing with others. \n\t\t\t\t</h2>\n\t\t\t<p class=\"mt-3 lead text-monospace text-right\">- Sravan Nerella</p>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row bg-img-code\">\n\t\t<div class=\"col-sm-12 col-md-6 my-5 d-flex align-items-center my-5\">\n\t\t\t<h2 class=\"mx-auto text-center font-weight-bold\">I <span class=\"text-primary\">Code</span> In</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-12 col-md-6 my-5 d-flex align-items-center\">\n\t\t\t<div class=\"mx-auto mw-400px\">\n\t\t\t\t<app-langs></app-langs>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"mr-15 bg-light\">\n\t\t<h2 class=\"text-center text-capitalize font-weight-bold pt-4\">Personal Projects</h2>\n\t\t<br>\n\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t<ngb-carousel class=\"w-100\">\n\t\t\t\t<ng-template ngbSlide *ngFor=\"let image of images; index as i\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 my-5 d-flex align-items-center\">\n\t\t\t\t\t\t\t<p class=\"lead text-center mx-auto\">\n\t\t\t\t\t\t\t\t<span class=\"text-{{image.color}} mx-auto text-center font-30 font-weight-bold\">{{image.name}}</span><br>\n\t\t\t\t\t\t\t\t<span class=\"text-monospace d-block mt-3\">{{image.description}}</span>\n\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t<lottie-animation-view [options]=\"projectConfigs[i]\" [width]=\"150\" [height]=\"150\" class=\"fill-svg\" (animCreated)=\"handleAnimation($event)\"></lottie-animation-view>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 my-5 d-flex align-items-center\">\n\t\t\t\t\t\t\t<div class=\"box\">\n\t\t\t\t\t\t\t\t<img [src]=\"image.img\" alt=\"image.name\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-carousel>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row my-auto bg-img-email min-h-350\">\n\t\t<div class=\"col-sm-12 col-md-6 d-flex my-5 align-items-center\">\n\t\t\t<h2 class=\"mx-auto text-center font-weight-bold\">Akhil <span class=\"text-primary\">Sravan</span> Kumar</h2>\n\t\t</div>\n\t\t<div class=\"col-sm-12 col-md-6 d-flex my-5 align-items-center\">\n\t\t\t<div class=\"mx-auto mw-400px\">\n\t\t\t\t<h3 class=\"text-primary text-center text-capitalize\">Wanna Reach me ?</h3>\n\t\t\t\t<p class=\"text-center\">Provide me your contact email, I will get back with you.</p>\n\t\t\t\t<br>\n\t\t\t\t<div>\n\t\t\t\t\t<input type=\"text\" class=\"shadow-lg p-3 w-300px\">\n\t\t\t\t\t<input type=\"submit\" value=\"Email Me\" class=\"shadow p-3 bg-primary text-white\">\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<footer class=\"mr-15 bg-dark text-white\">\n\t\t<h6 class=\"w-100 text-center pt-4 text-monospace text-info\">Catch Me</h6>\n\t\t<h6 class=\"w-100 text-center\">@</h6>\n\t\t<ul class=\"nav flex-sm-row justify-content-center pb-4\">\n\t\t\t<li class=\"nav-item p-2 icon-blue\">\n\t\t\t\t<i class=\"fab fa-facebook-f\"></i>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item p-2 icon-red\">\n\t\t\t\t<i class=\"fab fa-pinterest-p\"></i>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item p-2 icon-violet\">\n\t\t\t\t<i class=\"fab fa-github-alt\"></i>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item p-2 icon-info\">\n\t\t\t\t<i class=\"fab fa-slack-hash\"></i>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item p-2 icon-blue\">\n\t\t\t\t<i class=\"fab fa-linkedin-in\"></i>\n\t\t\t</li>\n\t\t</ul>\n\t</footer>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-violet {\n  color: #A73E79 !important; }\n\n.text-darkBlue {\n  color: #33315F; }\n\n.text-orange {\n  color: #D35936 !important; }\n\n.bg-dark {\n  background: #212121 !important; }\n\n.bg-img, .bg-img-build, .bg-img-code, .bg-img-email {\n  background-size: 150px 150px !important;\n  background-position: center !important; }\n\n.bg-gradient {\n  background: url('background.png') no-repeat; }\n\n@-webkit-keyframes typing {\n  from {\n    width: 0; } }\n\n@-webkit-keyframes blink-caret {\n  50% {\n    border-color: transparent; } }\n\n.animate-monospace {\n  border-right: .1em solid black;\n  width: 16.5em;\n  width: 26ch;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-animation: typing 2s steps(21, end), blink-caret 0.5s step-end infinite alternate;\n          animation: typing 2s steps(21, end), blink-caret 0.5s step-end infinite alternate; }\n\n.bg-img-build {\n  background: url('build.png') no-repeat; }\n\n@media screen and (max-width: 960px) {\n  .bg-img-build {\n    background: linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('build.png') no-repeat; } }\n\n.bg-img-code {\n  background: url('code.png') no-repeat; }\n\n@media screen and (max-width: 960px) {\n  .bg-img-code {\n    background: linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('code.png') no-repeat; } }\n\n.bg-img-email {\n  background: url('email.png') no-repeat; }\n\n@media screen and (max-width: 960px) {\n  .bg-img-email {\n    background: linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('email.png') no-repeat; } }\n\n@media screen and (max-width: 940px) {\n  .fill-svg {\n    display: flex;\n    flex-direction: row;\n    width: 100%; } }\n\n.t-slant {\n  background: red;\n  -webkit-transform: perspective(320px) rotateY(13deg);\n          transform: perspective(320px) rotateY(13deg);\n  width: 120%; }\n\n.g-box-shadow {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); }\n\ninput, input[type=\"submit\"] {\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 4px 0 0 4px;\n  font-size: 13px;\n  box-shadow: none;\n  font-weight: 500;\n  height: 100%;\n  outline: 0;\n  flex-grow: 1; }\n\ninput[type=\"submit\"] {\n  border-radius: 0 4px 4px 0;\n  height: 48px; }\n\nngb-carousel.w-100.carousel.slide {\n  outline: none; }\n\nli[id*=\"ngb-slide-\"] {\n  background: #A73E79; }\n\nli[id*=\"ngb-slide-\"].active {\n  background: #212121; }\n\n.box {\n  text-align: center;\n  width: 100%; }\n\n.img-150 {\n  width: 150px;\n  height: 150px; }\n\na.carousel-control-prev, a.carousel-control-next {\n  background: #212121;\n  opacity: 1;\n  border-radius: 50%;\n  height: 75px;\n  width: 75px;\n  margin-left: 50px;\n  margin-right: 50px;\n  margin-top: calc(496px / 2 - 50px);\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.2); }\n\n.min-h-350 {\n  min-height: 350px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(config) {
        this.title = 'app';
        this.projectConfigs = [];
        this.animationSpeed = 1;
        this.images = [
            { img: "../assets/SyntaxPacket.png", name: "Syntax Packet", color: "darkBlue", description: "A customizable modern file manager" },
            { img: "../assets/flickmatics.png", name: "FlickMatics", color: "danger", description: "Personalized Movie Blogger for all" },
            { img: "../assets/hashcode.png", name: "#Code", color: "violet", description: "A hackable text editor to your liking" }
        ];
        config.interval = 5000;
        config.wrap = true;
        config.showNavigationArrows = true;
        config.keyboard = false;
        config.pauseOnHover = false;
        this.lottieConfig = {
            path: 'assets/cycle_animation.json',
            autoplay: true,
            loop: true
        };
        var imgs = ['layers', 'spirit_geek', 'animated_laptop_'];
        for (var i in imgs) {
            this.projectConfigs.push({
                path: 'assets/' + imgs[i] + '.json',
                autoplay: true,
                loop: true
            });
        }
    }
    AppComponent.prototype.handleAnimation = function (anim) {
        this.anim = anim;
        this.anim.setSpeed(2);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _langs_langs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./langs/langs.component */ "./src/app/langs/langs.component.ts");
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-lottie */ "./node_modules/ng-lottie/dist/esm/src/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _langs_langs_component__WEBPACK_IMPORTED_MODULE_4__["LangsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieAnimationViewModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/langs/langs.component.html":
/*!********************************************!*\
  !*** ./src/app/langs/langs.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center text-monospace\">\n\t<div class=\"col p-2 pb-4\" *ngFor=\"let app of apps\">\n\t\t<img src=\"./assets/{{app.icon}}\" alt=\"{{app.name}}\" class=\"img-75\">\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/langs/langs.component.scss":
/*!********************************************!*\
  !*** ./src/app/langs/langs.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/langs/langs.component.ts":
/*!******************************************!*\
  !*** ./src/app/langs/langs.component.ts ***!
  \******************************************/
/*! exports provided: LangsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangsComponent", function() { return LangsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LangsComponent = /** @class */ (function () {
    function LangsComponent() {
        this.apps = [
            {
                name: "HTML",
                icon: "html.png"
            }, {
                name: "CSS",
                icon: "css.png"
            }, {
                name: "JavaScript",
                icon: "js.png"
            }, {
                name: "Angular",
                icon: "angular.png"
            }, {
                name: "Bootstrap",
                icon: "bootstrap.png"
            }, {
                name: "Sass",
                icon: "sass.png"
            }, {
                name: "Ionic",
                icon: "ionic.png"
            }, {
                name: "Python",
                icon: "python.png"
            }, {
                name: "MongoDB",
                icon: "mongo.png"
            }, {
                name: "Laravel",
                icon: "laravel.png"
            }, {
                name: "Photoshop",
                icon: "photoshop.png"
            }, {
                name: "Swift",
                icon: "swift.png"
            }
        ];
    }
    LangsComponent.prototype.ngOnInit = function () {
    };
    LangsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-langs',
            template: __webpack_require__(/*! ./langs.component.html */ "./src/app/langs/langs.component.html"),
            styles: [__webpack_require__(/*! ./langs.component.scss */ "./src/app/langs/langs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LangsComponent);
    return LangsComponent;
}());



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
var environment = {
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sravannerella/Documents/My Projects/profile/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map