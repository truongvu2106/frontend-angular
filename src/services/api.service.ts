import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { config } from '../config';

@Injectable()
export class API {
    constructor(private http: Http) { }

    get(uri) {
        return this.http.get(config.apiURI + uri);
    }
    post(uri, data) {
        data = JSON.stringify(data);
        return this.http.post(config.apiURI + uri, data);
    }
    put(uri, data) {
        data = JSON.stringify(data);
        return this.http.put(config.apiURI + uri, data);
    }
    delete(uri) {
        return this.http.delete(config.apiURI + uri);
    }
}