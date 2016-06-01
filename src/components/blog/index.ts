import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { PopularBlogs } from './popularBlogs/index';
import { BlogDetail } from './detail/index';
import { BlogsList } from './list/index';

@Component({
    selector: 'blog',
    templateUrl: 'src/components/blog/index.html',
    directives: [ PopularBlogs, ROUTER_DIRECTIVES ]
})

@Routes([
    {
        path: '',
        component: BlogsList
    }, {
        path: '/:id',
        component: BlogDetail
    }
])

export class Blog {

    constructor() {
        console.info('Blog Component Mounted Successfully');
    }

}
