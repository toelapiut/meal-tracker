import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FoodDetailListComponent } from './fooddetail-list.component';
import { EditedFoodComponent } from './food-edit.component';
import { NewfoodComponent } from './new-foodDetails.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations:
  [
    AppComponent,
    FoodDetailListComponent,
    EditedFoodComponent,
    NewfoodComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
