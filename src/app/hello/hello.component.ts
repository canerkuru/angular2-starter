import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  template: `
    <h1>{{title}}</h1>
    <h2>My message is: {{myMsg}}</h2>
    `
})
export class HelloComponent implements OnInit {
  title = 'Hello Everyone';
  myMsg = 'This is an angular2 web page.';
  
  constructor() { }

  ngOnInit() {
  }

}
