import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';

import { WarningsComponent } from './warnings/warnings.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
       WarningsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
