import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf, NgModel } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

@Component({
    selector: 'blog-management',
    templateUrl: 'src/components/admin/blogs/index.html',
    directives: [NgFor, NgIf, NgModel, ROUTER_DIRECTIVES],
    providers: [BlogService]
})

export class BlogsManagement implements OnInit {
    blogs = [];
    action: string = '';
    private sub: any;
    constructor(private blogService: BlogService, private route: ActivatedRoute,
        private router: Router) {
        console.info('Blogs Management Component Mounted Successfully');
    }

    ngOnInit() {
        var self = this;
        self.blogService.getBlogs()
            .then((blogs) => {
                self.blogs = blogs;
            })
            .catch((err) => { console.error(err); });
    }

    delete(id) {
        var self = this;
        self.blogService.deleteBlog(id)
            .then(function() {
                return self.blogService.getBlogs();
            }).then(function(blogs) {
                self.blogs = blogs;
            }).catch(function(err) {
                console.error(err);
            });
    }
}
