import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'sign-in',
    templateUrl: 'src/components/signin/index.html',
    directives: [ NgIf ]
})

export class SignIn {
    credentials: any
    signInError: string;
    constructor(private authService: AuthService, private router: Router) {
        console.info('Sign In Component Mounted Successfully');
        this.credentials = {};
        this.signInError = '';
        if (this.authService.authenticated()) {
            this.router.navigate(['/Home']);
        }
    }

    signIn = function() {
        var self = this;
        self.authService.authenticate(self.credentials)
        .then(
            function() {
                // Authenticate successful.
                self.router.navigate(['/Admin']);
            },
            function(error) {
                // Authenticate fail.
                self.signInError = error;
            });
    };

}
