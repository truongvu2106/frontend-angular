import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var CKEDITOR: any;

@Component({
  selector: 'home',
  templateUrl: 'src/components/home/index.html'
})

export class Home implements OnInit {

  constructor() {
    console.info('Home Component Mounted Successfully');
  }

  ngOnInit() {
      CKEDITOR.replace('editor1');
  }

}
