import { provideRouter, RouterConfig }  from '@angular/router';
import { Home } from './components/home/index';
import { Gallery } from './components/gallery/index';
import { BlogRoutes } from './components/blog/blog.routes';
import { SignIn } from './components/signin/index';
import { Admin } from './components/admin/index';

const routes: RouterConfig = [
    {
        path: '',
        // name: 'Home',
        component: Home
    },
    {
        path: 'home',
        // name: 'Home',
        component: Home
    },
    {
        path: 'gallery',
        // name: 'Gallery',
        component: Gallery
    },
    ...BlogRoutes,
    {
        path: 'sign-in',
        // name: 'SignIn',
        component: SignIn
    },
    {
        path: 'admin/...',
        // name: 'Admin',
        component: Admin
    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];