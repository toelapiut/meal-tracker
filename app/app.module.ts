import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FoodDetails} from './food-details.model';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FoodDetails,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
