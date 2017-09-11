@Component({
  selector: 'my-thing',
  template: `
    <h3 (click)="doStuff()"></h3>
  `
})

export class SomeComponent {
  doStuff() {

  }
}
