import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf, NgModel } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

declare var $: any;
declare var CKEDITOR: any;

@Component({
    selector: 'blog-management',
    templateUrl: 'src/components/admin/blog/index.html',
    directives: [NgFor, NgIf, NgModel, ROUTER_DIRECTIVES],
    providers: [BlogService]
})

export class BlogManagement implements OnInit, OnDestroy {
    blogs = [];
    blog = {
        thumbnail: '',
        title: '',
        content: ''
    };
    action: string = '';
    private sub: any;
    constructor(private blogService: BlogService, private route: ActivatedRoute,
        private router: Router) {
        console.info('Blogs Management Component Mounted Successfully');
    }

    ngOnInit() {
        var self = this;
        self.blogService.getBlogs()
            .then((blogs) => { self.blogs = blogs; })
            .catch((err) => { console.error(err); });

        self.sub = self.route.params.subscribe(params => {
            self.action = params['action'];
        });
    }

    ngAfterViewInit() {
        // Component views are initialized
        if (this.action === 'add') {
            CKEDITOR.replace('content');
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    submit(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var self = this;
        self.blog.content = CKEDITOR.instances.content.getData();
        self.blogService.createBlog(self.blog)
            .then((blog) => { self.router.navigate(['/admin/blog-management']); })
            .catch((err) => { console.error(err); });

    }

    cancel(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.router.navigate(['/admin/blog-management']);
    }

}
