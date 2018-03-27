import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { EarnedIncome } from 'app/Model/api/earned-income.class';
import { ConstantsService } from './../common/constants.service';
import { ScreeningHeaderComponent } from 'app/header/screening.component';
import { Router } from "@angular/router";
import { KeyValue } from 'app/Model/api/key-value.class';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'un-earn-income',
  templateUrl: './unearnedIncome.component.html', 
    styleUrls: ['./trial-budget.component.css']

})
export class UnEarnedIncomeComponent {


  unearnedIncometypeDropdown: Array<KeyValue> = new Array<KeyValue>();

  errorMessage:string;

  @Input() formArray: FormArray;

  @Input() unEarnedIncome: EarnedIncome;

  unearnedIncomeGroup: FormGroup;

  index: number;

  @Output() removed = new EventEmitter();

  constructor(private fb: FormBuilder,private constantsService: ConstantsService, private header: ScreeningHeaderComponent, private router: Router, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
     // this.unearnedIncomeGroup = this.toFormGroup(this.unEarnedIncome);
      console.log('UnEarnedIncomeComponent*************'+this.unEarnedIncome.amount);
       this.unearnedIncomeGroup = this.fb.group({
      
			incomeType: ['', [Validators.required]],
			amount: ['', [Validators.required]],
		});


      resolvedPromise.then(() => {
		  console.log("un-earn-income :: "+this.formArray);
          this.index = this.formArray.length;
          this.formArray.push(this.unearnedIncomeGroup);
      });
      let requestLookup = [ "Type"];
    
    this.constantsService.loadLookupData(requestLookup)
      .subscribe( data => {
          this.unearnedIncometypeDropdown = data.get("UnearnedIncomeType");

          },
        error =>  this.errorMessage = <any>error);
  }

  toFormGroup(unEarnedIncome: EarnedIncome) {
	  		console.log("unEarnedIncome :::::::: "+unEarnedIncome.amount);

      return this.fb.group({
          /*id: earnIncome.id,
          type: 1,
          text: ''
		  
		incomeType: '',
		amount: 1
		*/
		
		incomeType: '',
		amount: 1
      });
  }
}