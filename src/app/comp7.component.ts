import {Component} from '@angular/core';

@Component({
  selector: 'app-comp7',
  template: `
    <h2>Class</h2>

    <div>
      <p [class.center]="prop1">1. this is center.</p>
      <p [class.center]="!prop1">1. this is not center.</p>

      <p [ngClass]="{'center': prop1, 'bold': prop1, 'italic': !prop1}">2. this is center and bold.</p>

      <p [ngClass]="{'center': !prop1, 'bold italic': prop1}">3. this is bold and italic.</p>
    </div>
  `,
  styles: [`
    .center {
      text-align: center
    }

    .bold {
      font-weight: bold
    }

    .italic {
      font-style: italic
    }
  `]
})
export class Comp7Component {
  prop1 = true;
}
