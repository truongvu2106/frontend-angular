import { Component, provide, ComponentRef } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { MODAL_BROWSER_PROVIDERS } from 'angular2-modal/platform-browser';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LocationStrategy, PathLocationStrategy, Location, APP_BASE_HREF } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { API } from './services/api.service';
import { AuthService } from './services/auth.service';

import { Header } from './components/header/index';
import { Footer } from './components/footer/index';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AuthGuard } from './auth.guard';

@Component({
    selector: 'mn-app',
    template: `
        <header></header>
        <div class="container"><router-outlet></router-outlet></div>
        <footer></footer>
    `,
    directives: [ ROUTER_DIRECTIVES, Header, Footer ]
})

class AppComponent {
    constructor() {}
}

bootstrap(AppComponent, [
    AuthService,
    AuthGuard,
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    MODAL_BROWSER_PROVIDERS,
    API,
    provide(LocationStrategy, { useClass: PathLocationStrategy })
])
.catch(err => console.error(err));;
