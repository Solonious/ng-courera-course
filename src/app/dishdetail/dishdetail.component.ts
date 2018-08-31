import { Component, OnInit } from '@angular/core';

import { Dish } from "../shared/dish";
import { DISHES } from "../shared/dishes-data";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  selectedDish = DISHES[0];

  constructor() { }

  ngOnInit() {
  }

}
