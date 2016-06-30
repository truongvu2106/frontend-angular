import { Injectable } from '@angular/core';

import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(next:  ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.authenticated()) {
            return true;
        } else {
            this.router.navigate(['/sign-in']);
            return false;
        }
    }
}