import {Component} from '@angular/core';

@Component({
  selector: 'app-comp4',
  template: `
    <h2>For</h2>

    <ng-container *ngFor="let e of prop1">
      <div>1. element is {{ e }}</div>
    </ng-container>

    <ng-container *ngFor="let e of func1(); let i = index">
      <div>2. element is {{ e }}. index is {{ i }}</div>
    </ng-container>
  `
})
export class Comp4Component {
  prop1 = [1, 2, 3, 4, 5];

  func1(): string[] {
    return ['hello', 'world'];
  }
}
