import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector:'new-meal',
  template:`
  <div>
    <div class="form-group">
      <label>Food Name</label>
      <input #fname class="form-control">
    </div>
    <div class="form-group">
      <label>Food Description</label>
      <input #fdescription class="form-control">
    </div>
    <div class="form-group">
      <label>Food Calories</label>
      <input #fcalories class="form-control">
    </div>
    <button (click)="newMealCreate(fname.value, fdescription.value, fcalories.value)" class="btn btn-secondary">Add Food</button>
  </div>

  `
})
export class NewMealComponent {
  @Output() newMealSender=new EventEmitter();
  newMealCreate(fname, fdescription, fcalories){
    var newFood = new Meal(fname, fdescription, fcalories);
    this.newMealSender.emit(newFood)
  }
 }
