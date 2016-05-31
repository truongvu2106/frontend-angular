import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { MNPanel } from '../../mnPanel/index';

@Component({
    selector: 'popular-blogs',
    templateUrl: 'src/components/blog/popularBlogs/index.html',
    directives: [ MNPanel ],
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
