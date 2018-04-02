import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {Comp1Component} from './comp1.component';
import {Comp2Component} from './comp2.component';
import {Comp3Component} from './comp3.component';
import {Comp4Component} from './comp4.component';
import {Comp5Component} from './comp5.component';
import {Comp6Component} from './comp6.component';
import {Comp7Component} from './comp7.component';
import {Comp8Component} from './comp8.component';
import {Comp9Component} from './comp9.component';
import {Comp10Component} from './comp10.component';
import {Comp11Component} from "./comp11.component";

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    Comp7Component,
    Comp8Component,
    Comp9Component,
    Comp10Component,
    Comp11Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
