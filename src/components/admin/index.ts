import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { BlogManagement } from './blog/index';
import { GalleryManagement } from './gallery/index';

@Component({
    selector: 'admin',
    templateUrl: 'src/components/admin/index.html',
    providers: [AuthService],
    directives: [ROUTER_DIRECTIVES]
})

export class Admin {
    constructor() {
        console.info('Adminstration Component Mounted Successfully');
    }
}
