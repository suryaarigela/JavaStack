import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TrialBudgetRequest }           from 'app/Model/api/trial-budget-request.class';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TrailBudgetService {
     
     constructor (private http: Http) {}
     
    private trailBudgetUrl = 'http://localhost:4200/assets/mock-data/trailBudget.json'; 
     
     getTrailBudget() : Observable<TrialBudgetRequest>{
     
			return this.http.get(this.trailBudgetUrl)
                         .map(res => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }

}
