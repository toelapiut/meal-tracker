import { Component } from '@angular/core';
import { FoodDetails } from './food-details.model';

@Component({
  selector: 'my-app',
  template: `
    <div>
    <img src="../resources/images/logo_big.png">
      <food-list
         [childFoodDetalList]="masterFoodList"
         (clickedButton)="showFoodDetails($event)"
      ></food-list>
      <food-edit
      [childselectedDetail]="selectedFood"
      (clickedButton)="finishedEdit()"
      ></food-edit>
      <new-details
       (newDetails)=addedTask($event)
      ></new-details>
    </div>
`
})

export class AppComponent {
  public masterFoodList: FoodDetails[] = [
    new FoodDetails("Hamburger", "Didn't get a soda or cheese on my burger!", 354)
  ];

  selectedFood: FoodDetails = null;
  showFoodDetails(clickedFood: FoodDetails) {
    this.selectedFood = clickedFood
  }

  finishedEdit() {
    this.selectedFood = null;
  }
  addedTask(newFood: FoodDetails) {
   this.masterFoodList.push(newFood);
 }
}
