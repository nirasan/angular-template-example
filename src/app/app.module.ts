import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { DogComponent } from './dog/dog.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
