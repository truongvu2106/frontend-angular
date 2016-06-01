import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { BlogService } from '../../../services/blog.service';

@Component({
    selector: 'popular-blogs',
    templateUrl: 'src/components/blog/popularBlogs/index.html',
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ BlogService ]
})


export class PopularBlogs implements OnInit {
    blogs = [];

    constructor(private blogService: BlogService) {
        console.info('Popular Blogs Component Mounted Successfully');
    }

    ngOnInit() {
        this.blogService.getBlogs()
            .then((blogs) => { this.blogs = blogs; })
            .catch((err) => { console.error(err); });
    }
}
