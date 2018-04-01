import {Component} from '@angular/core';

@Component({
  selector: 'app-comp10',
  template: `
    <h2>Form</h2>

    <div>
      <form #myForm="ngForm" (ngSubmit)="show()">
        <div>
          <label for="name">Name: </label><br/>
          <input id="name" name="name" type="text" [(ngModel)]="user.name" #name="ngModel" required><br />
          <span *ngIf="name.errors?.required">Name is required.</span>
        </div>
        <div>
          <input type="submit" value="送信" [disabled]="myForm.invalid">
        </div>
      </form>
    </div>
  `
})
export class Comp10Component {
  user = {
    mail: '',
    password: '',
    name: '',
    memo: '',
  };

  show() {
    console.log(this.user.name);
  }
}
