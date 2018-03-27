import { BitCoin } from './bitcoin.model';
import { Planets } from './planets.model';
import { Root } from './root.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http,Headers,RequestOptions ,ResponseContentType,Response} from '@angular/http';
@Injectable()
export class MyServiceService {

  constructor(private http: HttpClient) { }

  getCharacter():Observable<Root>{
  /**let headers = new Headers();
    headers.append('Content-Type', 'application/json'); // also tried other types to test if its working with other types, but no luck
  headers.append('Access-Control-Allow-Origin', '*');
   
    let options = new RequestOptions({
        headers: headers
    }); */

    const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set("Access-Control-Allow-Credentials", "true")
        .set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    //.set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

      return this.http.get('https://swapi.co/api/people/1', {
            headers: headers
        });
  }

  getPlanet(character:string):Observable<Planets>{
     const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
  
        .set("Access-Control-Allow-Credentials", "true").set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    .set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    return this.http.get(character,{
            headers: headers
        });
  }

  getBitCoinDetails():Observable<BitCoin>{
      console.log('getBitCoinDetails');
  return  this.http.get("https://bitaps.com/api/ticker/coinbase");
  }



}
