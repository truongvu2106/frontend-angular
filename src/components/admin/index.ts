import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'admin',
    templateUrl: 'src/components/admin/index.html',
    directives: [ROUTER_DIRECTIVES]
})

export class Admin {
    constructor() {
        console.info('Adminstration Component Mounted Successfully');
    }
}
