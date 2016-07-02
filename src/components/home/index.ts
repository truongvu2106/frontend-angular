import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'src/components/home/index.html'
})

export class Home implements OnInit {

  constructor() {
    console.info('Home Component Mounted Successfully');
  }

  ngOnInit() {
  }

}
