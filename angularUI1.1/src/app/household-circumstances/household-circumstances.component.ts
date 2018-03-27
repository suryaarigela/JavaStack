import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators, FormControl } from '@angular/forms';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { Subscription } from 'rxjs/Subscription';

import { AuthorizedRepService } from "app/common/authorized-rep.service";
import { AppUtilService } from 'app/common/app.util.service';
import { ConstantsService } from 'app/common/constants.service';
import { DataShareService } from 'app/common/data-share.service';

import { DropDown } from 'app/Model/api/drop-down.class';
import { HouseholdCircumstance } from "app/Model/api/household-circumstance.class";
import { Income } from "app/Model/api/income.class";
import { Asset } from "app/Model/api/asset.class";
import { EarnedIncome } from "app/Model/api/earned-income.class";
import { KeyValue } from 'app/Model/api/key-value.class';
import { PersonName } from "app/Model/api/person-name.class";
import { Person } from "app/Model/api/person.class";
import { SocialSecurityNumber } from "app/Model/api/social-security-number.class";

@Component({
  selector: 'app-household-circumstances',
  templateUrl: './household-circumstances.component.html',
  styleUrls: ['./household-circumstances.component.css'],
})
export class HouseholdCircumstancesComponent implements OnInit {
  circumstancesForm: FormGroup;

  householdCircumstanceData: any = {
    "earningsAmount": [],
    "unearnedAmount": [],
    "assetAmount": [],
    "shelterAmount": [],
    "homelessYN": "N",
    "disabledYN": "N",
    "refugeeYN": "N",
    "blindYN": "N",
    "destituteMigrantYN": "N",
    "shelterIncludesMealsYN": "N",
    "protectiveLivingArrangementYN": "N",
    "communityBasedWaiverYN": "N",
    "medicarePartAEntitlementYN": "N",
    "authorizedRepresentativeYN": "N",
    "absentParentYN":"N",
    "absentParent": PersonName
  };

  titleAlert: string = 'Required field';

  addEarnedIncome: boolean;
  hideAuthorizedRep: boolean;
  hideAbsent: boolean;
  hideAbsentParent: boolean;
  hideAuthData1: boolean = true;
  hideAuthData2: boolean = true;
  hideAuthData3: boolean = true;
  monthlyIncomeAmount: any = [];
  liquidAssetsAmount: Income[] = [];
  earnedIncome: Income[] = [];
  unearnedIncome: Income[] = [];
  liquidAsset: Income[] = [];
  shelterExpense: Income[] = [];
  FirstName: string;
  LastName: string;
  address: string;
  phoneNumber: number;
  Relation: string;

  earningTypeDropdown: Array<KeyValue> = new Array<KeyValue>();
  unearnedTypeDropdown: Array<KeyValue> = new Array<KeyValue>();
  benifitsPensions: Array<KeyValue> = new Array<KeyValue>();
  compensationPayments: Array<KeyValue> = new Array<KeyValue>();
  assetTypeDropdown: Array<KeyValue> = new Array<KeyValue>();
  shelterTypeDropdown: Array<KeyValue> = new Array<KeyValue>();
  suffixDropDowns:Array<KeyValue> = new Array<KeyValue>();
  sexDropDowns:Array<KeyValue> = new Array<KeyValue>();  
  raceDropDowns:Array<KeyValue> = new Array<KeyValue>();
  supportType:Array<KeyValue> = new Array<KeyValue>();
  contributionType:Array<KeyValue> = new Array<KeyValue>();
  vendorType:Array<KeyValue> = new Array<KeyValue>();
  loansType:Array<KeyValue> = new Array<KeyValue>();
  educationalType:Array<KeyValue> = new Array<KeyValue>();
  returnType:Array<KeyValue> = new Array<KeyValue>();
  fosterType:Array<KeyValue> = new Array<KeyValue>();
  needsType:Array<KeyValue> = new Array<KeyValue>();
  publicType:Array<KeyValue> = new Array<KeyValue>();
  relocationType:Array<KeyValue> = new Array<KeyValue>();
  shelterType:Array<KeyValue> = new Array<KeyValue>();
  projectType:Array<KeyValue> = new Array<KeyValue>();
  lumpType:Array<KeyValue> = new Array<KeyValue>();
  volunteerType:Array<KeyValue> = new Array<KeyValue>();
  variableType:Array<KeyValue> = new Array<KeyValue>();
  otherType:Array<KeyValue> = new Array<KeyValue>();

  errorMessage: string;
  subscription: Subscription;

  private targetValue: number;

  helptextContactInfo: string;

  private houseHoldCircumstance: HouseholdCircumstance;

  constructor(private fb: FormBuilder,
    private router: Router,
    private shareService: DataShareService,
    private constantsService: ConstantsService) {
    if (ConstantsService.householdCircumstances != null) {
      this.householdCircumstanceData = this.constantsService.getHouseholdCircumstance();
    }
    this.buildForm();
  }


  setEarnedIncome() {
    let earnedIncomeList: EarnedIncome[] = [];
    // earnedIncomeList.push( new EarnedIncome("CBB", 300));
    // earnedIncomeList.push( new EarnedIncome("MIS", 500));
    // earnedIncomeList.push( new EarnedIncome("MCA", 700));


    earnedIncomeList=ConstantsService.householdCircumstances.earningsAmount;
    const earnedIncomeFGs = earnedIncomeList.map( earnedIncome => this.fb.group(earnedIncome));
    const earnedIncomeFormArray = this.fb.array(earnedIncomeFGs);
    this.circumstancesForm.setControl('earnedIncomeForm', earnedIncomeFormArray);
  }

  setUnEarnedIncome() {
    let incomeList: EarnedIncome[] = [];
    // incomeList.push( new EarnedIncome("BP", 111));
    // incomeList.push( new EarnedIncome("SA", 555));
    // incomeList.push( new EarnedIncome("CI", 777));
    incomeList= ConstantsService.householdCircumstances.unearnedAmount;
    const unEarnedIncomeFGs =incomeList.map( income => this.fb.group(income));
    const unEarnedIncomeFormArray = this.fb.array(unEarnedIncomeFGs);
    this.circumstancesForm.setControl('unEarnedIncomeForm', unEarnedIncomeFormArray);
  }

  
  setAssets() {
    let assets: Asset[] = [];
    // assets.push( new Asset("CBB", 11111));
    // assets.push( new Asset("MCA", 55555));
    // assets.push( new Asset("RF", 77777));
    assets=ConstantsService.householdCircumstances.assetAmount;
    const assetFGs = assets.map( asset => this.fb.group(asset));
    const assetFormArray = this.fb.array(assetFGs);
    this.circumstancesForm.setControl('assetForm', assetFormArray);
  }

  setShelterAmount() {
    let shelterAmount: EarnedIncome[] = [];
    // assets.push( new Asset("CBB", 11111));
    // assets.push( new Asset("MCA", 55555));
    // assets.push( new Asset("RF", 77777));
    shelterAmount=ConstantsService.householdCircumstances.shelterAmount;
    const shelterAmountFGs = shelterAmount.map( shelterAmount => this.fb.group(shelterAmount));
    const shelterAmountFormArray = this.fb.array(shelterAmountFGs);
    this.circumstancesForm.setControl('shelterAmountForm', shelterAmountFormArray);
  }

  get earnedIncomeForm(): FormArray {
    return this.circumstancesForm.get('earnedIncomeForm') as FormArray;
  };
  get unEarnedIncomeForm(): FormArray {
    return this.circumstancesForm.get('unEarnedIncomeForm') as FormArray;
  };
  get assetForm(): FormArray {
    return this.circumstancesForm.get('assetForm') as FormArray;
  }
  get shelterAmountForm(): FormArray {
    return this.circumstancesForm.get('shelterAmountForm') as FormArray;
  }

  addEarnIncome() {
    this.earnedIncomeForm.push(this.fb.group(new EarnedIncome()));
  }
  addUnEarnIncome() {
    this.unEarnedIncomeForm.push(this.fb.group(new EarnedIncome()));
  }
  addNewAsset(){
    this.assetForm.push(this.fb.group(new Asset()));
  }

  addShelterAmount(){
    this.shelterAmountForm.push(this.fb.group(new EarnedIncome()));
  }

  deleteEarnedIncome(index){
    this.earnedIncomeForm.removeAt(index)
  }
  deleteUnEarnedIncome(index){
    this.unEarnedIncomeForm.removeAt(index)
  }
  deleteAsset(index){
    this.assetForm.removeAt(index)
  }
  deleteShelterAmount(index){
    this.shelterAmountForm.removeAt(index)
  }




  buildForm() {
    console.log('@@@@@@@@@@@@@@@@building form '+this.householdCircumstanceData.destituteMigrantYN);
    this.circumstancesForm = this.fb.group({

	    earnedIncomeForm : this.fb.array([]),
      unEarnedIncomeForm : this.fb.array([]),
      assetForm: this.fb.array([]),
      shelterAmountForm: this.fb.array([]),
	  
      homelessYN: [this.householdCircumstanceData.homelessYN == "Y" ? true : false],
      disabledYN: [this.householdCircumstanceData.disabledYN == "Y" ? true : false],
      refugeeYN: [this.householdCircumstanceData.refugeeYN == "Y" ? true : false],
      blindYN: [this.householdCircumstanceData.blindYN == "Y" ? true : false],
      destituteMigrantYN: [this.householdCircumstanceData.destituteMigrantYN == "Y" ? true : false],
      shelterIncludesMealsYN: [this.householdCircumstanceData.shelterIncludesMealsYN == "Y" ? true : false],
      authorizedRepresentative: [this.householdCircumstanceData.authorizedRepresentative == "Y" ? true : false],
      protectiveLivingArrangementYN: [this.householdCircumstanceData.protectiveLivingArrangementYN == "Y" ? true : false],
      communityBasedWaiverYN: [this.householdCircumstanceData.communityBasedWaiverYN == "Y" ? true : false],
      medicalPartAEntitlementYN: [this.householdCircumstanceData.medicalPArtAEntitlementYN == "Y" ? true : false],
      authorizedRepresentativeYN: [this.householdCircumstanceData.authorizedRepresentativeYN == "Y" ? true : false],
      absentParentYN: [this.householdCircumstanceData.absentParentYN == "Y" ? true : false],
      absentParent: this.fb.group({
        firstName: [this.householdCircumstanceData.absentParent.firstName, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[A-Za-z]*')])],
        middleName: [this.householdCircumstanceData.absentParent.middleName , Validators.compose([Validators.maxLength(12), Validators.pattern('[A-Za-z]*')])],
        lastName: [this.householdCircumstanceData.absentParent.lastName, Validators.compose([Validators.required, Validators.maxLength(18), Validators.pattern('[A-Za-z]*')])],
        suffix: [this.householdCircumstanceData.absentParent.suffix, this.houseHoldCircumstance],
     }),
      dob: [this.householdCircumstanceData.dob],
      gender: [this.householdCircumstanceData.gender],
      ssn: [this.householdCircumstanceData.ssn],
      raceCds: [this.householdCircumstanceData.raceCds]
    });

  }

  populateData() {
    this.circumstancesForm.patchValue(this.householdCircumstanceData);
  }

  save(model) {
    //let householdCircumstances:any={};
	
	const formModel = model.value;
    const earnedIncomeDeepCopy: EarnedIncome[] = formModel.earnedIncomeForm.map(
      (income: EarnedIncome) => Object.assign({}, income)
    );
    const unEarnedIncomeDeepCopy: EarnedIncome[] = formModel.unEarnedIncomeForm.map(
      (income: EarnedIncome) => Object.assign({}, income)
    );
    const assetDeepCopy: EarnedIncome[] = formModel.assetForm.map(
      (asset: Asset) => Object.assign({}, asset)
    );

  const shelterDeepCopy: EarnedIncome[] = formModel.shelterAmountForm.map(
      (income: EarnedIncome) => Object.assign({}, income)
    );


    console.log ( earnedIncomeDeepCopy );
    console.log ( unEarnedIncomeDeepCopy );
    console.log ( assetDeepCopy );
    console.log ( shelterDeepCopy );

    model.value.earningsAmount=earnedIncomeDeepCopy;
    model.value.unearnedAmount=unEarnedIncomeDeepCopy
    model.value.assetAmount=assetDeepCopy;
    model.value.shelterAmount=shelterDeepCopy;

    // this.householdCircumstanceData.earningsAmount=earnedIncomeDeepCopy;
    // this.householdCircumstanceData.unearnedAmount=unEarnedIncomeDeepCopy
    // this.householdCircumstanceData.assetAmount=assetDeepCopy;

    // this.householdCircumstanceData.absentParent.firstName=model.value.absentParent.firstName;
    // this.householdCircumstanceData.absentParent.middleName=model.value.absentParent.middleName;
    // this.householdCircumstanceData.absentParent.lastName=model.value.absentParent.lastName;
    // this.householdCircumstanceData.absentParent.suffix=model.value.absentParent.suffix;
    // this.householdCircumstanceData.dob=model.value.dob;
    // this.householdCircumstanceData.gender=model.value.gender;
    // this.householdCircumstanceData.ssn=model.value.ssn;
    // this.householdCircumstanceData.raceCds=model.value.raceCds;
    
    ConstantsService.householdCircumstances=model.value;
    console.log(ConstantsService.householdCircumstances);

    console.log(this.constantsService.getHouseholdCircumstance());
    this.next();
  }

  ngOnInit() {
    this.populateFormDropDownData();
    //this.populateFormHelpTextData();
    this.buildForm();
    this.populateData();

    this.shareService.addDataToMap('showVersion', true);
    this.shareService.addDataToMap('pageVersion', "V1");
	this.setEarnedIncome();
    this.setUnEarnedIncome();
    this.setAssets();					
    this.setShelterAmount();					   
  }

  public ngOnDestroy(): void {
    this.shareService.addDataToMap('showVersion', false);
    this.shareService.addDataToMap('pageVersion', null);
  }
  addAsset(type: string) {
    this[type].push({ type: null, income: null });
  }
  removeAsset(type: string, index: number) {
    this[type].splice(index, 1);
  }
  totalIncome(array: any[]): number {
    let sum: number = 0;
    for (let entry of array) {
      if (Number(entry.incomeType) != NaN)
        sum += Number(entry.amoutn);
    }
    return sum;
  }

  calculateTotalIncome(): number {
    let sum: number = 0;
    // for (let entry of this.earnedIncomeForm.controls) {
    //   if (Number(entry) != NaN)
    //     sum += Number(entry[0]);
    // }
    return sum;
  }
  addRep() {
    this.router.navigate(['/screening/authRepresentative']);
  }
  next() {
    this.router.navigate(['/screening/recommendedPrograms']);
    this.constantsService.changedStatusOnDefault('recommendedStatus');
    this.constantsService.changedStatus('houseHoldStatus', false);
  }
  cancel() {
    this.router.navigate(['/screening/programSelection']);
    this.constantsService.changedStatusOnDefault('programStatus');
    this.constantsService.changedStatus('houseHoldStatus', false);
  }
  AbsentParentControl() {
    this.hideAbsentParent = true;
  }
  AuthRep3Control() {
    this.hideAuthData3 = false;
  }
  EditInfo() {
    this.router.navigate(['/screening/authRepresentative']);
  }
  // private changeModel(ev) {
  //   console.log(this.mycurpipe.transform(ev));
  // }
  numberOnly(event: any) {
    return (event.charCode >= 48 && event.charCode <= 57);
  }
  textOnly(event: any) {
    return (event.charCode >= 65 && event.charCode <= 90 || event.charCode >= 97 && event.charCode <= 122);
  }
  ssnMasking(event: any) {
    var val = event.target.value;
    var charCode = (event.charCode) ? event.charCode : event.keyCode;
    // Allow only backspace and delete
    if (charCode == 46 || charCode == 8 || charCode == 37 || charCode == 45) {
      // let it happen, don't do anything
    } else {
      // Ensure that it is a number and stop the keypress
      if (charCode < 48 || charCode > 57) {
        event.preventDefault();
      } else {
        var formatFlag = false;
        if (/^\d{3}$/.test(val)) {
          val = val.substring(0, 3) + '-';
          formatFlag = true;
        } else if (/^\d{3}-\d{2}$/.test(val)) {
          val = val.substring(0, 6) + '-';
          formatFlag = true;
        }
        if (formatFlag)
          event.target.value = val;
      }
    }
  }
  private populateFormDropDownData() {
    let requestLookup = ["EarningType", "UnearnedIncomeType", "AssetType", "ShelterRelated"];

    this.constantsService.loadLookupData(requestLookup)
      .subscribe(data => {
        this.earningTypeDropdown = data.get("EarningType");
        this.unearnedTypeDropdown = data.get("UnearnedIncomeType");
        this.benifitsPensions=data.get("BenifitsPensions");
        this.compensationPayments=data.get("CompensationPayments");
        this.supportType=data.get("SupportAlimony");
        this.contributionType=data.get("ContributionsInKind");
        this.assetTypeDropdown = data.get("AssetType");
        this.shelterTypeDropdown = data.get("ShelterRelated");
        this.suffixDropDowns= data.get("Suffix");
        this.sexDropDowns= data.get("Sex");        
        this.raceDropDowns= data.get("Race");
        this.compensationPayments=data.get("CompensationPayments");
        this.vendorType=data.get("VendorPayments");
        this.loansType=data.get("Loans");
        this.educationalType = data.get("EducationalAssistance");
        this.returnType = data.get("ReturnOnInvestments");
        this.fosterType= data.get("FosterCareAdoption");
        this.needsType= data.get("NeedsBasedAssistance");        
        this.publicType= data.get("PublicAssistance");  
        this.relocationType=data.get("Relocation");
        this.shelterType=data.get("ShelterRelated");
        this.projectType=data.get("ProjectIndependence");
        this.lumpType = data.get("LumpSum");
        this.volunteerType = data.get("VolunteerRelated");
        this.variableType= data.get("VariableInfrequent");
        this.otherType= data.get("OtherUI");                        
      },
      error => this.errorMessage = <any>error);
  }
  //Load all the helptext required for household circumstances
  // private populateFormHelpTextData() {
  //   let requestSectionIDs = [ "HouseholdCircumstance"];

  //   this.constantsService.loadHelpTextData(this.constantsService.getText('screeningModule'), requestSectionIDs)
  //     .subscribe( data => {
  //         this.helptextContactInfo = data.get("HouseholdCircumstance")["0"].htmlHelpText;
  //       },
  //       error =>  this.errorMessage = <any>error);
  // }
  changeDropDownValue(event: any) {
    this.targetValue = event.target.value;
  }
}