import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
@Injectable()
export class MicroserviceService {
  headers = new Headers();
  constructor(private http:Http) {

      
    this.headers.append('Content-Type', 'application/json'); // also tried other types to test if its working with other types, but no luck
  this.headers.append('Access-Control-Allow-Origin', '*');
   
    let options = new RequestOptions({
        headers: this.headers
    });
   }

  getTextFromMicroService():string{
    let text="";
   this.http.get("http://localhost:8080/students",this.headers).subscribe(
     res=>     console.log('json',res.json));
     //text=text+JSON.stringify(res.json()));
  //console.log('json',JSON.stringify(res.json)));
     
   text= text +  " ";
  // this.http.get("http://localhost:8080/lecturers",this.headers).subscribe(res=> text=text+JSON.stringify(res.json()));
   return text;
  }
  
}
