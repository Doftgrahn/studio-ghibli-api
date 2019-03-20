import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GhibliComponent } from './ghibli/ghibli.component';


import {DataService} from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    GhibliComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
