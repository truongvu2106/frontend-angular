import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'mn-panel',
    templateUrl: 'src/components/mnPanel/index.html',
    directives: [ NgFor, NgIf ]
})


export class MNPanel {
    @Input() title;
    @Input() contents: any[];

    constructor() {
        console.info('Panel Component Mounted Successfully');
    }

    typeOf(value) {
        return typeof value;
    }

}
