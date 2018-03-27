import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { ConstantsService } from 'app/common/constants.service';
import { DataShareService } from 'app/common/data-share.service';
import { ProgramName } from 'app/Model/api/program-name.class';


@Component({
  selector: 'app-program-selection',
  templateUrl: './program-selection.component.html',
  styleUrls: ['./program-selection.component.css']
})
export class ProgramSelectionComponent implements OnInit {

  programSelectionForm: FormGroup;

  programData:any={
    "ProgramName":""
  }
  ProgramSelection: boolean = false;
  programName: ProgramName[] = [];
  constructor(private fb: FormBuilder, 
    private router: Router, 
    private shareService: DataShareService, 
    private constantsService: ConstantsService) {

      if (ConstantsService.programNameSelect != null) {
      this.programData = this.constantsService.getProgramName();
      console.log("if", this.programData);
    }
    }
    buildForm(){
    this.programSelectionForm = this.fb.group({
      'listOfPrograms': [false, this.programData.programName.length > 0]
    })
  }
  save(model){
    let programNameSelect: any = {};
    programNameSelect.listOfPrograms=model.value.listOfPrograms;

    ConstantsService.programNameSelect = programNameSelect;
    console.log(ConstantsService.programNameSelect);

    console.log(this.constantsService.getProgramName());
    this.next();
  }
  populateData(){
    this.programSelectionForm.patchValue (this.programData);
  }
  ngOnInit() {
    this.buildForm();
    this.populateData();
  }

  next() {
    this.router.navigate(['/screening/householdCircumstances']);
    this.constantsService.changedStatusOnDefault('houseHoldStatus');
    this.constantsService.changedStatus('programStatus', false);
  }
  back() {
    this.router.navigate(['/screening/contactInformationV1']);
    this.constantsService.changedStatusOnDefault('contactStatus');
  }
  listOfProgramSelected(key) {
    console.log(key)
    if (this.programName.indexOf(key) === -1) {
      this.programName.push(key);
    } else {
      this.programName.splice(this.programName.indexOf(key), 1);
    }
    console.log(this.programName);
  }
}
