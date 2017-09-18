import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector:'edit-meal',
  template:`
  <div *ngIf="selectedMeal">
    <div class="form-group">
      <label>Name</label>
      <input [(ngModel)] = "selectedMeal.name" class="form-control">
    </div>
    <div class="form-group">
      <label>Description</label>
      <input [(ngModel)] = "selectedMeal.description" class="form-control">
    </div>
    <div class="form-group">
      <label>Calories</label>
      <input [(ngModel)] = "selectedMeal.calories" class="form-control">
    </div>
    <button (click)="okayButtonClicked()" class="btn btn-danger">Ok</button>
  </div>

  `
})
export class EditMealComponent{
  @Input() selectedMeal:Meal;
  @Output() okayButtonSender = new EventEmitter();
  okayButtonClicked(){ this.okayButtonSender.emit()}
}
