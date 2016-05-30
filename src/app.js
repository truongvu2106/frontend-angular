"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('angular2-modal/platform-browser');
var router_deprecated_1 = require('@angular/router-deprecated');
var index_1 = require('./components/header/index');
var index_2 = require('./components/footer/index');
var index_3 = require('./components/home/index');
var index_4 = require('./components/gallery/index');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mn-app',
            template: "\n        <header></header>\n        <div class=\"container\"><router-outlet></router-outlet></div>\n        <footer></footer>\n    ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, index_1.Header, index_2.Footer],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/home',
                name: 'Home',
                component: index_3.Home,
                useAsDefault: true
            },
            {
                path: '/gallery',
                name: 'Gallery',
                component: index_4.Gallery
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
platform_browser_dynamic_1.bootstrap(AppComponent, [platform_browser_1.MODAL_BROWSER_PROVIDERS]);
//# sourceMappingURL=app.js.map