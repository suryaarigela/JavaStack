import { BusSearchService } from './bus-search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule,MdButtonModule , MdCardModule, MdDatepickerModule ,MdInputModule ,MdNativeDateModule,MdRadioModule,MdToolbarModule} from '@angular/material';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SearchCardComponent } from './search-card/search-card.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { Http,HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    SearchCardComponent,
    SearchResultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,MaterialModule,
    MdButtonModule,
    MdCardModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule,
    MdRadioModule,
    MdToolbarModule,routing,HttpModule,NgxPaginationModule
  ],
  providers: [BusSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
