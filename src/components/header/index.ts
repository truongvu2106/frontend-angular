import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
  selector: 'header',
  templateUrl: 'src/components/header/index.html',
  directives: [ ROUTER_DIRECTIVES ]
})

export class Header {

  constructor() {
  }

}
