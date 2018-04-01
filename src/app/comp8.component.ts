import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp8',
  template: `
    <h2>Style</h2>

    <div>
      <p [style.text-align]="prop1 ? 'center' : 'left'">1. this is center.</p>

      <p [ngStyle]="prop2">2. this is center and italic and bold.</p>
    </div>
  `
})
export class Comp8Component implements OnInit {
  prop1 = true;

  prop2 = {};

  ngOnInit() {
    this.prop2 = {
      'text-align': this.prop1 ? 'center' : 'left',
      'font-style': !this.prop1 ? 'normal' : 'italic',
      'font-weight': !this.prop1 ? 'normal' : 'bold',
    };
  }
}
