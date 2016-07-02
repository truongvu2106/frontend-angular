import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

declare var $: any;

@Component({
    selector: 'blog-detail',
    templateUrl: 'src/components/blog/detail/index.html',
    providers: [ BlogService ]
})

export class BlogDetail implements OnInit, OnDestroy {
    blogDetail = {};
    private sub: any;
    constructor(private blogService: BlogService, private route: ActivatedRoute) {
        console.info('Blog Detail Component Mounted Successfully');
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            $('body').scrollTop(0);
            let id = +params['id'];
            this.blogService.getBlog(id)
            .then((blogDetail) => {
                this.blogDetail = blogDetail;
            })
            .catch((err) => { console.error(err); });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
