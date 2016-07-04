import { Injectable } from '@angular/core';
import { API } from './api.service';

@Injectable()
export class BlogService {
    constructor(private api: API) {}

    getBlogs() {
        return this.api.get('/articles');
    }

    getBlog(id) {
        return this.api.get('/articles/' + id);
    }

    createBlog(data) {
        return this.api.post('/articles', data);
    }

    updateBlog(data) {
        return this.api.put('/articles/' + data._id, data);
    }

    deleteBlog(id) {
        return this.api.delete('/articles/' + id);
    }
}
