import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';



import { DribbbleProvider } from '../providers/dribbble/dribbble';
import { ShotsComponent } from './shots/shots.component';


@NgModule({
  declarations: [
    AppComponent,
    ShotsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    DribbbleProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
