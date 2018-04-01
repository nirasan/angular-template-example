import {Component} from '@angular/core';

@Component({
  selector: 'app-comp9',
  template: `
    <h2>2 way binding</h2>

    <div>
      <p>prop1 is {{ prop1 }}</p>

      <input [value]="prop1" (input)="prop1 = $event.target.value">
      <br />

      <input [(ngModel)]="prop1">
    </div>
  `
})
export class Comp9Component {
  prop1 = 'hello world';
}
