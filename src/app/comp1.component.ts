import {Component} from '@angular/core';

@Component({
  selector: 'app-comp1',
  template: `
    <h2>Display values</h2>
    <div>prop1 is "{{ prop1 }}"</div>
    <div><input value="{{ prop1 }}"></div>
    <div>{{ prop2 + prop2 }}</div>
    <div>{{ prop1.toUpperCase() }}</div>
    <div>{{ addProp2(100) }}</div>
  `
})
export class Comp1Component {
  prop1 = 'hello world';
  prop2 = 1;

  addProp2(n: number): number {
    return this.prop2 + n;
  }
}
