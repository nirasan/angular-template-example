import {Component} from '@angular/core';

@Component({
  selector: 'app-comp11',
  template: `
    <h2>Form detail</h2>

    <div>
      <form #myForm="ngForm" (ngSubmit)="show()">
        <!-- text -->
        <div>
          <label for="name">Name: </label><br/>
          <input id="name" name="name" type="text" [(ngModel)]="user.name" #name="ngModel" minlength="3" maxlength="20"
                 required><br/>
          <span *ngIf="name.errors?.minlength">Name length must greater than 3.</span>
          <span *ngIf="name.errors?.maxlength">Name length must less than 20.</span>
        </div>
        <!-- select -->
        <div>
          <label for="age">Age: </label><br/>
          <select id="age" name="age" [(ngModel)]="user.age" required>
            <option *ngFor="let a of ages; let i = index" [value]="a">{{ a }}</option>
          </select>
        </div>
        <!-- checkbox -->
        <div>
          <label>Using SNS: </label><br/>
          <ng-container *ngFor="let s of sns; let i = index">
            <label><input name="sns_{{ i }}" type="checkbox" [(ngModel)]="user.sns[i]">{{ s }}</label>
          </ng-container>
        </div>
        <!-- radio -->
        <div>
          <label>Gender: </label><br/>
          <ng-container *ngFor="let g of gender; let i = index">
            <label><input name="gender" type="radio" [value]="g" (click)="user.gender = g">{{ g }}</label>
          </ng-container>
        </div>
        <div>
          <input type="submit" value="送信" [disabled]="myForm.invalid">
        </div>
      </form>
    </div>
  `
})
export class Comp11Component {
  ages = ['under 20\'s', '20\'s', '30\'s', '40\'s', '50\'s', '60\'s', 'over 60\'s'];
  sns = ['twitter', 'facebook', 'google+', 'LINE'];
  gender = ['male', 'female', 'other'];

  user = {
    name: '',
    age: this.ages[1],
    sns: new Array(this.sns.length),
    gender: this.gender[0],
  };

  show() {
    console.log('name: ' + this.user.name);
    console.log('age: ' + this.user.age);
    console.log('sns: ' + this.user.sns);
    console.log('gender: ' + this.user.gender);
  }
}
