import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EarnedIncomeClient } from 'app/Model/api/earned-income-client.class';
import { ConstantsService } from './../common/constants.service';
import { ScreeningHeaderComponent } from 'app/header/screening.component';
import { Router } from "@angular/router";
import { KeyValue } from 'app/Model/api/key-value.class';
import { TrialBudgetAppComponent } from './trial-budget-app.component';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./trial-budget.component.css']
  
})
export class ClientComponent extends TrialBudgetAppComponent {
 
  eiExpensetypeDropdown: Array<KeyValue> = new Array<KeyValue>();

  errorMessage:string;

  @Input() formArray: FormArray;

  @Input() client: EarnedIncomeClient;

  @Input() clientNr:number;

  clientGroup: FormGroup;

  index: number;
  
  @Output() removed = new EventEmitter(); 

  constructor(private fb: FormBuilder, private constantsService: ConstantsService, private header: ScreeningHeaderComponent, private router: Router,private cdRef: ChangeDetectorRef) { 
  super();
  }

  ngOnInit() {
     // this.clientGroup = this.toFormGroup(this.client);

       this.clientGroup = this.fb.group({
	  earnedIncomes: [],
		incomeOption1: false,
		incomeOption2: false,
		earnedIncomeExpense: {
			incomeType: '',
			amount: 1
		},
		dependentCareExpense: 1
		});

      resolvedPromise.then(() => {
          this.index = this.formArray.length;
          this.formArray.push(this.clientGroup);
      });
      let requestLookup = [ "Type"];
    
    this.constantsService.loadLookupData(requestLookup)
      .subscribe( data => {
          this.eiExpensetypeDropdown = data.get("EIexpenseType");

          },
        error =>  this.errorMessage = <any>error);
  }

  toFormGroup(client: EarnedIncomeClient) {
	  console.log("Client :: "+client)
      return this.fb.group({
          /*id: client.id,
          name: client.name
		  */
		earnedIncomes: client.earnedIncomes,
		incomeOption1: false,
		incomeOption2: false,
		earnedIncomeExpense: {
			incomeType: '',
			amount: 1
		},
		dependentCareExpense: 1
      });
  }
}