import { Component } from '@angular/core';
import { FoodDetails} from './food-details.model';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h1>Thing is true and therefore it is displayed!</h1>
    </div>
`
})

export class AppComponent {
  public masterFoodList: FoodDetails[] = [
    new FoodDetails("Hamburger","Didn't get a soda or cheese on my burger!",354)
  ];

  selectedFood: FoodDetails = null;
  showFoodDetails(clickedFood: FoodDetails) {
    this.selectedFood = clickedFood
  }
}
