import { Component,OnInit } from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: Http){
 
  }
  respo:Observable<string>;
    
  ngOnInit(){
  this.respo= this.http.get('http://localhost:8080/hello').map(res=>res.);
  }
  title = 'app';
   time = new Observable<String>((observer: any) => {
    setInterval(() => observer.next(
     
    ), 1000);
  });


}
