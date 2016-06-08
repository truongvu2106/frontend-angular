import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Cookie } from 'ng2-cookies';
import { API } from './api.service';

@Injectable()
export class AuthService {
    constructor(private api: API) { }

    /* Private */

    private _setAccessToken(accessToken) {
        Cookie.set('accessToken', accessToken);
    }

    private _setAccount(account) {
        Cookie.set('account', account);
    }

    authenticate(credentials) {
        var self = this;
        return self.api.post('/authentication', credentials)
            .then(
                function(data) {
                    self._setAccessToken(data.token);
                    self._setAccount(data.account);
                    return data;
                }
            );
    }
    getAccessToken() {
        return Cookie.get('accessToken');
    }

    authenticated() {
        return !!this.getAccessToken() && !!this.getAccount();
    }

    getAccount() {
        return Cookie.get('account');
    }

    deauthenticate() {
        // Remove cookies.
        Cookie.delete('account');
        Cookie.delete('accessToken');
    };

}