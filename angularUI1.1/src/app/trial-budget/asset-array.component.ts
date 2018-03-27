import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms'; 

import { Asset } from 'app/Model/api/asset.class';

@Component({
  selector: 'asset-array',
  templateUrl: './asset-array.component.html',
  styleUrls:['./trial-budget.component.css']
})
export class AssetArrayComponent {
  @Input() parentForm: FormGroup;

  @Input() assets: Asset[];
  amount : number;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
      //this.parentForm.addControl('unearnedIncomes', new FormArray([]));
	  this.parentForm =  new FormGroup({
       assets: new FormArray([]),
    });
	
  }

  addAsset(index: number) {
      this.assets.push({
          /*type: 1,
          text: ''
		  */
		assetType: '',
		amount: 0
      });
  }

  countAssets(asset: Asset[]):number{
    let amount:number=0;
    this.assets.forEach(ass=>{
       if (Number(ass.amount) != NaN)
       amount += Number(ass.amount);
  })
  return amount;
  }

  removeasset(index: number) {
	  if(this.assets.length >1 && index!=0){
		this.assets.splice(index, 1);
		(<FormArray>this.parentForm.get('assets')).removeAt(index);
	  }
  }
}