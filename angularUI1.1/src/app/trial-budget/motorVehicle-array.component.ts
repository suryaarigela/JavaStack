import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { VehicularAsset } from 'app/Model/api/vehicular-asset.class';

@Component({
  selector: 'motorVehicle-array',
  templateUrl: './motorVehicle-array.component.html',
      styleUrls: ['./trial-budget.component.css']

})
export class MotorVehicleArrayComponent {
  @Input() parentForm: FormGroup;

  @Input() motorVehicles: VehicularAsset[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    
      //this.parentForm.addControl('unearnedIncomes', new FormArray([]));
      if(this.parentForm!= null){
        console.log('initializing parent form #################'+this.parentForm)
	  //this.parentForm =  new FormGroup({
	//   motorVehicles:new FormArray([])
    //});
      }
  }

  addMotorVehicle(index: number) {
      this.motorVehicles.push({
          /*type: 1,
          text: ''
		  */
		useType: '',
		fmw: '',
		encumb: ''
      });
  }

  countFMW(motorVehicles: VehicularAsset[]):number{
    let amount:number=0;
    this.motorVehicles.forEach(veh=>{
       if (Number(veh.fmw) != NaN)
       amount += Number(veh.fmw);
  })
  return amount;
}

 countEncumb(motorVehicles: VehicularAsset[]):number{
   let amount:number=0;
    this.motorVehicles.forEach(veh=>{
       if (Number(veh.encumb) != NaN)
       amount += Number(veh.encumb);
  })
  return amount;
  }

  removemotorVehicle(index: number) {
	  if(this.motorVehicles.length>1 && index!=0){
		this.motorVehicles.splice(index, 1);
		(<FormArray>this.parentForm.get('motorVehicles')).removeAt(index);
	}
  }
}