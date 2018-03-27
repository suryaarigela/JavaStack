import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ConstantsService } from 'app/common/constants.service';
import { DataShareService } from 'app/common/data-share.service';

import { Program } from 'app/Model/api/program.class';


@Component({
  templateUrl: './recommended-programs.component.html',
  styleUrls: ['./recommended-programs.component.css']
})
export class RecommendedProgramsComponent implements OnInit {

  num: string[] = ["1","2","3","4","5"];
  inputSugPrograms: Program[] = [];
  inputAddPrograms: Program[]=[];
  recommendedProgramForm: FormGroup;


  constructor(private fb: FormBuilder, 
              private router: Router, 
              private constantsService: ConstantsService,
            ) {
              this.createForm();

  }

  ngOnInit() {
    if (ConstantsService.requestedPrograms.length > 0) {
      this.inputSugPrograms = ConstantsService.requestedPrograms.filter(this.isSuggestedProg);
      this.inputAddPrograms = ConstantsService.requestedPrograms.filter(this.isAdditionalProg);
    }else{
      this.inputSugPrograms = ConstantsService.eligibility;
    }
    this.setPrograms(this.inputSugPrograms,  this.inputAddPrograms);
  }

  

  get AdditionalProgram(): FormArray {
    return this.recommendedProgramForm.get('additionalProgram') as FormArray;
  };

  get SuggestProgram(): FormArray {
    return this.recommendedProgramForm.get('suggestProgram') as FormArray;
  };

  addProgram() {
    this.AdditionalProgram.push(this.fb.group(new Program('','','','','','','','Y','')));
  }
  removeProgram(i: number){
    this.AdditionalProgram.removeAt(i);
  }

  back() {
    this.router.navigate(['/screening/householdCircumstances']);
    this.constantsService.changedStatusOnDefault('houseHoldStatus');
  }

  next() {
    this.router.navigate(['/screening/screeningDisposition']);
    this.constantsService.changedStatusOnDefault('screeningStatus');
    this.constantsService.changedStatus('recommendedStatus', false);
    this.inputSugPrograms = this.recommendedProgramForm.value.suggestProgram;
    this.inputAddPrograms = this.recommendedProgramForm.value.additionalProgram;
    ConstantsService.requestedPrograms = this.inputSugPrograms.concat(this.inputAddPrograms);
    ConstantsService.appDate = this.recommendedProgramForm.value.applicationDate;
    ConstantsService.foodStampYN = this.recommendedProgramForm.value.fs;
  }

  private isSuggestedProg(program: Program){
    return program.requestedYN === 'N';
  }
  private isAdditionalProg(program: Program){
    return program.requestedYN === 'Y';
  }

  private createForm(){
    let a = new Date().toISOString().slice(0,10);
    this.recommendedProgramForm = this.fb.group({
      applicationDate: [!ConstantsService.appDate ? a : ConstantsService.appDate, Validators.required],
      suggestProgram: this.fb.array([]),
      additionalProgram: this.fb.array([]),
      fs: ConstantsService.foodStampYN
    })
  }

  private setPrograms(sugProgram: Program[], addProgram: Program[]) {
      const sugProgramFGs = sugProgram.map(program => this.fb.group(program));
      const sugProgramFA= this.fb.array(sugProgramFGs);
      this.recommendedProgramForm.setControl('suggestProgram', sugProgramFA);

      const addProgramFGs = addProgram.map(program => this.fb.group(program));
      const addProgramFA= this.fb.array(addProgramFGs);
      this.recommendedProgramForm.setControl('additionalProgram', addProgramFA);      
  }
  
}