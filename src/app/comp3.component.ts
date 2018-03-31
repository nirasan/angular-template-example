import {Component} from '@angular/core';

@Component({
  selector: 'app-comp3',
  template: `
    <h2>If</h2>

    <ng-container *ngIf="prop1">
      <div>1. prop1 is true</div>
    </ng-container>

    <ng-container *ngIf="prop1; else prop1ElseBlock">
      <div>2. prop1 is true</div>
    </ng-container>
    <ng-template #prop1ElseBlock>
      <div>2. prop1 is false</div>
    </ng-template>
  `
})
export class Comp3Component {
  prop1 = true;
}
