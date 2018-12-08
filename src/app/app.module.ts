import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CowsandbullComponent } from './cowsandbull/cowsandbull.component';


@NgModule({
  declarations: [
    AppComponent,
    CowsandbullComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
