import { RouterConfig } from '@angular/router';
import { Admin } from './index';
import { AuthGuard } from '../../auth.guard';

import { BlogManagement } from './blog/index';
import { GalleryManagement } from './gallery/index';

export const AdminRoutes: RouterConfig = [{
    path: 'admin',
    component: Admin,
    canActivate: [ AuthGuard ],
    children: [
        {
            path: '',
            component: BlogManagement
        },
        {
            path: 'blog-management',
            component: BlogManagement
        },
        {
            path: 'gallery-management',
            component: GalleryManagement
        }
    ]
}];
