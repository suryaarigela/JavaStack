import { Component, OnInit, ViewChild ,Input} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ConstantsService } from './../common/constants.service';
import { ScreeningHeaderComponent } from 'app/header/screening.component';
import { Router } from "@angular/router";
import { KeyValue } from 'app/Model/api/key-value.class';

@Component({
  selector: 'expenseInfo',
  templateUrl: './trail-budget.expenseInfo.component.html',
  styleUrls: ['./trial-budget.component.css']
})
export class ExpenseInfoComponent implements OnInit {

  utilityMethodtypeDropdown: Array<KeyValue> = new Array<KeyValue>();

  errorMessage:string;

  @Input() public tbForm: FormGroup;
  private targetValue: number;

  constructor(private _fb: FormBuilder, private constantsService: ConstantsService, private header: ScreeningHeaderComponent, private router: Router) {
    this.constantsService.subheaderTitle("Trial Budget");
  }

  ngOnInit() {
    let requestLookup = [ "Type"];
    
    this.constantsService.loadLookupData(requestLookup)
      .subscribe( data => {
          this.utilityMethodtypeDropdown = data.get("UtilityMethod");

          },
        error =>  this.errorMessage = <any>error);

    
  }

 
}
