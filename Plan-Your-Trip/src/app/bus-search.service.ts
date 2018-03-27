import { SearchCardInterface } from './search-card/searchCard.class';
import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions ,ResponseContentType,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BusSearchService {

  constructor( private http:Http) { }
  // Observable source
  private static resultsSource = new Subject<any>();

  // Observable stream
  static results$ = BusSearchService.resultsSource.asObservable();

  getSearchResults(model: SearchCardInterface): Observable<Response> {
    const baseUrl = 'http://developer.goibibo.com';
    const endpoint = '/api/bus/search/';
    const params = {
      app_id: '61b02236',
      app_key: '15d0e0c3ceeb313ee3eb5b9aa0b99505',
      format: 'json',
      source: model.origin,
      destination: model.destination,
      dateofdeparture: this.formatDate(model.departureDate),
      dateofarrival: this.formatDate(model.arrivalDate)
    }
    const url = `${baseUrl}${endpoint}?${this.objToUrlParams(params)}`;
    return this.http.get(url);
    //.subscribe(data => {
      //console.log('results from back end ',data.json());
     // BusSearchService.resultsSource.next(data['data']);
    //});
  }

  
  // This is an util method to return YYYYMMDD date string
  formatDate(date: Date): string {
    const mm = date.getMonth() + 1; // getMonth is zero indexed
    const dd = date.getDate();
    return `${date.getFullYear()}${ mm > 9 ? mm : '0' + mm}${dd > 9 ? dd : '0' + dd}`;
  }

  // This is a method to convert a dictionary to url param string
  objToUrlParams(params): string {
    let toret = '';
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        toret += `${key}=${encodeURIComponent(params[key])}&`;
      }
    }
    return toret;
  }
}
