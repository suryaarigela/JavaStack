import { AppRoutingModule } from './app.routing';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule ],
  declarations: [ AppComponent,HomeComponent,ProfileComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
