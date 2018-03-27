import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'tbApp',
  template: '',
})
export class TrialBudgetAppComponent {
  programType:number;

  constructor() { }

  ngOnInit() {
      
  }

 numberOnly(event: any){
    return(event.charCode >= 48 && event.charCode <= 57);
  }
}