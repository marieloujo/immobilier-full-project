require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./home/home.module.ts",
		"vendor",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./detail/detail.component.ts");



var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "detail", component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__["DetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app.component.html":
/***/ (function(module, exports) {

module.exports = "<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __importDefault(__webpack_require__("./app.component.html")).default
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nFor example, the following CSS rule changes the font size of all UI\ncomponents that have the btn class name.\n"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":[".fa"],"declarations":[{"type":"declaration","property":"font-family","value":"\"FontAwesome\""}]},{"type":"comment","comment":"\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n"},{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./detail/detail.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./detail/detail.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar{\n  background-color:transparent;\n}\n\n#detail-page-background{        \n  background-image: url(\"~/images/layer18.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  /* margin-top:-30; */\n}"

/***/ }),

/***/ "./detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar flat=\"true\" backgroundColor=\"#FFFFFF\" color=\"#000000\">\n</ActionBar>\n\n\n<GridLayout orientation=\"vertical\" width=\"100%\" height=\"100%\" columns=\"*\"\n    rows=\"*,auto\" [marginTop]='this.isIOS ? \"-20\" : \"\"'>\n\n    <StackLayout col=\"0\" row=\"0\" backgroundColor=\"#f8f8f8\">\n        <GridLayout id=\"detail-page-background\" columns=\"*\" rows=\"auto,*,auto\"\n            height=\"200\">\n\n            <GridLayout columns=\"auto,*,auto\" rows=\"auto\" col=\"0\" row=\"0\">\n                <Image col=\"0\" row=\"0\" marginLeft=\"20\" marginTop=\"10\" height=\"25\"\n                    width=\"35\" (tap)=\"goBack()\" src=\"~/images/shape5@3x.png\"></Image>\n\n                <Button col=\"2\" row=\"0\" class=\"btn btn-rounded-sm\" padding=\"5\" textTransform=\"none\"\n                    backgroundColor=\"#FFFFFF\" color=\"#3b75ff\" text=\"Make a Sponsor\"\n                    fontSize=\"12\" height=\"25\"></Button>\n            </GridLayout>\n\n            <GridLayout columns=\"auto,*,auto\" rows=\"auto\" col=\"0\" row=\"2\"\n                marginBottom=\"20\">\n                <Label col=\"0\" row=\"0\" class=\"font-weight-bold\" paddingLeft=\"20\"\n                    fontSize=\"30\" color=\"#FFFFFF\" text=\"Taylor Swift\"></Label>\n                <Image col=\"2\" row=\"0\" marginRight=\"10\" height=\"45\" width=\"45\"\n                    src=\"~/images/shape7@3x.png\"></Image>\n            </GridLayout>\n\n\n        </GridLayout>\n\n        <Label class=\"font-weight-bold\" marginTop=\"10\" paddingLeft=\"10\"\n            fontSize=\"20\" color=\"#333333\" text=\"Top Songs\"></Label>\n\n        <ListView class=\"list-group\" [items]=\"listViewData\" (itemTap)=\"onItemTap($event)\"\n            height=\"500\" backgroundColor=\"#f8f8f8\">\n            <ng-template let-song=\"item\">\n                <GridLayout orientation=\"horizontal\" class=\"list-group-item\"\n                    rows=\"auto\" columns=\"auto,*,auto\">\n                    <Image col=\"0\" row=\"0\" [src]=\"song.imageUrl\" height=\"75\"\n                        width=\"75\"></Image>\n                    <StackLayout col=\"1\" row=\"0\" marginLeft=\"15\">\n                        <Label marginTop=\"5\" paddingRight=\"5\" [text]=\"song.title\"\n                            class=\"list-group-item-heading font-weight-bold\"\n                            color=\"#333333\"></Label>\n                        <Label marginTop=\"5\" [text]=\"song.artist\" color=\"#999999\"></Label>\n                        <Label marginTop=\"5\" [text]=\"song.year\" color=\"#999999\"></Label>\n                    </StackLayout>\n                    <Label col=\"2\" row=\"0\" horizontalAlignment=\"right\" color=\"#b9b9b9\"\n                        fontSize=\"24\" paddingRight=\"5\" class=\"fa\" text=\"&#xf142;\"></Label>\n\n                </GridLayout>\n            </ng-template>\n        </ListView>\n    </StackLayout>\n\n    <StackLayout col=\"0\" row=\"1\" orientation=\"horizontal\" backgroundColor=\"#FFFFFF\"\n        height=\"60\">\n        <GridLayout rows=\"*\" columns=\"*,*,*,*,*\">\n            <Image col=\"0\" row=\"0\" (tap)=\"onButtonTap()\" height=\"25\" width=\"25\"\n                margin=\"10\" src=\"~/images/shape2@3x.png\"></Image>\n            <Image col=\"1\" row=\"0\" (tap)=\"onButtonTap()\" height=\"25\" width=\"25\"\n                margin=\"10\" src=\"~/images/shape1@3x.png\"></Image>\n            <Image col=\"2\" row=\"0\" (tap)=\"onButtonTap()\" height=\"60\" width=\"60\"\n                margin=\"10\" src=\"~/images/home@3x.png\"></Image>\n            <Image col=\"3\" row=\"0\" (tap)=\"onButtonTap()\" height=\"25\" width=\"25\"\n                margin=\"10\" src=\"~/images/shape3@3x.png\"></Image>\n            <Image col=\"4\" row=\"0\" (tap)=\"onButtonTap()\" height=\"25\" width=\"25\"\n                margin=\"10\" src=\"~/images/icon04@3x.png\"></Image>\n        </GridLayout>\n    </StackLayout>\n</GridLayout>"

/***/ }),

/***/ "./detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ui_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var ui_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ui_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);



var frame = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var platform = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(page, routerExtensions) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.textFieldValue = "";
        this.listViewData = [
            {
                title: "I Don't Wanna Live Forever (Fifty Shades of Grey)",
                artist: "Taylor Swift, Zayn Malik",
                year: "2016",
                imageUrl: "~/images/layer21@3x.png"
            },
            {
                title: "Blank Space",
                artist: "Taylor Swift",
                year: "2014",
                imageUrl: "~/images/layer20@3x.png"
            },
            {
                title: "End Game",
                artist: "Taylor Swift, Ed Sheeran, Future",
                year: "2017",
                imageUrl: "~/images/layer19@3x.png"
            },
            {
                title: "Love Story",
                artist: "Taylor Swift",
                year: "2009",
                imageUrl: "~/images/layer22@3x.png"
            },
            {
                title: "Everything Has Changed",
                artist: "Taylor Swift, Ed Sheeran",
                year: "2012",
                imageUrl: "~/images/layer23@3x.png"
            },
            {
                title: "Teardrops On My Guitar",
                artist: "Taylor Swift",
                year: "2006",
                imageUrl: "~/images/layer24@3x.png"
            },
        ];
        page.actionBarHidden = true;
        if (platform.isIOS) {
            this.isIOS = true;
            page.statusBarStyle = "light";
        }
        else {
            page.backgroundSpanUnderStatusBar = true;
            this.isIOS = false;
        }
    }
    DetailComponent.prototype.onItemTap = function (args) {
        console.log('Item with index: ' + args.index + ' tapped');
    };
    DetailComponent.prototype.onButtonTap = function () {
        console.log("Button was pressed");
    };
    DetailComponent.prototype.onSearchSubmit = function (args) {
        var searchBar = args.object;
        console.log("You are searching for " + searchBar.text);
    };
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    DetailComponent.ctorParameters = function () { return [
        { type: ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Detail",
            template: __importDefault(__webpack_require__("./detail/detail.component.html")).default,
            styles: [__importDefault(__webpack_require__("./detail/detail.component.css")).default]
        }),
        __metadata("design:paramtypes", [ui_page__WEBPACK_IMPORTED_MODULE_1__["Page"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_cardview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-cardview/cardview.js");
/* harmony import */ var nativescript_cardview__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_cardview__WEBPACK_IMPORTED_MODULE_4__);

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        

var frame = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var platform = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");



var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_3__["registerElement"])('CardView', function () { return nativescript_cardview__WEBPACK_IMPORTED_MODULE_4__["CardView"]; });
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"main.js","name":"tns-template-blank-ng","version":"3.1.1"};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUNYO0FBRTVELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTtJQUMvRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHdFQUFlLEVBQUM7Q0FDaEQsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9G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MkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaNUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUFlLENBQUM7QUFDL0MsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDakQsSUFBSSxRQUFRLG1CQUFHLHVEQUFRLEVBQTZCO0FBRXBELG1CQUFPLDBEQUFrQztBQUN6QyxPQUFPLEVBQWlFO0FBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNqRCxlQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sZUFBUSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBSTVDLGNBQWMsRUFBRSxDQUFDO0FBQ2pCLGNBQXlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9ob21lL2hvbWUubW9kdWxlXCI6IFtcblx0XHRcIi4vaG9tZS9ob21lLm1vZHVsZS50c1wiLFxuXHRcdFwidmVuZG9yXCIsXG5cdFx0MFxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0dmFyIGlkcyA9IG1hcFtyZXFdO1xuXHRpZighaWRzKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlkID0gaWRzWzBdO1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2RldGFpbC9kZXRhaWwuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiZGV0YWlsXCIsIGNvbXBvbmVudDogRGV0YWlsQ29tcG9uZW50fVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgVUlcXG5jb21wb25lbnRzIHRoYXQgaGF2ZSB0aGUgYnRuIGNsYXNzIG5hbWUuXFxuXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcIkZvbnRBd2Vzb21lXFxcIlwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXG5cIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzJ1wifV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBEZXRhaWxDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIkFjdGlvbkJhcntcXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XFxufVxcblxcbiNkZXRhaWwtcGFnZS1iYWNrZ3JvdW5keyAgICAgICAgXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIn4vaW1hZ2VzL2xheWVyMTgucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIC8qIG1hcmdpbi10b3A6LTMwOyAqL1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGZsYXQ9XFxcInRydWVcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0ZGRkZGRlxcXCIgY29sb3I9XFxcIiMwMDAwMDBcXFwiPlxcbjwvQWN0aW9uQmFyPlxcblxcblxcbjxHcmlkTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgY29sdW1ucz1cXFwiKlxcXCJcXG4gICAgcm93cz1cXFwiKixhdXRvXFxcIiBbbWFyZ2luVG9wXT0ndGhpcy5pc0lPUyA/IFxcXCItMjBcXFwiIDogXFxcIlxcXCInPlxcblxcbiAgICA8U3RhY2tMYXlvdXQgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI2Y4ZjhmOFxcXCI+XFxuICAgICAgICA8R3JpZExheW91dCBpZD1cXFwiZGV0YWlsLXBhZ2UtYmFja2dyb3VuZFxcXCIgY29sdW1ucz1cXFwiKlxcXCIgcm93cz1cXFwiYXV0bywqLGF1dG9cXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCIyMDBcXFwiPlxcblxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sKixhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxJbWFnZSBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgbWFyZ2luTGVmdD1cXFwiMjBcXFwiIG1hcmdpblRvcD1cXFwiMTBcXFwiIGhlaWdodD1cXFwiMjVcXFwiXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cXFwiMzVcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCIgc3JjPVxcXCJ+L2ltYWdlcy9zaGFwZTVAM3gucG5nXFxcIj48L0ltYWdlPlxcblxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbD1cXFwiMlxcXCIgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1yb3VuZGVkLXNtXFxcIiBwYWRkaW5nPVxcXCI1XFxcIiB0ZXh0VHJhbnNmb3JtPVxcXCJub25lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCIjRkZGRkZGXFxcIiBjb2xvcj1cXFwiIzNiNzVmZlxcXCIgdGV4dD1cXFwiTWFrZSBhIFNwb25zb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMTJcXFwiIGhlaWdodD1cXFwiMjVcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCosYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgY29sPVxcXCIwXFxcIiByb3c9XFxcIjJcXFwiXFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT1cXFwiMjBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LXdlaWdodC1ib2xkXFxcIiBwYWRkaW5nTGVmdD1cXFwiMjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwiMzBcXFwiIGNvbG9yPVxcXCIjRkZGRkZGXFxcIiB0ZXh0PVxcXCJUYXlsb3IgU3dpZnRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxJbWFnZSBjb2w9XFxcIjJcXFwiIHJvdz1cXFwiMFxcXCIgbWFyZ2luUmlnaHQ9XFxcIjEwXFxcIiBoZWlnaHQ9XFxcIjQ1XFxcIiB3aWR0aD1cXFwiNDVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIn4vaW1hZ2VzL3NoYXBlN0AzeC5wbmdcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcblxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJmb250LXdlaWdodC1ib2xkXFxcIiBtYXJnaW5Ub3A9XFxcIjEwXFxcIiBwYWRkaW5nTGVmdD1cXFwiMTBcXFwiXFxuICAgICAgICAgICAgZm9udFNpemU9XFxcIjIwXFxcIiBjb2xvcj1cXFwiIzMzMzMzM1xcXCIgdGV4dD1cXFwiVG9wIFNvbmdzXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgPExpc3RWaWV3IGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiBbaXRlbXNdPVxcXCJsaXN0Vmlld0RhdGFcXFwiIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCI1MDBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI2Y4ZjhmOFxcXCI+XFxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1zb25nPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgICByb3dzPVxcXCJhdXRvXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCosYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIFtzcmNdPVxcXCJzb25nLmltYWdlVXJsXFxcIiBoZWlnaHQ9XFxcIjc1XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVxcXCI3NVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjFcXFwiIHJvdz1cXFwiMFxcXCIgbWFyZ2luTGVmdD1cXFwiMTVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBtYXJnaW5Ub3A9XFxcIjVcXFwiIHBhZGRpbmdSaWdodD1cXFwiNVxcXCIgW3RleHRdPVxcXCJzb25nLnRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmcgZm9udC13ZWlnaHQtYm9sZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcIiMzMzMzMzNcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIG1hcmdpblRvcD1cXFwiNVxcXCIgW3RleHRdPVxcXCJzb25nLmFydGlzdFxcXCIgY29sb3I9XFxcIiM5OTk5OTlcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIG1hcmdpblRvcD1cXFwiNVxcXCIgW3RleHRdPVxcXCJzb25nLnllYXJcXFwiIGNvbG9yPVxcXCIjOTk5OTk5XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjJcXFwiIHJvdz1cXFwiMFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIGNvbG9yPVxcXCIjYjliOWI5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCIyNFxcXCIgcGFkZGluZ1JpZ2h0PVxcXCI1XFxcIiBjbGFzcz1cXFwiZmFcXFwiIHRleHQ9XFxcIiYjeGYxNDI7XFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDwvTGlzdFZpZXc+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0ZGRkZGRlxcXCJcXG4gICAgICAgIGhlaWdodD1cXFwiNjBcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKlxcXCIgY29sdW1ucz1cXFwiKiwqLCosKiwqXFxcIj5cXG4gICAgICAgICAgICA8SW1hZ2UgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiICh0YXApPVxcXCJvbkJ1dHRvblRhcCgpXFxcIiBoZWlnaHQ9XFxcIjI1XFxcIiB3aWR0aD1cXFwiMjVcXFwiXFxuICAgICAgICAgICAgICAgIG1hcmdpbj1cXFwiMTBcXFwiIHNyYz1cXFwifi9pbWFnZXMvc2hhcGUyQDN4LnBuZ1xcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICA8SW1hZ2UgY29sPVxcXCIxXFxcIiByb3c9XFxcIjBcXFwiICh0YXApPVxcXCJvbkJ1dHRvblRhcCgpXFxcIiBoZWlnaHQ9XFxcIjI1XFxcIiB3aWR0aD1cXFwiMjVcXFwiXFxuICAgICAgICAgICAgICAgIG1hcmdpbj1cXFwiMTBcXFwiIHNyYz1cXFwifi9pbWFnZXMvc2hhcGUxQDN4LnBuZ1xcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICA8SW1hZ2UgY29sPVxcXCIyXFxcIiByb3c9XFxcIjBcXFwiICh0YXApPVxcXCJvbkJ1dHRvblRhcCgpXFxcIiBoZWlnaHQ9XFxcIjYwXFxcIiB3aWR0aD1cXFwiNjBcXFwiXFxuICAgICAgICAgICAgICAgIG1hcmdpbj1cXFwiMTBcXFwiIHNyYz1cXFwifi9pbWFnZXMvaG9tZUAzeC5wbmdcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPEltYWdlIGNvbD1cXFwiM1xcXCIgcm93PVxcXCIwXFxcIiAodGFwKT1cXFwib25CdXR0b25UYXAoKVxcXCIgaGVpZ2h0PVxcXCIyNVxcXCIgd2lkdGg9XFxcIjI1XFxcIlxcbiAgICAgICAgICAgICAgICBtYXJnaW49XFxcIjEwXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL3NoYXBlM0AzeC5wbmdcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPEltYWdlIGNvbD1cXFwiNFxcXCIgcm93PVxcXCIwXFxcIiAodGFwKT1cXFwib25CdXR0b25UYXAoKVxcXCIgaGVpZ2h0PVxcXCIyNVxcXCIgd2lkdGg9XFxcIjI1XFxcIlxcbiAgICAgICAgICAgICAgICBtYXJnaW49XFxcIjEwXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL2ljb24wNEAzeC5wbmdcXFwiPjwvSW1hZ2U+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9saXN0LXZpZXdcIlxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbnZhciBmcmFtZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkRldGFpbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9kZXRhaWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0l0ZW0gd2l0aCBpbmRleDogJyArIGFyZ3MuaW5kZXggKyAnIHRhcHBlZCcpO1xuICAgIH1cbiAgICB0ZXh0RmllbGRWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgICBpc0lPUzogYm9vbGVhbjtcblxuICAgIGxpc3RWaWV3RGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiSSBEb24ndCBXYW5uYSBMaXZlIEZvcmV2ZXIgKEZpZnR5IFNoYWRlcyBvZiBHcmV5KVwiLFxuICAgICAgICAgICAgYXJ0aXN0OiBcIlRheWxvciBTd2lmdCwgWmF5biBNYWxpa1wiLFxuICAgICAgICAgICAgeWVhcjogXCIyMDE2XCIsXG4gICAgICAgICAgICBpbWFnZVVybDogXCJ+L2ltYWdlcy9sYXllcjIxQDN4LnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkJsYW5rIFNwYWNlXCIsXG4gICAgICAgICAgICBhcnRpc3Q6IFwiVGF5bG9yIFN3aWZ0XCIsXG4gICAgICAgICAgICB5ZWFyOiBcIjIwMTRcIixcbiAgICAgICAgICAgIGltYWdlVXJsOiBcIn4vaW1hZ2VzL2xheWVyMjBAM3gucG5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiRW5kIEdhbWVcIixcbiAgICAgICAgICAgIGFydGlzdDogXCJUYXlsb3IgU3dpZnQsIEVkIFNoZWVyYW4sIEZ1dHVyZVwiLFxuICAgICAgICAgICAgeWVhcjogXCIyMDE3XCIsXG4gICAgICAgICAgICBpbWFnZVVybDogXCJ+L2ltYWdlcy9sYXllcjE5QDN4LnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvdmUgU3RvcnlcIixcbiAgICAgICAgICAgIGFydGlzdDogXCJUYXlsb3IgU3dpZnRcIixcbiAgICAgICAgICAgIHllYXI6IFwiMjAwOVwiLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IFwifi9pbWFnZXMvbGF5ZXIyMkAzeC5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJFdmVyeXRoaW5nIEhhcyBDaGFuZ2VkXCIsXG4gICAgICAgICAgICBhcnRpc3Q6IFwiVGF5bG9yIFN3aWZ0LCBFZCBTaGVlcmFuXCIsXG4gICAgICAgICAgICB5ZWFyOiBcIjIwMTJcIixcbiAgICAgICAgICAgIGltYWdlVXJsOiBcIn4vaW1hZ2VzL2xheWVyMjNAM3gucG5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiVGVhcmRyb3BzIE9uIE15IEd1aXRhclwiLFxuICAgICAgICAgICAgYXJ0aXN0OiBcIlRheWxvciBTd2lmdFwiLFxuICAgICAgICAgICAgeWVhcjogXCIyMDA2XCIsXG4gICAgICAgICAgICBpbWFnZVVybDogXCJ+L2ltYWdlcy9sYXllcjI0QDN4LnBuZ1wiXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgb25CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgIH1cblxuICAgIHNlYXJjaFBocmFzZTogc3RyaW5nO1xuICAgIG9uU2VhcmNoU3VibWl0KGFyZ3MpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXG4gICAgICAgIGlmIChwbGF0Zm9ybS5pc0lPUykge1xuICAgICAgICAgICAgdGhpcy5pc0lPUyA9IHRydWU7XG4gICAgICAgICAgICBwYWdlLnN0YXR1c0JhclN0eWxlID0gXCJsaWdodFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNJT1MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG59XG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG52YXIgZnJhbWUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcbmltcG9ydCB7IENhcmRWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcmR2aWV3JztcbnJlZ2lzdGVyRWxlbWVudCgnQ2FyZFZpZXcnLCAoKSA9PiBDYXJkVmlldyk7XG5cblxuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9