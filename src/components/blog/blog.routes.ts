import { RouterConfig } from '@angular/router';
import { Blog } from './index';
import { BlogDetail } from './detail/index';
import { BlogsList } from './list/index';

export const BlogRoutes: RouterConfig = [{
    path: 'blog',
    component: Blog,
    children: [
        {
            path: '',
            component: BlogsList
        },
        {
            path: ':id',
            component: BlogDetail
        }
    ]
}];
