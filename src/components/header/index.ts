import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Router } from '@angular/router-deprecated';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'header',
    templateUrl: 'src/components/header/index.html',
    directives: [ ROUTER_DIRECTIVES, NgIf ]
})

export class Header {
    authenticated: boolean = false;
    constructor(private authService: AuthService, private router: Router) {
        var self = this;
        self.authenticated = self.authService.authenticated();
        self.authService.isLoggedIn.subscribe(function(value) {
            self.authenticated = value;
        });
    }

    logout() {
        this.authService.deauthenticate();
        this.authenticated = false;
        this.router.navigate(['/Home']);
    }

}
