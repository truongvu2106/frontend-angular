import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { BlogService } from '../../../services/blog.service';

@Component({
    selector: 'blog-list',
    templateUrl: 'src/components/blog/list/index.html',
    directives: [ NgFor, ROUTER_DIRECTIVES ],
    providers: [ BlogService ]
})


export class BlogsList implements OnInit {
    blogs = [];
    constructor(private blogService: BlogService) {
        console.info('Blogs List Component Mounted Successfully');
    }

    ngOnInit() {
        this.blogService.getBlogs()
            .then((blogs) => { this.blogs = blogs; })
            .catch((err) => { console.error(err); });
    }

}
