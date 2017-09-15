import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodDetails } from './food-details.model';

@Component({
  selector: 'food-edit',
  template: `
     <div *ngIf='childselectedDetail' >
       <h1>Edit Your food Details</h1>

       <div>
        <label>Enter Type of Food </label>
        <input  class="form-control" [(ngModel)]='childselectedDetail.FoodName'>
       </div>
       <div>
         <label>Enter Type of Details </label>
         <input  class="form-control" [(ngModel)]='childselectedDetail.Fooddetails'>
       </div>
       <div>
         <label>Enter Type of Calories </label>
         <input class="form-control" [(ngModel)]='childselectedDetail.FoodCalories'>
         <button (click)="clickwhendone()">Done</button>
       </div>
    </div>
  `
})

export class EditedFoodComponent {
  @Input() childselectedDetail: FoodDetails;
  @Output() clickedsender = new EventEmitter();
  clickwhendone() {
    this.clickedsender.emit();
  }
}
