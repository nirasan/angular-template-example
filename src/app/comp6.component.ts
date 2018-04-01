import {Component} from '@angular/core';

@Component({
  selector: 'app-comp6',
  template: `
    <h2>Event</h2>

    <div>
      {{ prop1 }}<br/>
      <button (click)="incrProp1()">incr prop1</button>
    </div>

    <div>
      {{ prop2 }}<br />
      <input (input)="prop2 = $event.target.value">
    </div>
  `
})
export class Comp6Component {
  prop1 = 0;
  prop2 = '';

  incrProp1() {
    this.prop1 += 1;
  }
}
