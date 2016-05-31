import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { BlogService } from '../../services/blog.service';
import { MNPanel } from '../mnPanel/index';

@Component({
    selector: 'blog',
    templateUrl: 'src/components/blog/index.html',
    directives: [NgFor, MNPanel],
    providers: [ BlogService ]
})


export class Blog {
    blogs = [];

    constructor(private blogService: BlogService) {
        console.info('Blog Component Mounted Successfully');
    }

    ngOnInit() {
        this.blogService.getBlogs()
            .then((blogs) => { this.blogs = blogs; })
            .catch((err) => { console.error(err); });
    }

}
