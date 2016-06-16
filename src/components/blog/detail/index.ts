import { Component } from '@angular/core';
import { RouteParams, Router, OnActivate } from '@angular/router-deprecated';
import { BlogService } from '../../../services/blog.service';

@Component({
    selector: 'blog-detail',
    templateUrl: 'src/components/blog/detail/index.html',
    providers: [ BlogService ]
})

export class BlogDetail implements OnActivate {
    blogDetail = {};
    constructor(private blogService: BlogService, private params: RouteParams) {
        console.info('Blog Detail Component Mounted Successfully');
    }

    routerOnActivate() {
    //     let id = curr.getParam('id');
        let id = this.params.get('id');
        this.blogService.getBlog(id)
            .then((blogDetail) => {
                this.blogDetail = blogDetail;
            })
            .catch((err) => { console.error(err); });
    }

}
