import { provideRouter, RouterConfig }  from '@angular/router';
import { Home } from './components/home/index';
import { Gallery } from './components/gallery/index';
import { BlogRoutes } from './components/blog/blog.routes';
import { SignIn } from './components/signin/index';
import { AdminRoutes } from './components/admin/admin.routes';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
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
        path: 'sign-in',
        component: SignIn
    },
    ...BlogRoutes,
    ...AdminRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];