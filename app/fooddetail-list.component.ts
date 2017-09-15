import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodDetails } from './food-details.model';

@Component({
  selector: 'food-list',
  template: `
  <select (change)="onChange($event.target.value)">
  <option value="all">Show All</option>
  <option value="isDone">500 Calories & Above </option>
</select>
  <div *ngFor='let currentFoodDetails of childFoodDetalList | foodpipe:selectedCompleteness'>

    <button (click)='editButton(currentFoodDetails)'>Error!!</button>
  </div>
  `
})

export class FoodDetailListComponent {
  @Input() childFoodDetalList: FoodDetails[];
  @Output() clickedButton = new EventEmitter();

  editButton(anotherchildFoodDetails: FoodDetails) {
    this.clickedButton.emit(anotherchildFoodDetails);
  }
}
