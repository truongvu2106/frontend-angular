import { Component } from '@angular/core';
import { RouteSegment, Router, OnActivate } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

@Component({
    selector: 'blog-detail',
    templateUrl: 'src/components/blog/detail/index.html',
    providers: [ BlogService ]
})


export class BlogDetail implements OnActivate {
    blogDetail = {};
    constructor(private blogService: BlogService, private router: Router) {
        console.info('Blog Detail Component Mounted Successfully');
    }

    routerOnActivate(curr: RouteSegment) {
        let id = curr.getParam('id');
        this.blogService.getBlog(id)
            .then((blogDetail) => {
                this.blogDetail = blogDetail;
            })
            .catch((err) => { console.error(err); });
    }

}
