import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodDetails } from './food-details.model';

@Component({
  selector: 'food-list',
  template: `
  <div *ngFor='let currentFoodDetails of childFoodDetalList'>
    <button (click)='editButton(current)'>Error!!</button>
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
