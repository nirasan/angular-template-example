import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-comp12',
  template: `
    <h2>Child component input and output</h2>
    <app-comp12-a [prop1]="1000" (event1)="log($event)"></app-comp12-a>
  `
})
export class Comp12Component {
  log(a: any) {
    console.log(a);
  }
}

@Component({
  selector: 'app-comp12-a',
  template: `
    <h2>Child component</h2>

    <div>
      <label><input type="text" [(ngModel)]="prop1"></label><br/>
      <button (click)="event1.emit(prop1)">Submit</button>
    </div>
  `
})
export class Comp12AComponent {
  @Input() prop1 = 0;
  @Output() event1 = new EventEmitter<number>();
}
