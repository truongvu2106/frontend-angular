import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

@Component({
    selector: 'blog-management',
    templateUrl: 'src/components/admin/blog/index.html',
    directives: [NgFor, ROUTER_DIRECTIVES],
    providers: [BlogService]
})

export class BlogManagement implements OnInit {
    blogs = [];
    constructor(private blogService: BlogService) {
        console.info('Blogs Management Component Mounted Successfully');
    }

    ngOnInit() {
        this.blogService.getBlogs()
            .then((blogs) => { this.blogs = blogs; })
            .catch((err) => { console.error(err); });
    }

}
