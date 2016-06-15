import {Injector} from '@angular/core';
import {appInjector} from '../app-injector';
import {AuthService} from './auth.service';
import {Router, ComponentInstruction} from '@angular/router-deprecated';

export const isLoggedIn = (next: ComponentInstruction, previous: ComponentInstruction) => {
    let injector: Injector = appInjector(); // get the stored reference to the injector
    let auth: AuthService = injector.get(AuthService);
    let router: Router = injector.get(Router);

  // return a boolean or a promise that resolves a boolean
    return new Promise((resolve) => {
        auth.checkLoggedIn()
            .subscribe((result) => {
                if (result) {
                    resolve(true);
                } else {
                    router.navigate(['/SignIn']);
                    resolve(false);
                }
            });
  });
};