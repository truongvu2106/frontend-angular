import { Component, provide, ComponentRef } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { MODAL_BROWSER_PROVIDERS } from 'angular2-modal/platform-browser';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, CanActivate } from '@angular/router-deprecated';
import { LocationStrategy, PathLocationStrategy, Location } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';
import {appInjector} from './app-injector';

import { API } from './services/api.service';
import { AuthService } from './services/auth.service';

import { Header } from './components/header/index';
import { Footer } from './components/footer/index';
import { Home } from './components/home/index';
import { Gallery } from './components/gallery/index';
import { Blog } from './components/blog/index';
import { SignIn } from './components/signin/index';
import { Admin } from './components/admin/index';

@Component({
    selector: 'mn-app',
    template: `
        <header></header>
        <div class="container"><router-outlet></router-outlet></div>
        <footer></footer>
    `,
    directives: [ ROUTER_DIRECTIVES, Header, Footer ]
})

@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    },
    {
        path: '/blog/...',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    }
])
class AppComponent {
    constructor() {

    }
}

bootstrap(AppComponent, [
    AuthService,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    MODAL_BROWSER_PROVIDERS,
    API,
    provide(LocationStrategy, { useClass: PathLocationStrategy })
])
.then((appRef: ComponentRef<any>) => {
    // store a reference to the application injector
    appInjector(appRef.injector);
});
