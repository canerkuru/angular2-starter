import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

 clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  
  values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  
   value = '';
  onEnter(value: string) { this.value = value; }
  
  
   heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
