import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ComponentInstruction } from '@angular/router-deprecated';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'header',
    templateUrl: 'src/components/header/index.html',
    directives: [ ROUTER_DIRECTIVES, NgIf ],
    providers: [ AuthService ]
})

export class Header {
    authenticated: boolean = false;
    constructor(private authService: AuthService, private router: Router) {
        this.authenticated = this.authService.authenticated();
    }

    logout() {
        this.authService.deauthenticate();
        this.authenticated = false;
        this.router.navigate(['home']);
    }

}
