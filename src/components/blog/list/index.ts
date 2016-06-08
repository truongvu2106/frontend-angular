import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { OnActivate, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

@Component({
    selector: 'blog-list',
    templateUrl: 'src/components/blog/list/index.html',
    directives: [ NgFor, ROUTER_DIRECTIVES ],
    providers: [ BlogService ]
})


export class BlogsList implements OnActivate {
    blogs = [];
    constructor(private blogService: BlogService) {
        console.info('Blogs List Component Mounted Successfully');
    }

    routerOnActivate() {
        this.blogService.getBlogs()
            .then((blogs) => { this.blogs = blogs; })
            .catch((err) => { console.error(err); });
    }

}
