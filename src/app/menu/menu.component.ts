import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = [{
    name: 'Pizza',
    image: '',
  category: 'Snack',
  label: 'Papperoni',
  price: '10.55',
  description: 'It\'s very tasty delicious food around the world'
  }]; // TODO will be added later

  constructor() { }

  ngOnInit() {
  }

}
