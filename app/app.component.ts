import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div *ngIf="thing">
      <h1>Thing is true and therefore it is displayed!</h1>
    </div>
  `
})

export class AppComponent {
  thing = "something that is not false";
}
