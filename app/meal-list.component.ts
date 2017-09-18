import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector:'meal-list',
  template:`
  <div class="container-fluid">
    <div class="row">
    <select (change)="onchange ($event.target.value)" class="selectpicker" class="btn btn-info">
      <option value="all">All Items</option>
      <option value="more">More than 500 Calories</option>
      <option value="less">Less Than 500 Calories</option>
    </select>
      <div >
      <table class="table">
      <tr>
        <th>Meal Name</th>
        <th>Description</th>
        <th>Calories</th>
        <th></th>
        </tr>
        <tr *ngFor="let meal of meals | calories:selectedCalories">
        <td>{{meal.name}}</td>
        <td> {{meal.description}}</td>
        <td>{{meal.calories}}</td>
        <td><button (click)="editButtonClicked(meal)" class="btn btn-success">Edit</button><td>
        </tr>
      </table>

      </div>
    </div>
  </div>
  `
})
export class MealListComponent{
  @Input() meals:Meal[];
  @Output() editButtonClickedSender = new EventEmitter;
  public selectedCalories:string="all";
  onchange(value){
    this.selectedCalories = value;
  }
  editButtonClicked(meal){
    this.editButtonClickedSender.emit(meal)
  }
}
