import { Pipe, PipeTransform } from '@angular/core';
import { FoodDetails } from './food-details.model';

@Pipe({
  name: 'foodpipe',
  pure: false,
})
export class CompletenessPipe implements PipeTransform {
  transform(input: FoodDetails[], desiredCalories) {
    var output: FoodDetails[] = [];
  if (desiredCalories <= 500) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false)
     }
    }
    return output;
  }else{
  return input;
  }
}
