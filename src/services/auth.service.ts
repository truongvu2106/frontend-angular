import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    authenticate(credentials) {
        console.log(credentials);
        return Promise.resolve();
    }
}