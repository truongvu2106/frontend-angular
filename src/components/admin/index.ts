import { Component } from '@angular/core';
import {
    CanActivate,
    ComponentInstruction,
    RouteConfig,
    ROUTER_DIRECTIVES
} from '@angular/router-deprecated';
import { AuthService } from '../../services/auth.service';
import { isLoggedIn } from '../../services/is-logged-in';

import { BlogManagement } from './blog/index';
import { GalleryManagement } from './gallery/index';

@Component({
    selector: 'admin',
    templateUrl: 'src/components/admin/index.html',
    providers: [AuthService],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/blog-management',
        name: 'BlogManagement',
        component: BlogManagement,
        useAsDefault: true
    }, {
        path: '/gallery-management',
        name: 'GalleryManagement',
        component: GalleryManagement
    }
])

@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
    return isLoggedIn(next, previous);
})
export class Admin {
    constructor() {
        console.info('Adminstration Component Mounted Successfully');
    }
}
