import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'src/components/home/index.html'
})

export class Home {

  constructor() {
    console.info('Home Component Mounted Successfully');
  }

}
