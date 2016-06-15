import { Component } from '@angular/core';
import { CanActivate, ComponentInstruction } from '@angular/router-deprecated';
import { AuthService } from '../../services/auth.service';
import { isLoggedIn } from '../../services/is-logged-in';

declare var $: any;

@Component({
    selector: 'admin',
    templateUrl: 'src/components/admin/index.html',
    providers: [AuthService]
})

@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
        return isLoggedIn(next, previous);
})
export class Admin {
    constructor() {
        console.info('Adminstration Component Mounted Successfully');
    }
}
