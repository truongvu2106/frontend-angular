import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PopularBlogs } from './popularBlogs/index';
import { BlogDetail } from './detail/index';
import { BlogsList } from './list/index';

// const BlogRoutes: RouterConfig = [
//   { path: '',  component: BlogsList },
//   { path: ':id', component: BlogDetail }
// ];

@Component({
    selector: 'blog',
    templateUrl: 'src/components/blog/index.html',
    directives: [ PopularBlogs, ROUTER_DIRECTIVES ]
})

export class Blog {

    constructor() {
        console.info('Blog Component Mounted Successfully');
    }

}
