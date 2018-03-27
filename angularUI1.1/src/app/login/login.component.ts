import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataShareService } from 'app/common/data-share.service';
import { ConstantsService } from "app/common/constants.service";
import { AuthService } from 'app/common/auth.service';
import { Router } from "@angular/router";
import { ApiManager } from "app/common/api-manager.service";
import { Login } from "app/Model/api/login.class";
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent {

	private loginPagemessage: string;
	private result: string;
	private loginObj: any;
	private loginForm: FormGroup;
	private loginStatus: boolean;
	private data: any = {};
	constructor(private _sharedService: DataShareService, private constantsService: ConstantsService,
		private router: Router, private authService: AuthService, private formBuilder: FormBuilder, private apiManager: ApiManager) {
		this.loginPagemessage = this._sharedService.getDataFromMapAndClearData("loginPageMessage");
	}


	ngOnInit() {
		this.loginForm = this.formBuilder.group({

			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]],
		});
		this.apiManager.fetchData("lookup", { "moduleName": "screening" }, ApiManager.GET, () => { console.log("success") }, () => { console.log("failure") })
			.subscribe((res: Response) => {
				console.log("API Call Success: Subscribe");
				// this.constantsService.lookupData = res as any as LookupContainerModel;
				// this.data = res;
				console.log(res);
			},
			error => {
				console.log("API call failure: Error");
			});
	}
	save(model: Login, isValid: boolean) {
		// if (isValid) {

		this.authService.matchLoginDetails(model, this.router);
		//this.constantsService.getLookupData();

		// }
	}
	get() {
		this.apiManager.fetchData("lookup", { "lookupType": "YesNo" }, ApiManager.GET, () => { console.log("success") }, () => { console.log("failure") })
			.subscribe((res: Response) => {
				console.log("API Call Success: Subscribe");
				this.data = res;
				console.log("fetched object: " + JSON.stringify(res));
			},
			error => {
				console.log("API call failure: Error");
			});
	}

}

