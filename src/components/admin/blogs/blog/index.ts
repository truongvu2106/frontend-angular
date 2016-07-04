import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf, NgModel } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../../services/blog.service';

declare var $: any;
declare var CKEDITOR: any;

@Component({
    selector: 'blog-management',
    templateUrl: 'src/components/admin/blogs/blog/index.html',
    directives: [NgFor, NgIf, NgModel, ROUTER_DIRECTIVES],
    providers: [BlogService]
})

export class BlogManagement implements OnInit, OnDestroy {
    blog: any = {};
    action: string = '';
    _id: any;
    private sub: any;
    constructor(private blogService: BlogService, private route: ActivatedRoute,
        private router: Router) {
        console.info('Blog Management Component Mounted Successfully');
    }

    ngOnInit() {
        var self = this;

        self.sub = self.route.params.subscribe(params => {
            self.action = params['action'];
            self._id = params['id'];
        });
    }

    ngAfterViewInit() {
        // Component views are initialized
        var self = this;
        if (self.action === 'add' || self.action === 'edit') {
            CKEDITOR.replace('content');
        }
        if (self.action === 'edit' || self.action === 'view') {
            self.blogService.getBlog(self._id)
                .then((blog) => {
                    self.blog = blog;
                    if (self.action === 'edit') {
                        setTimeout(function() {
                            CKEDITOR.instances.content.setData(self.blog.content);
                        }, 100);
                    }
                }).catch((err) => { console.error(err); });
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
        if (self.blog._id) {
            self.blogService.updateBlog(self.blog)
                .then((blog) => { self.router.navigate(['/admin/blog-management']); })
                .catch((err) => { console.error(err); });
        } else {
            self.blogService.createBlog(self.blog)
                .then((blog) => { self.router.navigate(['/admin/blog-management']); })
                .catch((err) => { console.error(err); });
        }
    }

    cancel(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.router.navigate(['/admin/blog-management']);
    }

}
