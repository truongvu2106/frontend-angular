import { Component } from '@angular/core';
declare var $: any;

@Component({
    selector: 'admin',
    templateUrl: 'src/components/admin/index.html'
})

export class Admin {
    constructor() {
        console.info('Adminstration Component Mounted Successfully');
    }

}
