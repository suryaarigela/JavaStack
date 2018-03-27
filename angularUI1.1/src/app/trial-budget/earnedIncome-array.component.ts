import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { EarnedIncome } from 'app/Model/api/earned-income.class';

@Component({
  selector: 'earnIncome-array',
  templateUrl: './earnedIncome-array.component.html',
  styleUrls: ['./trial-budget.component.css']
})
export class EarnedIncomeArrayComponent {
  @Input() parentForm: FormGroup;

  @Input() earnedIncomes: EarnedIncome[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
      //this.parentForm.addControl('earnedIncomes', new FormArray([]));
	  this.parentForm =  new FormGroup({
       earnedIncomes: new FormArray([])
    });
	
  }

  addEarnedIncome(index: number) {
      this.earnedIncomes.push({
          /*type: 1,
          text: ''
		  */
		incomeType: '',
		amount: 0
      });
  }

calculateAmount(earnedIncomesArray: EarnedIncome[]){
  let earnedAmount:number=0;
  earnedIncomesArray.forEach(inc=>{
  if (Number(inc.amount) != NaN)
       earnedAmount += Number(inc.amount); 
      })
  return earnedAmount;
}

  removeEarnIncome(index: number) {
	  if (this.earnedIncomes.length > 1  && index!=0) {
	    	this.earnedIncomes.splice(index, 1);
		    (<FormArray>this.parentForm.get('earnedIncomes')).removeAt(index);
	      }
    }
   
}
