
逆引き Angular テンプレート

Angular TypeScript

# はじめに

* Angular テンプレート文法について[公式ドキュメント](https://angular.io/guide/template-syntax)がよくできていて基本的に読めばわかるようになっているが、索引と自分の勉強のために使い方の例をまとめてみた。

# バージョン

* @angular/core 5.2.9

# リポジトリ

* https://github.com/nirasan/angular-template-example

# 動的に値を表示する

* `{{ 式 }}` で式の実行結果を表示する.
* `{{ 式 }}` は要素の値やプロパティとして記述できる.
* 式は JavaScript で記述するが利用できない記号もある. 詳細は[公式ドキュメント](https://angular.io/guide/template-syntax#template-expressions).

```src/app/comp1.component.ts
import {Component} from '@angular/core';

@Component({
  selector: 'app-comp1',
  template: `
    <h2>Display values</h2>
    <div>prop1 is "{{ prop1 }}"</div>
    <input value="{{ prop1 }}">
    <div>{{ prop2 + prop2 }}</div>
    <div>{{ prop1.toUpperCase() }}</div>
    <div>{{ addProp2(100) }}</div>
  `
})
export class Comp1Component {
  prop1 = 'hello world';
  prop2 = 1;

  addProp2(n: number): number {
    return this.prop2 + n;
  }
}
```

# プロパティやアトリビュートを設定する

* `[プロパティ]="式"` で式の実行結果をプロパティに設定する.
* `[プロパティ]="式"` と `プロパティ={{ 式 }}` は等価.
* `[attr.アトリビュート]="式"` で式の実行結果をアトリビュートに設定する.

```src/app/comp2.component.ts
import {Component} from '@angular/core';

@Component({
  selector: 'app-comp2',
  template: `
    <h2>Property and Attribute</h2>
    <div>
      <input [attr.size]="prop2" [value]="prop1"><br />
      <input [attr.size]="doubleProp2()" [value]="prop1.toUpperCase()">
    </div>
  `
})
export class Comp2Component {
  prop1 = 'hello world';
  prop2 = 15;

  doubleProp2(): number {
    return this.prop2 * 2;
  }
}
```

# if で分岐する

* `*ngIf="式"` で式の結果が true ならその要素を表示する.
  * プレフィックスの `*` の意味は[公式ドキュメント](https://angular.io/guide/structural-directives#the-asterisk--prefix)で.
* `ng-container` は DOM に出力されない要素で if などと合わせて利用すると DOM 要素を汚さずに制御構造を記述できる.
* `ng-temlate` はデフォルトでは表示されない要素で if などの制御構造と合わせて利用された際に指定された場合だけ表示される.
* `*ngIf="条件; else 変数名"` で条件が false の場合に変数名で指定された要素が表示される.
  * 変数名と要素の関連付けは要素のプロパティのような形で `#変数名` とすることで行われる.

```src/app/comp3.component.ts
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
      2. prop1 is false
    </ng-template>
  `
})
export class Comp3Component {
  prop1 = false;
}
```

# for でループする

* `*ngFor="let e of array"` で配列をループで順次処理する.
* `*ngFor="let e of array; let i = index` で配列のインデックスも取得できる.

```src/app/comp4.component.ts
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
```

# switch で分岐する

* switch の利用は三段構え.

1. `[ngSwitch]="式"` で判定対象を定義し.
1. `*ngSwitchCase="値"` で分岐先の条件の値を定義し.
1. デフォルトケースを `*ngSwitchDefault` で定義する.

```src/app/comp5.component.ts
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
```

# イベントを扱う

* `(イベント)="式"` とするとイベント発生時に式が実行される.

```src/app/comp6.component.ts
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
```

# クラスを動的に指定する

* `[class.クラス名]="式"` で式が true の場合だけクラスが付与される.
* `[ngClass]="{ 'クラス名': 式 }"` で式が true のクラスがまとめて付与される.クラス名は空白区切りで複数指定できる.

```src/app/comp7.component.ts
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
```

# スタイルを動的に指定する

* `[style.スタイル名]="式"` でスタイルの値に式の結果を指定する.
* `[ngStyle]="{ 'スタイル名': 式 '}"` でスタイルをまとめて指定する.

```src/app/comp8.component.ts
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
```

# UI とコンポーネントで値を同期する

* `[(ngModel)]="プロパティ名"` とすると要素の value とプロパティの変更を相互に反映しあって値を同期できる.
* `[(ngModel)]="プロパティ名"` は `[value]="プロパティ" (event)="プロパティ名 = value"` のシンタックスシュガーのようなもの.

```src/app/comp9.component.ts
import {Component} from '@angular/core';

@Component({
  selector: 'app-comp9',
  template: `
    <h2>2 way binding</h2>

    <div>
      <p>prop1 is {{ prop1 }}</p>

      <input [value]="prop1" (input)="prop1 = $event.target.value">
      <br />

      <input [(ngModel)]="prop1">
    </div>
  `
})
export class Comp9Component {
  prop1 = 'hello world';
}
```

# フォームの基本

* form 要素では `#myForm="ngForm"` とすることでこの要素を ngForm クラスにキャストしたうえで myForm という変数名で参照できるようにする.
  * ngForm にキャストすることでバリデーションなどが利用できるようになる.
  * `(ngSubmit)` イベントは ngForm のサブミットイベント.

* input 要素では `#name="ngModel"` とすることで ngModel にキャストしてバリデーションなどを利用できるようにする.
  * `required` はバリデーションルールで必須項目のこと.
  * ngModel によって `name.errors?.required` のようにバリデーションルール毎にエラーがあるかがわかるようになりエラーメッセージが容易に表示できる.

```src/app/comp10.component.ts
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
```

# フォームの応用

* 前回も見た text と select, checkbox, radio の例.

```src/app/comp11.component.ts
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
```

# 子コンポーネントへ値を渡す / 子コンポーネントから値を受け取る

* 親コンポーネントから子コンポーネントへは子のプロパティに親が値をセットする形で値を引き渡す.
  * 親コンポーネント側では DOM のプロパティと同様に `[プロパティ]="式"` とすることで値をセットする.
  * 子コンポーネント側では公開するプロパティに `@Input()` ディレクティブをつける.

* 親コンポーネントが子コンポーネントから値を受け取りたい場合は子コンポーネントでイベントを定義して親コンポーネントでハンドリングする.
  * 親コンポーネント側では `(イベント)="式"` とすることで子のイベント経由で値を受け取ることができる.
  * 子コンポーネント側では `@Output() イベント名 = new EventEmitter<引き渡したい値の型>();` というプロパティを定義することでイベントを公開し `イベント.emit(引き渡したい値)` とすることでイベントを発火する.

```src/comp12.component.ts
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
```
