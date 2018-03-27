import { CustomValidatorsService } from 'app/common/custom-validators.service';
import { AppUtilService } from 'app/common/app.util.service';
import { ConstantsService } from 'app/common/constants.service';

import { DataShareService } from 'app/common/data-share.service';
import { ApiManager } from 'app/common/api-manager.service';

import { OnDestroy, Component, OnInit, ViewChild } from '@angular/core';

import { Router } from "@angular/router";

import { NguiDatetimePickerModule } from '@ngui/datetime-picker';


import { FormBuilder, FormGroup, Validators, FormControl, FormsModule  } from '@angular/forms';
// import { ClientRegistrationModel } from 'app/Model/client-registration.interface';
import { Observable } from 'rxjs/Observable';
import { HouseholdMember } from "app/Model/api/household-member.class";
import { SocialSecurityNumber } from "app/Model/api/social-security-number.class";
//import { DatePickerComponent } from "app/date-picker/date-picker.component";
//import { TextMaskModule } from 'angular2-text-mask';
import { AlertComponent } from 'app/app-alert-popup/app-alert-popup.component';


@Component({
  selector: 'app-client-registration-v1',
  templateUrl: './client-registration-v1.component.html',
  styleUrls: ['./client-registration-v1.component.css'],
  providers: [CustomValidatorsService]
})
export class ClientRegistrationV1Component implements OnInit, OnDestroy {
  nameForm: FormGroup;
  titleAlert: string = 'Required field';

  private currentClientId = "New Client";
  private houseHoldModel: HouseholdMember;
  private oldHouseHoldModel: HouseholdMember;
  private readOnlyFields: boolean;
  private notValid: boolean = false;

  @ViewChild(AlertComponent) errorMsg: AlertComponent;

  constructor(private router: Router, private shareService: DataShareService, private constantsService: ConstantsService,

    private utilService: AppUtilService, private fb: FormBuilder, private apiManager: ApiManager) {
    if (this.shareService.getDataFromMap("clientIdForRegisteration") != undefined) {
      this.currentClientId = this.shareService.getDataFromMap("clientIdForRegisteration");
      this.houseHoldModel = this.constantsService.getClientById(this.currentClientId);
      this.oldHouseHoldModel = this.houseHoldModel;
      //this.constantsService.addHouseholdsIdWithCaseId(this.currentClientId, "452154");
      //this.clientRegistrationModel = this.constantsService.getClientById(this.currentClientId);
      this.readOnlyFields = true;
    } else {
      this.readOnlyFields = false;
      this.houseHoldModel = this.constantsService.getConstant("householdEmptyModel");
    }
    // this.userGender = "";
    // this.isPregnant = "";
    this.nameForm = this.fb.group({
      'personName': this.fb.group({
        'firstName': [this.houseHoldModel.personName.firstName, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[A-Za-z]*')])],
        'middleName': [this.houseHoldModel.personName.middleName, Validators.compose([Validators.maxLength(12), Validators.pattern('[A-Za-z]*')])],
        'lastName': [this.houseHoldModel.personName.lastName, Validators.compose([Validators.required, Validators.maxLength(18), Validators.pattern('[A-Za-z]*')])],
        'suffix': [this.houseHoldModel.personName.suffix],
      }),
      'dob': [this.houseHoldModel.dob, Validators.compose([Validators.required, Validators.maxLength(10)])],
      'gender': [this.houseHoldModel.gender],
      'ssn': [this.utilService.getSsn(this.houseHoldModel.ssn), Validators.compose([CustomValidatorsService.validSsn])],
      'raceCds': [this.houseHoldModel.raceCds[0]],
      'relationshipCd': [this.houseHoldModel.relationshipCd],
      'ssnReferral': [this.houseHoldModel.ssnReferral],
      'pregnantYN': [this.houseHoldModel.pregnantYN],
      'pregnancyDueDate': [this.houseHoldModel.pregnancyDueDate]
    });
  }
/*changeDateFormat(el):string {
  if(el) {
  let date:any = el.split("/");
   console.log((date[2] + "-" + date[1] +"-" + date[0]));
  return (date[2] + "-" + date[1] +"-" + date[0]);
 
  }
  
  return el;

}*/
validateDate (el):boolean {
  if(el && el._value) {
  let currentDate:Date = new Date();
  let selectedDate:Date = new Date(el._value);
  if(selectedDate > currentDate)
   return true;
  }
  return false;
}

  preventKeyStroke(e:Event) {
    e.preventDefault();
  }

  dateChange(el):boolean
  {
    if(el && el._value)
      return true;
    else
      return false;
  }
  ngOnInit() {
    this.shareService.addDataToMap('showVersion', true);
    this.shareService.addDataToMap('pageVersion', "V1");
    this.handlePregnancySelect();
  }
 
  temp: boolean = false;
  validSsn(event: any) {
    let regexx = new RegExp('^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$');
    let values = event.target.value;

    if (values != '' && !(regexx.test(values.toString()))) {
      this.temp = true;
    }
    else{
      this.temp = false;
    }
  }
  isSaveError() {
    for (let key in this.nameForm.controls) {
      if (!this.nameForm.controls[key].touched)
        this.notValid = true;
      else {
        this.notValid = false;
        break;
      }
    }
    for (let key in this.nameForm.controls) {
      var var1 = this.nameForm.controls[key] instanceof FormGroup;
      if (var1) {
        for (let key1 in this.nameForm.controls[key]['controls']) {
          if (this.nameForm.controls[key]['controls'][key1].hasError('required')) {
            this.notValid = true;
          }
        }
      }
      else {
        if (this.nameForm.controls[key].hasError('required')) {
          this.notValid = true;
        }
      }
      if (this.notValid == true)
        window.scrollTo(0, 0);
    }
  }
   

  handlePregnancySelect() {
    if (this.nameForm.controls["gender"].value != "2")
      this.houseHoldModel.pregnantYN = "-1";
    if (this.nameForm.controls["pregnantYN"].value != "Y")
      this.houseHoldModel.pregnancyDueDate = undefined;
  }

  next() {
    this.router.navigate(['/screening/clientRegisterationAddHouseholdMembersComponent/2']);
  }

  back() {
    this.router.navigate(['/screening/clearanceSearchComponent']);
  }

  validateText($event) {
    if (!CustomValidatorsService.textOnly(event)) {
      event.preventDefault();
    }
  }
  validatenumberOnly($event) {
    if (!CustomValidatorsService.numberOnly(event)) {
      event.preventDefault();
    }
  }
  doSSNMasking($event) {
    CustomValidatorsService.ssnMasking(event);
  }
  public ngOnDestroy(): void {
    this.shareService.addDataToMap('showVersion', false);
    this.shareService.addDataToMap('pageVersion', undefined);
  }
  updateSsn(ssnInput: any, addSsnFields: SocialSecurityNumber) {
    let ssnInputString: string = ssnInput.currentTarget.value;
    if (new RegExp(this.constantsService.getConstant('ssnPattern')).test(ssnInputString)) {
      let ssnArray: string[] = ssnInputString.split("-");
      addSsnFields.ssnPart1 = ssnArray[0];
      addSsnFields.ssnPart2 = ssnArray[1];
      addSsnFields.ssnPart3 = ssnArray[2];
    }
  }
  trackByFn(index: any, item: any) {
    return index;
  }

  hasHouseholdUpdated(nm: HouseholdMember): boolean {
    console.log("om:",this.oldHouseHoldModel,"nm:",nm);
    if(this.oldHouseHoldModel && nm){
      let om = this.oldHouseHoldModel;
      if(nm.personName && om.personName && (nm.personName.firstName != om.personName.firstName 
        || nm.personName.middleName != om.personName.middleName || nm.personName.lastName != om.personName.lastName 
        || nm.personName.suffix != om.personName.suffix) ) {
          return true;
        } else if ((nm.personName && !om.personName) || (!nm.personName && om.personName)) {
          return true;
        } else if(/*nm.dob != om.dob ||*/ this.utilService.getSsn(nm.ssn) != this.utilService.getSsn(om.ssn) 
          || nm.gender != om.gender 
          || (nm.raceCds && om.raceCds && nm.raceCds[0] != om.raceCds[0]) 
          || ((nm.raceCds && !om.raceCds) || (!nm.raceCds && om.raceCds))
          || nm.ssnReferral != om.ssnReferral) {
            return true;
        } /*else if(nm.pregnantYN != om.pregnantYN || nm.pregnancyDueDate != om.pregnancyDueDate) {
          return true;
        }*/
    }
    return false;
  }

  save(model: HouseholdMember, isValid: boolean) {
    if (isValid) {
      console.log(model, isValid);
      model.ssn = this.utilService.getSsnObjectFromString(model.ssn.toString());
      if (this.shareService.getDataFromMap("clientIdForRegisteration") == undefined) {
        var x = Math.floor((Math.random() * 1000000000) + 1);
        var race = model.raceCds;
        model.householdMemberId = Number(x);
        model.raceCds = [];
        model.raceCds.push(race.toString());
        model.verification = {
          "ssnVerificationModel": {
            "verificationDocumentCd": "ER", "verificationRequestedYN": "2", "verificationType": "1", "verifiedYN": "2",
            "verificationAutoVerified": false, "verificationFileList": [],
            "retryCount": 2, "messages": [{ "code": "abc", "message": "Teat error", "severity": 1 }]
          }, "dobVerificationModel": {
            "verificationDocumentCd": "NO",
            "verificationAutoVerified": false, "verificationFileList": [],
            "verificationRequestedYN": "2", "verificationType": "1", "verifiedYN": "2", "retryCount": 2, "messages": [{
              "code": "abc", "message": "Teat error",
              "severity": 1
            }]
          }
        };
        ConstantsService.householdMembers3.push(model);
        this.constantsService.addHouseholdsIdWithCaseId(model.householdMemberId, "452154");
        this.next();
      }
      else {
        if(this.hasHouseholdUpdated(model)){
          this.errorMsg.showMessage("You need to run clearance again before saving the client");
          //this.updateHouseholdModel(model);
          ConstantsService.clearanceSearchModel = model;
          this.shareService.addDataToMap("clientSearchClearance", true);
          this.shareService.addDataToMap('hideSearchDetails', true);
        } else {
          this.constantsService.addHouseholdsIdWithCaseId(this.oldHouseHoldModel.householdMemberId, "452154");
          this.next();
        }
        // ConstantsService.updateModel(model);
      }
    }
     else {
      this.isSaveError();
    }
    //this.constantsService.addHouseholdsIdWithCaseId(model.householdMemberId, "452154");
    //this.next();
  }
}



  /*firstName: string = '';
  lastName: string = '';
  middleName: string = '';
  dob: string = '';
  ssn: any;
  sex: boolean;
  race: any;
  alt_ssn: any;
  alt_first: string = '';
  alt_middle: string = '';
  alt_last: string = '';
  alt_suffix: any;
  errorMessage: string = '';
  validateDob: any;
  isSsn: any;
  userGender: any;
  isPregnant: any;
  clientInfo: any[];
  private clientRegistrationModel: ClientInterface;
  private ssnRefrral: boolean = false;
  private readOnlyFields: boolean = false;
  writeValue(value: any) {
    if (value !== undefined) {
      this.ssn = value;
    }
  } 
  propogateChange = (_: any) => { };
  registerOnChange(fn) {
    this.propogateChange = fn;
  }
  registerOnTouched() {
  }
  addPost(post) {
    //call to service to store data
    this.firstName = post.firstName;
    this.lastName = post.lastName;
    this.dob = post.dob;
    this.sex = post.sex;
  }
  addAdditionalNames() {
    this.clientRegistrationModel.altNames.push({
      "firstName": "", "lastName": "", "middleName": ""
      , "suffix": ""
    });
  }

  addAdditionalSSN() {
    this.clientRegistrationModel.additionalSsns.push({
      ssnPart1: undefined,
      ssnPart2: undefined,
      ssnPart3: undefined
    });
  }
  addClientId() {
    this.clientRegistrationModel.aliasClientIds.push(undefined);
  }
  deleteItemFromIndex(index: number, array: string) {
    this.clientRegistrationModel[array].splice(index, 1);
*/
