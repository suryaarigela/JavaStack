import { Injectable } from '@angular/core';
import { RequestOptions, RequestMethod, RequestOptionsArgs, Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';

import { KeyValue } from 'app/Model/Api/key-value.class';
import { DropDown } from 'app/Model/api/drop-down.class';
import { HouseholdMember } from 'app/Model/api/household-member.class';
import { LookupContainerModel } from 'app/Model/api/lookup-container-model.class';
import { HelpText } from 'app/Model/Api/help-text.class';
import { ContactInformation } from 'app/Model/Api/contact-information.class';
import { HouseholdCircumstance } from "app/Model/api/household-circumstance.class";
import { ProgramName } from "app/Model/api/program-name.class";
import { PersonName } from "app/Model/api/person-name.class";
import { Person } from "app/Model/api/person.class";
import { Signature } from "app/Model/api/signature.class"
import { AdditionalInformation } from 'app/Model/api/additional-information.class';
import { Address } from "app/Model/api/address.class";
import { PhoneNumber } from "app/Model/api/phone-number.class";
import { BenefitsCase } from 'app/Model/api/benefits-case.class';
import { Program } from 'app/Model/api/program.class';
import { HumanServices } from 'app/Model/api/human-services.class';
import {TrialBudgetRequest} from 'app/Model/api/trial-budget-request.class';


@Injectable()
export class ConstantsService {
  static readonly selections = [
    { "key": "1", "value": "Public Assistance" },
    { "key": "2", "value": "Food Stamps" },
    { "key": "3", "value": "Medical Assistance" },
    { "key": "4", "value": "Long Term Care" },
    { "key": "5", "value": "Emergency Assistance - Burial" },
    { "key": "6", "value": "Emergency Assistance - Family" },
    { "key": "7", "value": "Others" }
  ];
  lookupData: {};
  private trailBudgetUrl = 'http://localhost:4000/trailBudget/1'; 
  static readonly authRepRelation = [
    'HOH/Self',
    'Child Who Is Parent',
    'Natural or Adopted Child',
    'Other Related Adult',
    'Stepchild',
    'Other Unrelated Adult',
    'Spousal Parent',
    'Other Unrelated Child',
    'Non-Parent Spouse',
    'First Cousin',
    'Other Parent',
    'Niece/Nephew',
    'Grand Great Grandchild',
    'Aunt/Uncle',
    'Sibling',
    'Half Sibling',
    'Step Sibling',
    'Child/Parent treat as Child',
  ]

  //STATIC MESSAGES
  static readonly lastNameRequired = 'Last Name is required';
  static readonly firstNameRequired = 'First Name is required';
  static readonly ssnRequired = 'SSN Number Required';
  static readonly invalidSSN = 'Please enter valid SSN in format XXX-XX-XXXX';

  //REGEX's
  static readonly ssnPattern = '^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$';
  static readonly EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  static readonly navbarComponent = 'SIDEBAR';
  static readonly screeningModule = 'SCREENING_MODULE';

  //LOOKUPS
  static readonly Suffix = 'suffix';
  static readonly SsnVerificationOption = 'ssnVerificationOption';
  static readonly DobVerificationOption = 'dobVerificationOption';
  static readonly Relationship = 'relationship';
  static readonly Sex = 'sex';
  static readonly Race = 'race';
  static readonly SsnReferral = 'ssnReferral';
  static readonly YesNo = 'yesNo';
  static readonly LiquidAssetsType = 'liquidAssetsType';

  private lookUps: LookupContainerModel;
  static caseId = "452154";
  static caseIdHouseholds = {};
  
  static householdMembers3: HouseholdMember[] = [];
  static humanServiceModel: HumanServices;

  // beg recommended program 
  static appDate: string;
  static foodStampYN: boolean;
  static eligibility: Program[] = [
    new Program(
      'programName1',
      'programType1',
      'medCoverageGroup1',
      'availableAuId1',
      'ppiGroup1',
      '', //selectedYN
      '', //eligibleYN
      'N', //requestedYN
      'public CAP_indicator1'),
    new Program(
      'programName2',
      'programType2',
      'medCoverageGroup2',
      'availableAuId2',
      'ppiGroup2',
      '',
      '',
      'N',
      'public CAP_indicator2'),
    new Program('1', '1', '1', '1', '1', 'Y', '', 'N', '1'),
    new Program('2', '2', '2', '2', '2', 'Y', '', 'N', '2')
  ];
  static requestedPrograms: Program[] = [];
  // end recommended program 
  DD: Map<string, KeyValue[]>;

  static contactInfo: any = {
    "additionalInformation": AdditionalInformation,
    "homeAddress": Address,
    "mailingAddress": Address,
    "phoneNumber": PhoneNumber,
    "altPhoneNumber": PhoneNumber,
    "sameMailingAddressYN": "Y",
    "email": ""
  };

  static signature: Signature = null;
  static signatureStatus: any = {
    "withdrawAppBeforeSigningYN": "",
    "withdrawAppAfterSigningYN": "",
    "lastNameAndRemarks": "",
    "email": "",
    // "newSignature":"any",
    "email_assistance": ""
  };
  static programName: ProgramName= null;
  static programNameSelect: any={
     "programName":""
  }
  static additionalInformation: AdditionalInformation=null;
  static contactInformation: ContactInformation=null;
  static householdCircumstance: HouseholdCircumstance=null; 

  static householdCircumstances : any={
     "earningsAmount": [], 
    "unearnedAmount": [], 
    "assetAmount": [],
    "shelterAmount":[],
    "homelessYN": "",
    "disabledYN": "",
    "refugeeYN": "",
    "blindYN": "",
    "destituteMigrantYN": "",
    "shelterIncludesMealsYN": "",
    "protectiveLivingArrangementYN": "",
    "communityBasedWaiverYN": "",
    "medicarePartAEntitlementYN": "",
    "authorizedRepresentativeYN":"",
    "absentParentYN": "" ,
    "absentParent": PersonName 
  };

  static headerTitle: String = "Screening: Initiate Screening";
  static headerClientIdTitle: String = "";
  static headerClientIdTitle2: String = "";
  static _navName: Array<string> = ['initStatus', 'clientStatus', 'contactStatus', 'programStatus', 'houseHoldStatus', 'recommendedStatus', 'screeningStatus'];

  static readonly householdEmptyModel = {
    "householdMemberId": undefined,
    "headOfHouseholdYN": "",
    "relationshipCd": "-1",
    "altNames": [],
    "additionalSsns": [],
    "pregnantYN": "",
    "pregnancyDueDate": undefined,
    "aliasClientIds": [],
    "memberClearanceId": "",
    "memberClearedYN": "",
    "memberEditableYN": "",
    "cases": [],
    "verification": {
      "ssnVerificationModel": {
        "verificationDocumentCd": "",
        "verificationRequestedYN": "",
        "verificationType": "",
        "verifiedYN": "",
        "verificationAutoVerified": false,
        "verificationFileList": [],
        "retryCount": undefined,
        "messages": []
      }, "dobVerificationModel": {
        "verificationDocumentCd": "",
        "verificationAutoVerified": false,
        "verificationFileList": [],
        "verificationRequestedYN": "",
        "verificationType": "",
        "verifiedYN": "",
        "retryCount": undefined,
        "messages": []
      }
    }, "hasSsnYN": "",
    "ssnReferral": "-1",
    "personName": {
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "suffix": "-1"
    },
    "dob": undefined,
    "ssn":
    {
      "ssnPart1": undefined,
      "ssnPart2": undefined,
      "ssnPart3": undefined
    }, "gender": "-1",
    "raceCds": ["-1"],
    "deletedYN": ""
  };

  static clearanceSearchModel: HouseholdMember = ConstantsService.householdEmptyModel;
  static readonly contactInformationEmptyModel = {
    "homeAddress": {
      "addressLine1": "",
      "addressLine2": "",
      "city": "",
      "state": "",
      "county": "",
      "district": "",
      "zipcode": ""
    },
    "mailingAddress": {
      "addressLine1": "",
      "addressLine2": "",
      "city": "",
      "state": "",
      "county": "",
      "district": "",
      "zipcode": ""
    },
    "sameMailingAddressYN": "Y",
    "phoneNumber": {
      "phoneNumber": "",
      "phoneNumberType": "",
      "phoneNumberExt": ""
    },
    "altPhoneNumber": {
      "phoneNumber": "",
      "phoneNumberType": "",
      "phoneNumberExt": ""
    },
    "email": ""
  };
  static additionalInformationEmptyModel = {
    "preferredLanguage": "E",
    "interpreterNeededYN": "N",
    "visuallyImparedYN": "N",
    "hearingImparedYN": "N",
    "hearingImparedType": null
  };

static trailBudgetData: any={
     "livingArrangement": "",
       "householdMemberSize": "",
         "program": "",
         "irsDependents": "",
         "clients": "",
         "deemarEarnedIncome": "", //number
         "deemarEarnedIncomeExpense": "", //number
         "unearnedIncomes": "",
         "spouseUnearnedIncome":"", //number
         "deemarUnearnedIncome": "", //number
         "rentMortgageExpense": "", //number
         "utilityExpense": "", //number
      "medicalExpense": "", //number
       "tcDeductionExpense": "", //number
      "utilityMethodType": "",
       "assets" : [],
       "vehicularAssets":  [],
 };

  constructor(private http: Http) { 
    
  }

  addHouseholdsIdWithCaseId(householdId: any, caseId: string) {
    if (!ConstantsService.caseIdHouseholds[caseId]) {
      ConstantsService.caseIdHouseholds[caseId] = new Set();
    }
    ConstantsService.caseIdHouseholds[caseId].add(householdId);
    console.log("ConstantsService.caseIdHouseholds[caseId]", ConstantsService.caseIdHouseholds[caseId]);
  }

  removeHouseHoldIdFromCaseId(householdId: any, caseId: string) {
    if (ConstantsService.caseIdHouseholds[caseId] && ConstantsService.caseIdHouseholds[caseId].has(householdId)) {
      ConstantsService.caseIdHouseholds[caseId].delete(householdId);
    }
  }

  getHouseHoldsWithCaseId(caseId: string) {
    let householdsListForCaseId = [];
    /*if (ConstantsService.caseIdHouseholds[caseId]) {
      for (let household of ConstantsService.householdMembers3) {
        if (ConstantsService.caseIdHouseholds[caseId].has(household.householdMemberId)) {
          householdsListForCaseId.push(household);
        }
      }
    }*/
    if(!ConstantsService.humanServiceModel) {
      ConstantsService.humanServiceModel = new HumanServices();
      ConstantsService.humanServiceModel.benefitsCase.caseId = caseId;
    }
    ConstantsService.humanServiceModel.benefitsCase.householdMembers = ConstantsService.householdMembers3;

    if(ConstantsService.humanServiceModel && 
      ConstantsService.humanServiceModel.benefitsCase && 
      ConstantsService.humanServiceModel.benefitsCase.caseId == caseId) {
        if(ConstantsService.humanServiceModel.benefitsCase.householdMembers.length > 0) {
          for (let household of ConstantsService.humanServiceModel.benefitsCase.householdMembers) {
            if (ConstantsService.caseIdHouseholds[caseId].has(household.householdMemberId)) {
              householdsListForCaseId.push(household);
            }
          }
        }

    }
    console.log("householdsListForCaseId::", householdsListForCaseId);
    return householdsListForCaseId;
  }

  getTrialBudgetData(): TrialBudgetRequest {

    if (ConstantsService.trailBudgetData != NaN) {
      return ConstantsService.trailBudgetData;
    }
    return undefined;
  }
  getText(key: string): string {
    return ConstantsService[key];
  }

  getConstant(key: string): any {
    return ConstantsService[key];
  }

  getDropDownFromLookup(val: string): any {
    return this.lookUps[0].localizedLookups[val].beans;
  }

  setLookups(lookUps: any){
    this.lookUps = lookUps;
  }
  getLookups(){
    return this.lookUps;
  }

  getDropdownValue(key: string, value: string): string {
    for (let entry of this.getDropDownFromLookup(key)) {
      if (entry.lookupBean.code == value) return entry.lookupBean.shortLabel;
    }
    return "";
  }

  getClientById(Id: string): HouseholdMember {
    var tempId = Number(Id);
    if (tempId != NaN)
      for (let entry of ConstantsService.householdMembers3) {
        if (entry.householdMemberId == tempId) return entry;
      }
    return undefined;
  }

  getContactInformation():ContactInformation{
    
    if (ConstantsService.contactInfo != NaN)
      {
        return ConstantsService.contactInfo;
      }
    return undefined;
  }
  getProgramName(): string[] {
    if (ConstantsService.programNameSelect !== null) {
      return ConstantsService.programNameSelect;
    }
  }

  getSignature(): Signature {
    if (ConstantsService.signatureStatus != NaN) {
      return ConstantsService.signatureStatus;
    }
    return undefined;
  }

  getHouseholdCircumstance(): HouseholdCircumstance {

    if (ConstantsService.householdCircumstances != NaN) {
      return ConstantsService.householdCircumstances;
    }
    return undefined;
  }



getAdditionalInformationById(Id:string):AdditionalInformation{
    var tempId = Number(Id);
    if (tempId != NaN)
      {
        return ConstantsService.additionalInformation;
      }
    return undefined;
  }

  getLookupData(requestLookup: string[]): Observable<DropDown[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(environment.apiLookupUrl, requestLookup, options).map((res: Response) => res.json());
  }

  generateArray(obj) {
    return Object.keys(obj).map((k) => { return { key: k, value: obj[k] } });
  }

  //TODO: do it once and cache it? do we need parameterize it? or just get he entire object for DD
  loadLookupData(requestLookup: string[]): Observable<Map<string, KeyValue[]>> {
    if(this.DD){
      return Observable.of(this.DD);
    }

    let querystring = "";
    for (let key in requestLookup) {
      if (querystring == "") {
        querystring = "?lookupType=" + requestLookup[key];
      }
      else {
        querystring += "&lookupType=" + requestLookup[key];
      }
    }
    return this.http.get(environment.apiLookupUrl + querystring)
      .map(this.extractLookupData)
      .catch(this.handleError)
  }

  private extractLookupData(response: Response):  Map<string, KeyValue[]> {
    let body = response.json();
    let data = body.localizedLookups;
    if (data) {
      let keys: string[] = Object.keys(data); //get all the keys//
      this.DD = new Map<string, KeyValue[]>();
      if (keys) {
        for (let i = 0; i < keys.length; i++) {
          let beansArray = data[keys[i]].beans;
          let optionsArray: Array<KeyValue> = new Array<KeyValue>();
          for (let j = 0; j < beansArray.length; j++) {
            optionsArray.push(new KeyValue(beansArray[j].lookupBean.code, beansArray[j].lookupBean.longLabel))
          }
          this.DD.set(keys[i], optionsArray)
        }
      }
      return this.DD;
    } else {
      return null;
    }
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  //*****************Load Lookup data - End********************* */


  //*****************Load Help Text - Start********************* */
  loadHelpTextData(requestModuleName: string, requestSectionIDs: string[]): Observable<Map<string, HelpText[]>> {
    let querystring = "";
    if (querystring == "") {
      querystring = "?moduleName=" + requestModuleName;
    }

    for (let key in requestSectionIDs) {
      if (querystring == "") {
        querystring = "?sectionId=" + requestSectionIDs[key];
      }
      else {
        querystring += "&sectionId=" + requestSectionIDs[key];
      }
    }

    return this.http.get(environment.apiHelpTextUrl + querystring)
      .map((res: Response) => this.extractHelpTextData(requestSectionIDs, res))
      .catch(this.handleError)
  }


  private extractHelpTextData(sectionIDs: string[], response: Response) {
    let body = response.json();
    let data = body.helpTexts.helpTexts;
    if (data) {
      //let keys:string[] = Object.keys(data); //get all the keys//
      let helpTextMap: Map<string, HelpText[]> = new Map<string, HelpText[]>();
      if (sectionIDs) {
        for (let i = 0; i < sectionIDs.length; i++) {
          let sectionHelpTextArray = data[sectionIDs[i]];
          let helptextArray: Array<HelpText> = new Array<HelpText>();
          let keys: string[] = Object.keys(sectionHelpTextArray);
          for (let j = 0; j < sectionHelpTextArray.length; j++) {
            console.log(sectionHelpTextArray[keys[j]].id, sectionHelpTextArray[keys[j]].htmlHelpText, sectionHelpTextArray[keys[j]].associatedFieldYN, sectionHelpTextArray[keys[j]].associatedFieldId);
            helptextArray.push(new HelpText(sectionHelpTextArray[keys[j]].id, sectionHelpTextArray[keys[j]].htmlHelpText, sectionHelpTextArray[keys[j]].associatedFieldYN, sectionHelpTextArray[keys[j]].associatedFieldId))
          }
          helpTextMap.set(sectionIDs[i], helptextArray)
        }
      }
      return helpTextMap;
    } else {
      return {}
    }
  }

  //*****************Load Help Text - End********************** */



  changedStatusOnDefault(id: any) {

    if (id) {
      var dom = document.getElementById(id);
      if (dom && dom.parentElement && dom.parentElement.innerText) {
        ConstantsService.headerTitle =  (document.getElementById(id).parentElement.innerText);
        if (ConstantsService.headerTitle.trim() == " Initiate Screening") {
          ConstantsService.headerClientIdTitle = "";
          ConstantsService.headerClientIdTitle2 = "";
        } else {
          if (ConstantsService.headerTitle.trim() == "Screening: Client Registration") {
            ConstantsService.headerClientIdTitle = "Case ID: 452154";
            ConstantsService.headerClientIdTitle2 = "";
          }
          else {
            ConstantsService.headerClientIdTitle = "Case ID: 452154";
            ConstantsService.headerClientIdTitle2 = "HOH: Jonathan Rogers";
          }
        }
      }

      for (let clear_id of ConstantsService._navName) {
        var domInner = document.getElementById(clear_id);
        if (domInner) {
          domInner.parentElement.classList.remove("sidebarleft-default");
          domInner.classList.remove("sidebarleft-default-i");
        }
      }

      if (dom && dom.parentElement && dom.parentElement.classList)
        dom.parentElement.classList.add("sidebarleft-default");
      if (dom && dom.classList)
        dom.classList.add("sidebarleft-default-i");
    }
  }

  changedStatus(id: any, bool1: Boolean) {

    if (id) {
      var dom = document.getElementById(id);

      if (bool1) {
        if (dom && dom.parentElement && dom.parentElement.innerText) {
          ConstantsService.headerTitle =  (document.getElementById(id).parentElement.innerText);
          if (ConstantsService.headerTitle.trim() == "Screening: Initiate Screening") {
            ConstantsService.headerClientIdTitle = "";
            ConstantsService.headerClientIdTitle2 = "";
          } else {
            if (ConstantsService.headerTitle.trim() == "Screening: Client Registration") {
              ConstantsService.headerClientIdTitle = "Case ID: 452154";
              ConstantsService.headerClientIdTitle2 = "";
            }
            else {
              ConstantsService.headerClientIdTitle = "Case ID: 452154";
              ConstantsService.headerClientIdTitle2 = "HOH: Jonathan Rogers";
            }
          }
        }
      }
      dom.classList.remove("fa-circle-thin");
      dom.classList.remove("unvisited-color");
      dom.classList.add("fa-check-circle");
      dom.classList.add("visited-color");
      dom.parentElement.classList.remove("sidebarleft-default");
    }
  }

  subheaderTitle(title: string) {
    ConstantsService.headerTitle =  title;
  }
 getTrailBudget() : Observable<TrialBudgetRequest>{
     
			return this.http.get(this.trailBudgetUrl)
                         .map(res => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }
}
