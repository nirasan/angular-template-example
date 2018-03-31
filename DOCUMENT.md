
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

