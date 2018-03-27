import { MicroserviceService } from './microservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  text="";
  constructor(private service:MicroserviceService){
    this.text=this.service.getTextFromMicroService();
  }
}
