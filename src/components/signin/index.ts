import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'sign-in',
    templateUrl: 'src/components/signin/index.html',
    directives: [ NgIf ],
    providers: [ AuthService ]
})

export class SignIn {
    credentials: any
    signinError: string
    constructor(private authService: AuthService, private router: Router) {
        console.info('Sign In Component Mounted Successfully');
        this.credentials = {};
    }

    signIn = function() {
        var self = this;
        self.authService.authenticate(self.credentials)
        .then(function() {
            // Authenticate successful.
            self.router.navigate(['admin']);
        },
        function(error) {
            // Authenticate fail.
            self.signInError = error;
        });
    };

}
