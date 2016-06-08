import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { MODAL_BROWSER_PROVIDERS } from 'angular2-modal/platform-browser';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';
import { API } from './services/api.service';
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

@Routes([
    {
        path: '',
        component: Home
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'gallery',
        component: Gallery
    },
    {
        path: 'blog',
        component: Blog
    },
    {
        path: 'sign-in',
        component: SignIn
    },
    {
        path: 'admin',
        component: Admin
    }
])

class AppComponent {
    constructor() {
    }
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    MODAL_BROWSER_PROVIDERS,
    API
]);
