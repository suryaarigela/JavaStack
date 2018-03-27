import { Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Asset } from 'app/Model/api/asset.class';
import { ScreeningHeaderComponent } from 'app/header/screening.component';
import { Router } from "@angular/router";
import { KeyValue } from 'app/Model/api/key-value.class';
import { ConstantsService } from './../common/constants.service';
import { TrialBudgetAppComponent } from './trial-budget-app.component';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'asset',
  templateUrl: './asset.component.html',
  styleUrls:['./trial-budget.component.css']
})
export class AssetComponent extends TrialBudgetAppComponent{

  assetTypeDropdown: Array<KeyValue> = new Array<KeyValue>();

  errorMessage:string;

  @Input() formArray: FormArray;
  assetAmount: any;
  @Input() asset: Asset;

  assetGroup: FormGroup;

  index: number;
  amt: number;
  @Output() removed = new EventEmitter();

  constructor(private fb: FormBuilder, private constantsService: ConstantsService, private header: ScreeningHeaderComponent, private router: Router, private cdRef: ChangeDetectorRef) {
  super();
  }
numberOnly(event: any) {
    return (event.charCode >= 48 && event.charCode <= 57);
  }
  ngOnInit() {
    //  this.assetGroup = this.toFormGroup(this.asset);

      this.assetGroup = this.fb.group({

			type: ['', [Validators.required]],
			amount: ['', [Validators.required]],
		});

      resolvedPromise.then(() => {
          this.index = this.formArray.length;
          this.formArray.push(this.assetGroup);
          
      });
      let requestLookup = [ "Type"];
    
    this.constantsService.loadLookupData(requestLookup)
      .subscribe( data => {
          this.assetTypeDropdown=data.get("AssetType")
        },
        error =>  this.errorMessage = <any>error);

  }

  toFormGroup(asset: Asset) {
	  console.log("asset :: "+asset);
      return this.fb.group({
		assetType: '',
		amount: 1
      });
  }
}