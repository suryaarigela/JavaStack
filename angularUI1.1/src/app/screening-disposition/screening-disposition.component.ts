import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ControlValueAccessor } from '@angular/forms';
import { Router } from "@angular/router";

import { ConstantsService } from 'app/common/constants.service';
import { CustomValidatorsService } from 'app/common/custom-validators.service'
import { HelpText } from 'app/Model/api/help-text.class';
import { KeyValue } from 'app/Model/api/key-value.class';
import { ScreeningHeaderComponent } from 'app/header/screening.component';
import { Signature } from 'app/Model/api/signature.class';

@Component({
  selector: 'app-screening-disposition',
  templateUrl: './screening-disposition.component.html',
  styleUrls: ['./screening-disposition.component.css']
})
export class ScreeningDispositionComponent implements OnInit {
  screeningDispositionForm: FormGroup;
  
  signatureData: any = {
    "withdrawAppBeforeSigningYN": "N",
    "withdrawAppAfterSigningYN": "N",
    // "lastNameAndRemarks": "",
    "email": "any",
    // "newSignature":"any",
    "email_assistance": "N"
  }

  private signature: Signature;

  constructor(private router: Router,
    private header: ScreeningHeaderComponent,
    private fb: FormBuilder,
    private constantsService: ConstantsService) {

    if (ConstantsService.signatureStatus != null) {
      this.signatureData = this.constantsService.getSignature();
      console.log("if", this.signatureData);
    }
    
  }

  // window["flag"] =  true;
  // console.log("@ Component . . ."+  window["flag"]);

  buildForm() {
    this.screeningDispositionForm = this.fb.group({
      withdrawAppBeforeSigningYN: [this.signatureData.withdrawAppBeforeSigningYN == "Y" ? true : false],
      withdrawAppAfterSigningYN: [this.signatureData.withdrawAppAfterSigningYN == "Y" ? true : false],
      email: [this.signatureData.email],
      // , [CustomValidatorsService.validEmail]
      // newSignature: [this.signatureData.newSignature],
      email_assistance: [this.signatureData.email_assistance == "Y" ? true : false]
    });
  }
  save(model) {
    let signatureStatus: any = {};
    signatureStatus.withdrawAppAfterSigningYN=model.value.withdrawAppAfterSigningYN;
    signatureStatus.withdrawAppBeforeSigningYN=model.value.withdrawAppBeforeSigningYN;
    signatureStatus.email=model.value.email;
    // signatureStatus.newSignature=model.value.newSignature;
    signatureStatus.email_assistance=model.value.email_assistance;

    ConstantsService.signatureStatus = signatureStatus;
    console.log(ConstantsService.signatureStatus);

    console.log(this.constantsService.getSignature());
    this.next();
  }
  populateData(){
    this.screeningDispositionForm.patchValue (this.signatureData);
  }

  ngOnInit() {
    this.buildForm();
    this.populateData();
  }

  next() {
    this.router.navigate(['/screening/trialBudget']);
    this.constantsService.changedStatusOnDefault('trialStatus');
  }

  back() {
    this.router.navigate(['/screening/recommendedPrograms']);
    this.constantsService.changedStatusOnDefault('recommendedStatus');
  }
}
