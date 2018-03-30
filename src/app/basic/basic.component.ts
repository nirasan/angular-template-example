import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  prop0 = 'hello';

  prop1 = true;

  prop2 = [1, 2, 3, 4, 5];

  prop3 = 0;

  prop4 = '';

  @Input() prop5 = '';

  constructor() {
  }

  ngOnInit() {
  }

  toggleProp1() {
    this.prop1 = !this.prop1;
  }

  incrProp3() {
    this.prop3 += 1;
  }
}
