import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { BlogService } from '../../../services/blog.service';

@Component({
    selector: 'blog-detail',
    templateUrl: 'src/components/blog/detail/index.html',
    providers: [ BlogService ]
})


export class BlogDetail implements OnInit {
    blogDetail = {};

    constructor(private blogService: BlogService, private routeParams: RouteParams) {
        console.info('Blog Detail Component Mounted Successfully');
    }

    ngOnInit() {
        let id = this.routeParams.get('id');

        this.blogService.getBlog(id)
            .then((blogDetail) => {
                this.blogDetail = blogDetail;
            })
            .catch((err) => { console.error(err); });
    }

}
