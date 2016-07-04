import { RouterConfig } from '@angular/router';
import { Admin } from './index';
import { AuthGuard } from '../../auth.guard';

import { BlogsManagement } from './blogs/index';
import { BlogManagement } from './blogs/blog/index';

import { GalleryManagement } from './gallery/index';

export const AdminRoutes: RouterConfig = [{
    path: 'admin',
    component: Admin,
    canActivate: [ AuthGuard ],
    children: [
        {
            path: '',
            redirectTo: 'blog-management',
            pathMatch: 'full'
        },
        {
            path: 'blog-management',
            component: BlogsManagement
        },
        {
            path: 'blog-management/:action',
            component: BlogManagement
        },
        {
            path: 'blog-management/:action/:id',
            component: BlogManagement
        },
        {
            path: 'gallery-management',
            component: GalleryManagement
        }
    ]
}];
