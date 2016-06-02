import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'sign-in',
    templateUrl: 'src/components/signin/index.html',
    directives: [ NgIf ]
})

export class SignIn {
    signinError: string;
    constructor() {
        console.info('Sign In Component Mounted Successfully');
    }

}
