import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EarnedIncome } from 'app/Model/api/earned-income.class';
import { TrialBudgetAppComponent } from './trial-budget-app.component';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'earnedIncome',
  templateUrl: './earnedIncome.component.html',
  styleUrls: ['./trial-budget.component.css']
})
export class EarnedIncomeComponent extends TrialBudgetAppComponent {
  @Input() formArray: FormArray;

  @Input() earnedIncome: EarnedIncome;

  earnedIncomeGroup: FormGroup;

  index: number;
  
  earningAmount:number ;

  @Output() removed = new EventEmitter();

  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef) { 
  super();
  }

  ngOnInit() {
	  
	  this.earningAmount = 100;
      this.earnedIncomeGroup = this.toFormGroup(this.earnedIncome);


      resolvedPromise.then(() => {
          this.index = this.formArray.length;
          this.formArray.push(this.earnedIncomeGroup);
      })
  }

  toFormGroup(earnedIncome: EarnedIncome) {
	  console.log("earnedIncome :: "+earnedIncome); 
      return this.fb.group({
          /*id: earnIncome.id,
          type: 1,
          text: ''
		  */
		incomeType: '',
		amount: 1
      });
  }

    numberOnly(event: any) {
    return (event.charCode >= 48 && event.charCode <= 57);
  }
}