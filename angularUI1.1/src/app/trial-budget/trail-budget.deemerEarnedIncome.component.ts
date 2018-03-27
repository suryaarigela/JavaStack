import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ConstantsService } from './../common/constants.service';
import { ScreeningHeaderComponent } from 'app/header/screening.component';
import { Router } from "@angular/router";
import { TrialBudgetAppComponent } from './trial-budget-app.component';

@Component({
  selector: 'deemerEarnedIncome',
  templateUrl: './trail-budget.deemerEarnedIncome.component.html',
  styleUrls: ['./trial-budget.component.css']
})
export class DeemerEarnedIncomeComponent extends TrialBudgetAppComponent implements OnInit {

  @Input() public tbForm: FormGroup;
  private targetValue: number;

  constructor(private _fb: FormBuilder, private constantsService: ConstantsService, private header: ScreeningHeaderComponent, private router: Router) {
    super();
    this.constantsService.subheaderTitle("Trial Budget");
  }

  ngOnInit() {

    
  }

 
}
