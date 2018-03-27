import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ConstantsService } from './../common/constants.service';
import { ScreeningHeaderComponent } from 'app/header/screening.component';
import { Router } from "@angular/router";
import { TrialBudgetRequest } from 'app/Model/api/trial-budget-request.class';
import { TrialBudgetClient } from 'app/Model/api/trial-budget-client.class';
import { EarnedIncome } from 'app/Model/api/earned-income.class';
import { UnearnedIncome } from 'app/Model/api/unearned-income.class';
import { Asset } from 'app/Model/api/asset.class';
import { VehicularAsset } from 'app/Model/api/vehicular-asset.class';
import { TrailBudgetService } from 'app/common/trail-budget.service';
import { environment } from 'environments/environment';
import { TrialBudgetAppComponent } from './trial-budget-app.component';

@Component({
	selector: 'app-trial-budget',
	templateUrl: './trial-budget.component.html',
	styleUrls: ['./trial-budget.component.css']
})
export class TrialBudgetComponent extends TrialBudgetAppComponent implements OnInit {

	request: TrialBudgetRequest = new TrialBudgetRequest();
	public trustForm: FormGroup;
	private targetValue: number;
	private data : Map<String,String> = new Map<String,String>();
	type : number = 3;
	constructor(private _fb: FormBuilder, private constantsService: ConstantsService, private header: ScreeningHeaderComponent, private router: Router) {
		super();
		this.constantsService.subheaderTitle("Trial Budget");
	}

	buildForm() {
		this.request.medicalExpense = ConstantsService.trailBudgetData.medicalExpense;
		this.request.utilities = ConstantsService.trailBudgetData.utilities;
		this.request.ltc = ConstantsService.trailBudgetData.ltc;
		this.request.mortage = ConstantsService.trailBudgetData.mortage;
		this.request.houseHoldUtility = ConstantsService.trailBudgetData.houseHoldUtility;
		this.request.assets = ConstantsService.trailBudgetData.assets;
		this.request.vehicularAssets = ConstantsService.trailBudgetData.vehicularAssets;
		this.request.livingArrangement = ConstantsService.trailBudgetData.livingArrangement;
		this.request.householdMemberSize = ConstantsService.trailBudgetData.householdMemberSize;
		this.request.program = ConstantsService.trailBudgetData.program;
		this.request.irsDependents = ConstantsService.trailBudgetData.irsDependents;
		this.request.deemarEarnedIncome = ConstantsService.trailBudgetData.deemarEarnedIncome;
		this.request.deemarEarnedIncomeExpense = ConstantsService.trailBudgetData.deemarEarnedIncomeExpense;
	}
	ngOnInit() {

		// this.request = new TrialBudgetRequest();
	/*	
*/


console.log('*****************APICALL********************');
	if(environment.mockService == true){
		let tb=this.constantsService.getTrailBudget()
			.subscribe(
			response => {
			this.request = response;
				this.populateData();
			},
			err => {
				console.log(err);
			});
	}else{
		console.log('%%%%%%%%%%%%%%%%%%' + this.request.assets.length);
		let client = new TrialBudgetClient();
		client.thirtyAndOneThirdYN = "";
		client.thirtYN = "";
		client.dependentCareExpense = 0;
		client.earnedIncomeExpenseType = "";
		client.earnedIncomeExpense = 0;
		let ei = new EarnedIncome();
		ei.incomeType = '';
		ei.amount = 0;
		client.earnedIncomes.push(ei);

		let ei1 = new EarnedIncome();
		ei1.incomeType = '';
		ei1.amount = 0;
		let uei = new UnearnedIncome();
		uei.houseHoldUnearnedIncomes.push(ei1);
		uei.spouseUnearnedIncome = 1;
		uei.deemerUnearnedIncome = 1;

		let ast = new Asset();
		ast.assetType = "";
		ast.amount = 0;

		let vst = new VehicularAsset();
		vst.useType = "",
			vst.fmw = "",
			vst.encumb = ""
		this.request.clients.push(client);//
		this.request.unearnedIncomes=uei;
		this.request.assets.push(ast);
		this.request.vehicularAssets.push(vst);
		if (ConstantsService.trailBudgetData != null) {
			console.log('Loading......' + this.request.householdMemberSize);
			console.log('Loading......' + ConstantsService.trailBudgetData.assets.length);
			this.buildForm();
		}
	}	
		
		
		this.trustForm = this.toFromGroup(this.request)
		this.populateData();

	}

	populateData() {
		this.trustForm = this.toFromGroup(this.request)
		this.trustForm.patchValue(this.request);
		
	}
	toFromGroup(data: TrialBudgetRequest) {
		return this._fb.group({

			medicalExpense: 0, //number
			houseHoldUtility: 0,
			ltc: 0,
			utilities: '',
			mortage: 0,
			clients: [],
			assets: [],
			vehicularAssets: [],
			unearnedIncomes: {
			houseHoldUnearnedIncomes:  [],
			spouseUnearnedIncome: 0,
			deemerUnearnedIncome:0
			}

			,
			livingArrangement: ',',
			householdMemberSize: 0,
			program: '',
			irsDependents: '',
			deemarEarnedIncome: 0,
			deemarEarnedIncomeExpense: 0


		});
	}
	back() {
		this.router.navigate(['/screening/homeScreen']);
		this.constantsService.changedStatusOnDefault('programStatus');
		this.constantsService.changedStatus('TrailBudgetScreen', false);
	}
	next() {
		console.log(this.type);
		this.router.navigate(['/screening/trialBudgetSummary']);
	}

	save(model) {
		const formModel = model.value;
		console.log(formModel);
		console.log(formModel.unEarnedIncome);
		const assetDeepCopy: Asset[] = formModel.assets
			.map(
			(income: Asset[]) => Object.assign({}, income)
			);
		// model.value.medicalExpense=
		model.value.assets = assetDeepCopy;
		ConstantsService.trailBudgetData = model.value;
		this.next();
	}
}
