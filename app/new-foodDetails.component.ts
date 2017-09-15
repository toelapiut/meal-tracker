import { Component, Output, EventEmitter } from '@angular/core';
import { FoodDetails } from './food-details.model';

@Component({
  selector: 'new-details',
  template: `
  <h1>Create new Reviews</h1>
  <div>
    <label>Enter Food  Consumed</label>
    <input class="form-control" #newfoodName >
  </div>

  <div>
    <label>Enter Details</label>
    <input class="form-control" #newFooddetails >
  </div>

  <div>
    <label>Enter amount of Calories</label>
    <input class="form-control" #newFoodCalories >
    <button  (click)="addclick(newfoodName.value, newFooddetails.value,newFoodCalories.value )">Add</button>
  </div>
  `
})

export class NewfoodComponent {
  @Output() newDetails = new EventEmitter();
  addclick(FoodName: string, Fooddetails: string, FoodCalories: number) {
  var newFoodDetails: FoodDetails = new FoodDetails(FoodName, Fooddetails, FoodCalories);
  this.newDetails.emit(newFoodDetails);
    }
}
