import {Component} from '@angular/core';

@Component({
  selector: 'app-comp5',
  template: `
    <h2>Switch</h2>

    <ng-container *ngFor="let e of prop1">
      <ng-container [ngSwitch]="e.type">
        <div *ngSwitchCase="'number'">number is {{ e.value }}</div>
        <div *ngSwitchCase="'string'">string is {{ e.value }}</div>
        <div *ngSwitchDefault>unknown type: {{ e.type }} value: {{ e.value }}</div>
      </ng-container>
    </ng-container>
  `
})
export class Comp5Component {
  prop1 = [
    {type: 'number', value: 1},
    {type: 'string', value: 'hello'},
    {type: 'number', value: 100},
    {type: 'array', value: [1, 2, 3]},
  ];
}
