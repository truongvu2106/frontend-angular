import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { PopularBlogs } from './popularBlogs/index';
import { BlogDetail } from './detail/index';
import { BlogsList } from './list/index';

@Component({
    selector: 'blog',
    templateUrl: 'src/components/blog/index.html',
    directives: [ PopularBlogs, ROUTER_DIRECTIVES ]
})

@RouteConfig([
    {
        path: '/',
        name: 'BlogsList',
        component: BlogsList,
        useAsDefault: true
    }, {
        path: '/:id',
        name: 'BlogDetail',
        component: BlogDetail
    }
])

export class Blog {

    constructor() {
        console.info('Blog Component Mounted Successfully');
    }

}
