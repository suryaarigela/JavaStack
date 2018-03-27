import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray ,Validators} from '@angular/forms';

import { EarnedIncome } from 'app/Model/api/earned-income.class';
import { UnearnedIncome } from 'app/Model/api/unearned-income.class';
@Component({
  selector: 'unearnIncome-array',
  templateUrl: './unearnedIncome-array.component.html',
  styleUrls: ['./trial-budget.component.css']

})
export class UnEarnedIncomeArrayComponent {
  @Input() parentForm: FormGroup;

  @Input() unearnedIncomes: UnearnedIncome;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
      //this.parentForm.addControl('earnedIncomes', new FormArray([]));

      console.log('UnEarnedIncomeArrayComponent*************',this.parentForm.controls);
      this.parentForm = this.fb.group({
			unearnedIncomes: new FormArray([]),
			spouseUnearnedIncome: ['', [Validators.required]],
			deemerUnearnedIncome: ['', [Validators.required]],
		});
      
	 /** this.parentForm =  new FormGroup({
       unearnedIncomes: new FormArray([])
    });
	**/
  }

  addunEarnedIncome(index: number) {
      this.unearnedIncomes.houseHoldUnearnedIncomes.push(
        {
          incomeType:'',
          amount:0
        }
      )
  }

calculateAmount(earnedIncomesArray: UnearnedIncome){
  let earnedAmount:number=0;
  /*console.log('houseHoldUnearnedIncomes---->1',earnedIncomesArray);
  console.log('houseHoldUnearnedIncomes---->2',earnedIncomesArray.houseHoldUnearnedIncomes);
  */
  earnedIncomesArray.houseHoldUnearnedIncomes.forEach(inc=>{
  if (Number(inc.amount) != NaN)
       earnedAmount += Number(inc.amount); 
      })
  return earnedAmount;
}

  removeunEarnIncome(index: number) {
	/**  if (this.unearnedIncomes.length > 1  && index!=0) {
	    	this.unearnedIncomes.splice(index, 1);
		    (<FormArray>this.parentForm.get('earnedIncomes')).removeAt(index);
	      }
    }

      numberOnly(event:any){
    return event.charCode >= 48 && event.charCode <= 57
    **/
  }
}