import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions ,ResponseContentType,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class HeroService {

  constructor( private http:Http) { }
  heros:Hero[];

  getHeros(): Observable<Response>{
     let url="http://localhost:8090/booking/";
   let email= localStorage.getItem("email");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); // also tried other types to test if its working with other types, but no luck
  headers.append('Access-Control-Allow-Origin', '*');
   
    let options = new RequestOptions({
        headers: headers
    });
  return this.http.get(url+"AllHeros",options);
  }



  getHero(id:any): Observable<Response>{
     let url="http://localhost:8090/booking/";
   let email= localStorage.getItem("email");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); // also tried other types to test if its working with other types, but no luck
  headers.append('Access-Control-Allow-Origin', '*');
   
    let options = new RequestOptions({
        headers: headers
    });
  return this.http.get(url+"hero/"+id,options);
  }

  update(hero:Hero): Observable<Response>{
      let url="http://localhost:8090/booking/";
   let email= localStorage.getItem("email");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); // also tried other types to test if its working with other types, but no luck
  headers.append('Access-Control-Allow-Origin', '*');
   
    let options = new RequestOptions({
        headers: headers
    });

    return this.http.post(url+"hero/update",hero,options);
  }

   delete(hero:Hero): Observable<Response>{
      let url="http://localhost:8090/booking/";
   let email= localStorage.getItem("email");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); // also tried other types to test if its working with other types, but no luck
  headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({
        headers: headers
    });

    return this.http.delete(url+"deleteHero/"+hero.id,options);
  }


  search(term: string): Observable<Response> {
      let headers = new Headers();
    headers.append('Content-Type', 'application/json'); // also tried other types to test if its working with other types, but no luck
  headers.append('Access-Control-Allow-Origin', '*');
   
    let options = new RequestOptions({
        headers: headers
    });
    return this.http
               .get("http://localhost:8090/booking/herosearch/"+term);
              // .map(response => response.json().data as Hero[]);
  }
}
