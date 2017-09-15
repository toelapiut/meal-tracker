import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodDetails } from './food-details.model';

@Component({
  <div * ngIf='childselectedDetail' >
  <h1>Edit YouR food Details< /h1>
  < div >
  <label>Enter Type of Food < /label>
  < input[(ngModel)]='childselectedFood.foodName' >
  </div>
  < /div>
})
