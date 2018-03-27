import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ConstantsService } from './../common/constants.service';
import { ScreeningHeaderComponent } from 'app/header/screening.component';
import { Router } from "@angular/router";
import { KeyValue } from 'app/Model/api/key-value.class';
import { TrialBudgetAppComponent } from './trial-budget-app.component';
import { TrialBudgetRequest } from 'app/Model/api/trial-budget-request.class';

@Component({
  selector: 'caseInfo',
  templateUrl: './trail-budget.caseInfo.component.html',
  styleUrls: ['./trial-budget.component.css']
})
export class CaseInfoComponent extends TrialBudgetAppComponent implements OnInit {
  maType: string;
  typeDropdown: Array<KeyValue> = new Array<KeyValue>();
  livingarrmntDropdown: Array<KeyValue> = new Array<KeyValue>();
  foodStampstypeDropdown: Array<KeyValue> = new Array<KeyValue>();
  medCoveragrDropdown: Array<KeyValue> = new Array<KeyValue>();
  familyDropdown: Array<KeyValue> = new Array<KeyValue>();
  pregnantDropdown: Array<KeyValue> = new Array<KeyValue>();
  refugeesDropdown: Array<KeyValue> = new Array<KeyValue>();
  abdDropdown: Array<KeyValue> = new Array<KeyValue>();
  masqDropdown: Array<KeyValue> = new Array<KeyValue>();
  familyLtcDropdown: Array<KeyValue> = new Array<KeyValue>();
  masqLtcDropdown: Array<KeyValue> = new Array<KeyValue>();

  hcbWaiverDropdown: Array<KeyValue> = new Array<KeyValue>();
  FaAndSaDropdown: Array<KeyValue> = new Array<KeyValue>();
  MiscellaneousDropdown: Array<KeyValue> = new Array<KeyValue>();
  errorMessage: string;
  @Input() public tbForm: FormGroup;
  @Input('request') request : number;

  
  private targetValue: number;

  constructor(private _fb: FormBuilder, private constantsService: ConstantsService, private header: ScreeningHeaderComponent, private router: Router) {
    super();
    this.constantsService.subheaderTitle("Trial Budget");
		console.log('prgType :::' + this.request);

  }

  ngOnInit() {
    let requestLookup = ["Type"];

    this.constantsService.loadLookupData(requestLookup)
      .subscribe(data => {
        this.typeDropdown = data.get("Type");
        this.livingarrmntDropdown = data.get("LivingArrangements");
        this.foodStampstypeDropdown = data.get("FoodStampsHHtype");
        this.medCoveragrDropdown = data.get("MedCoverageGroup");
        this.familyDropdown = data.get("Family");
        this.pregnantDropdown = data.get("Pregnant");
        this.refugeesDropdown = data.get("Refugees");
        this.abdDropdown = data.get("ABorD");
        this.masqDropdown = data.get("MASO");
        this.familyLtcDropdown = data.get("FamilyLTC");
        this.masqLtcDropdown = data.get("MASOLTC");
        this.hcbWaiverDropdown = data.get("HCBWaiver");
        this.FaAndSaDropdown = data.get("FCandSA");
        this.MiscellaneousDropdown = data.get("MiscellaneousM");


      },
      error => this.errorMessage = <any>error);

  }
  changeDropDownValue(event: any) {
    this.targetValue = event.target.value;
	this.programType = this.targetValue;
	
  }

  onChangeMA(event: any) {
	
    this.maType = event.target.value;
	
  }

}
