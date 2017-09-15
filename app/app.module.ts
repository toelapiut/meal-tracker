import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FoodDetailListComponent } from './fooddetail-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations:
  [AppComponent, 
  FoodDetailListComponent,],
  bootstrap: [AppComponent]
})

export class AppModule { }
