import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiManager {
    static readonly baseUrlDev: String = 'http://10.88.32.139:8080/eeapi/public';
    static readonly lookup: string = '/lookup';

    static readonly baseJsonUrlDev: String = './assets/mock-data';
    static readonly lookUpsUrl: string = '/lookupsApi.json';
    static readonly householdMember3Url: string = '/householdmember3.json';
    public static readonly POST = 1;
    public static readonly GET = 2;
    public static readonly PUT = 3;
    public static readonly JSONFILE = 4;
    static readonly householdMemberUrl: string = '/householdmember.json';

    constructor(private http: Http) { }

    fetchData(url: string, params: any, isGet: number, successMethod?: Function, failureMethod?: Function) {
        let result: Observable<Response>;
        if (isGet == ApiManager.GET) {
            result = this.http.get(ApiManager.baseUrlDev + ApiManager[url], this.getOptions(params));
        } else if (isGet == ApiManager.POST) {
            result = this.http.post(ApiManager.baseUrlDev + ApiManager[url], this.getOptions(params, true));
        } else if (isGet == ApiManager.PUT) {
            result = this.http.put(ApiManager.baseUrlDev + ApiManager[url], this.getOptions(params));
        } else if (isGet == ApiManager.JSONFILE) {
            result = this.http.get(ApiManager.baseJsonUrlDev + ApiManager[url])
        }
        return result.map((res: Response) => {
            console.log("API Call Success");
            if (successMethod != undefined)
                successMethod();
            return res.json();
        }).catch((error: Response | any) => {
            console.log("API call failure: Catch");
            let errMsg: string="";
            if (error instanceof Response) {
                const body = error.json() || '';
                const err = body.error || JSON.stringify(body);
                errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            } else {
                errMsg = error.message ? error.message : error.toString();
             }
            console.error(errMsg);
            if (failureMethod != undefined)
                failureMethod();
            return Observable.throw(errMsg);
            });
    }
    
    getOptions(params: any, addHeader: boolean = false) {
        let customHeaders = new Headers();
        if(addHeader)
            customHeaders.append('Content-Type', 'application/json');            
        customHeaders.append('Accept-Language', 'en-US');
        let customParams: URLSearchParams = new URLSearchParams();
        for (let key in params) {
            customParams[key] = params[key];
        }
        return new RequestOptions({ headers: customHeaders, search: customParams });
    }

}
