import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Config } from '../config';

@Injectable()
export class API {
    private config = Config;
    private requestOptions: RequestOptions;
    constructor(private http: Http) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.requestOptions = new RequestOptions({ headers: headers });
    }
    get(uri) {
        return this.http.get(this.config.apiURI + uri);
    }
    post(uri, data) {
        data = JSON.stringify(data);
        var self = this;
        // return new Promise(function(resolve, reject) {
        //     self.http.post(self.config.apiURI + uri, data, self.requestOptions)
        //         .subscribe(
        //             function(response: Response) {
        //                 resolve(response.json());
        //             }, function(error) {
        //                 reject(error);
        //             }
        //         );
        // });
        return self.http.post(self.config.apiURI + uri, data, self.requestOptions)
            .toPromise()
            .then(self.extractData)
            .catch(self.handleError);
    }
    put(uri, data) {
        data = JSON.stringify(data);
        return this.http.put(this.config.apiURI + uri, data, this.requestOptions);
    }
    delete(uri) {
        return this.http.delete(this.config.apiURI + uri);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        throw errMsg;
    }
}