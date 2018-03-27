import { Injectable } from "@angular/core";
import { RequestOptions, RequestMethod, RequestOptionsArgs, Http, Headers, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ISearch } from "./../Model/SearchR";


@Injectable()

export class SearchResultService {

    private _dataUrl = 'http://10.28.74.57:3000/client';
    private _http: Http;

    constructor(private http: Http) { }

    getClientSearchResults(field: string): Observable<ISearch[]> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        console.log("Sending HTTP Requests now ------------------>");
        return this.http.post('http://10.28.74.57:3000/client',
            { 'householdMemberId': field }).map((res: Response) => <ISearch[]>res.json()
            );
    }

}
