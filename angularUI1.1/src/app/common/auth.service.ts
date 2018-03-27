import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';

import { Login } from "app/Model/api/login.class";
@Injectable()
export class AuthService {

	//LOGIN STATUS
	private isLogged: boolean = false;
	private result: string;
	private loginObj: any;
	private model: Login;

	constructor(private http: Http, private router: Router) { }

	matchDetails(): void {
		this.loginObj = JSON.parse(this.result);

		this.setLoginStatus(true);
		this.router.navigate(['/screening/homeScreen']);
		// if ((this.model.email === this.loginObj[0].email) && (this.model.password === this.loginObj[0].password)) {

		// 	this.setLoginStatus(true);
		// 	this.router.navigate(['/screening/clientInformation']);
		// } else {
		// 	this.setLoginStatus(false);
		// }
	}

	matchLoginDetails(model: Login, router: Router): any {
		this.model = model;
		this.router = router;
		this.http.get("./assets/mock-data/login.json")
			.subscribe((res: Response) => {
				this.result = JSON.stringify(res.json()),
					this.matchDetails()
			});
	}

	getLoginStatus(): boolean {
		return this.isLogged;
	}

	setLoginStatus(isLogged: boolean): void {
		this.isLogged = isLogged;
	}

}
