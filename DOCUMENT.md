
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

# if で表示する要素を切り替える

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
