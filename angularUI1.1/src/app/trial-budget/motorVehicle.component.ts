import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
//import { MotorVehicle } from 'app/Model/api/motor-vehicle.interface';
import { VehicularAsset } from 'app/Model/api/vehicular-asset.class';

import { ScreeningHeaderComponent } from 'app/header/screening.component';
import { Router } from "@angular/router";
import { KeyValue } from 'app/Model/api/key-value.class';
import { ConstantsService } from './../common/constants.service';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'motor-vehicle',
  templateUrl: './motorVehicle.component.html',
  styleUrls: ['./trial-budget.component.css']

})
export class MotorVehicleComponent {
     
  motorVehUseDropdown: Array<KeyValue> = new Array<KeyValue>();

  errorMessage:string;

  @Input() formArray: FormArray;

  @Input() motorVehicle: VehicularAsset;

  motorVehicleGroup: FormGroup;

  index: number;

  @Output() removed = new EventEmitter();

  constructor(private fb: FormBuilder,private constantsService: ConstantsService, private header: ScreeningHeaderComponent, private router: Router, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('Initationg again%%%%%%%%%%%%%%');
      this.motorVehicleGroup = this.toFormGroup(this.motorVehicle);

      resolvedPromise.then(() => {
		  console.log("motor-vehicle :: "+this.formArray.length);
          this.index = this.formArray.length;
          this.formArray.push(this.motorVehicleGroup);
      });
   let requestLookup = [ "Type"];
    
    this.constantsService.loadLookupData(requestLookup)
      .subscribe( data => {
          this.motorVehUseDropdown=data.get("MotorVehUse")
        },
        error =>  this.errorMessage = <any>error);

  }

  numberOnly(event: any) {
    return (event.charCode >= 48 && event.charCode <= 57);
  }

  toFormGroup(motorVehicle: VehicularAsset) {
      return this.fb.group({
		use: '',
		fmw: motorVehicle.fmw,
		encumb: motorVehicle.encumb
      });
  }
}