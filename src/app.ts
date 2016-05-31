import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { MODAL_BROWSER_PROVIDERS } from 'angular2-modal/platform-browser';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Header } from './components/header/index';
import { Footer } from './components/footer/index';
import { Home } from './components/home/index';
import { Gallery } from './components/gallery/index';
import { Blog } from './components/blog/index';
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
        path: '/home',
        name: 'Home',
        component: Home,
        useAsDefault: true
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
    }
])

class AppComponent {
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, MODAL_BROWSER_PROVIDERS]);
