import {Component} from '@angular/core';

@Component({
  selector: 'app-comp2',
  template: `
    <h2>Property and Attribute</h2>
    <div>
      <input [attr.size]="prop2" [value]="prop1"><br />
      <input [attr.size]="doubleProp2()" [value]="prop1.toUpperCase()">
    </div>
  `
})
export class Comp2Component {
  prop1 = 'hello world';
  prop2 = 15;

  doubleProp2(): number {
    return this.prop2 * 2;
  }
}
