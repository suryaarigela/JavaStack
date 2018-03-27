import { HttpClient } from '@angular/common/http';
import { Planets } from './planets.model';
import { Root } from './root.model';
import { routing } from './app.routing';
import { MyServiceService } from './my-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { Http,HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    ObservableTestComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,routing,HttpModule,FormsModule,ReactiveFormsModule
  ],
  providers: [MyServiceService,Root,Planets,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
