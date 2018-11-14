import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Angular1h1Component } from './angular1h1/angular1h1.component';

@NgModule({
  declarations: [
    AppComponent,
    Angular1h1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
