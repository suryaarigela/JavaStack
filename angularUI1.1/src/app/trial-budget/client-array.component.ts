import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray,FormControl } from '@angular/forms';

import { EarnedIncomeClient } from 'app/Model/api/earned-income-client.class';

@Component({
  selector: 'client-array',
  templateUrl: './client-array.component.html',
  styleUrls: ['./trial-budget.component.css']
})
export class ClientArrayComponent {

  @Input() parentForm: FormGroup;

  @Input() clients: EarnedIncomeClient[];
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
	  this.parentForm =  new FormGroup({
       clients: new FormArray([]),
    });
    console.log('Clients:::',this.clients);
     // this.parentForm.addControl('clients', new FormArray([]));

  }

  addClient(index: number) {
      this.clients.push({
          /*name: '',
          emails: []
		  */
		earnedIncomes: [{
				incomeType: '',
				amount: 1
			}],
		incomeOption1: false,
		incomeOption2: false,
		earnedIncomeExpense: {
			incomeType: '',
			amount: 1
		},
		dependentCareExpense: 1 
      });
  }

  removeClient(index: number) {
      console.log('Removingindex '+index);
      if (this.clients.length > 1) {
          this.clients.splice(index, 1);
          (<FormArray>this.parentForm.get('clients')).removeAt(index);
         
      }
  }
}