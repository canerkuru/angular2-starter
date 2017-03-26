import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-bacic',
  templateUrl: './bacic.component.html',
  styleUrls: ['./bacic.component.css']
})
export class BacicComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
  
 heroes_c = [
  new Hero(1, 'Superman'),
  new Hero(13, 'Batman'),
  new Hero(15, 'Spiderman')
];

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  }

  ngOnInit() {
  }

}
