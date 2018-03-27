import { OnDestroy } from '@angular/core/core';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { CustomValidatorsService } from 'app/common/custom-validators.service';
import { ConstantsService } from 'app/common/constants.service';
import { DataShareService } from 'app/common/data-share.service';
import { AppUtilService } from 'app/common/app.util.service';

import { DropDown } from 'app/Model/api/drop-down.class';
import { AdditionalInformation } from "app/Model/api/additional-information.class";
import { ContactInformation } from "app/Model/api/contact-information.class";
import { Address } from "app/Model/api/address.class";
import { PhoneNumber } from "app/Model/api/phone-number.class";
import { HelpText } from 'app/Model/api/help-text.class';
import { KeyValue } from 'app/Model/api/key-value.class';

@Component({
  selector: 'app-contact-info-v1',
  templateUrl: './contact-info-v1.component.html',
  styleUrls: ['./contact-info-v1.component.css']
})
export class ContactInfoV1Component implements OnInit, OnDestroy {
  addressForm: FormGroup;
  contactInformationForm : FormGroup;
  additionalInformationForm: FormGroup;
  phoneNumber: FormGroup;
  altPhoneNumber: FormGroup;
  homeAddress: FormGroup;
  mailingAddress: FormGroup;
  contactInformationData: any = {
            "additionalInformation":AdditionalInformation,
            "homeAddress" : Address,
            "mailingAddress": Address,
            "phoneNumber":PhoneNumber,
            "altPhoneNumber":PhoneNumber,
            "sameMailingAddressYN" : "Y",
            "email" : "demo@cares.com"
          };
  /*additionalInformationData: any ={
    "additionalInformation" : AdditionalInformation
  };*/
  private contactInformation : ContactInformation;
 //private additionalInformation: AdditionalInformation;


  /*
  line1_RA: string = ''; line2_RA: string = ''; city_RA: string = ''; state_RA: string = ''; zip_RA: string = '';
  county_RA: string = ''; district_RA: string = '';
  line1_MA: string = ''; line2_MA: string = ''; city_MA: string = ''; state_MA: string = ''; zip_MA: string = '';
  county_MA: string = '';  district_MA: string = '';
  mailing_address: string = ''; p_ext: any; p_number: any; p_type: any; ap_number: any; ap_ext: any; ap_type: any;
  e_mail: any;
  */
  titleAlert: string = 'Required field';

  differentMailingAddress: boolean;
  isHearingImpaired: boolean;
  contactInfoNew: any={};
  contactInfo: any={};

  primaryLanguageDropdown: Array<KeyValue> = new Array<KeyValue>();
  hearingImpairedDropdown: Array<KeyValue> = new Array<KeyValue>();
  statesDropdown: Array<KeyValue> = new Array<KeyValue>();
  countyDropdown: Array<KeyValue> = new Array<KeyValue>();
  districtDropdown: Array<KeyValue> = new Array<KeyValue>();
  phoneTypeDropdown: Array<KeyValue> = new Array<KeyValue>();
  errorMessage:string;
  subscription: Subscription;

  helptextContactInfo : string;


  constructor(private router: Router,
      private shareService: DataShareService,
      private constantsService: ConstantsService,
      private appUtilService: AppUtilService,
      private fb: FormBuilder) {

        if (ConstantsService.contactInfo!=null) {
          this.contactInformationData = this.constantsService.getContactInformation();
          console.log("if",this.contactInformationData);
        } 
        
        
  }


  buildForm(){
    this.contactInformationForm = this.fb.group({
      additionalInformation : this.fb.group({
        preferredLanguage: [this.contactInformationData.additionalInformation.preferredLanguage, [Validators.required]],
        interpreterNeededYN  : [this.contactInformationData.additionalInformation.interpreterNeededYN=="Y"?true:false, [Validators.required]],
        visuallyImpairedYN  : [this.contactInformationData.additionalInformation.visuallyImpairedYN=="Y"?true:false, [Validators.required]],
        hearingImpairedYN  : [this.contactInformationData.additionalInformation.hearingImpairedYN=="Y"?true:false, [Validators.required]],
        hearingImpairedType  : [this.contactInformationData.additionalInformation.hearingImpairedType, [Validators.required]]
      }),
      homeAddress: this.fb.group({
        addressLine1: [this.contactInformationData.homeAddress.addressLine1, [Validators.required,Validators.maxLength(52)]],
        addressLine2: [this.contactInformationData.homeAddress.addressLine2, [Validators.maxLength(22)]],
        city: [this.contactInformationData.homeAddress.city, [Validators.required,Validators.maxLength(22)]],
        zipcode: [this.contactInformationData.homeAddress.zipcode, [Validators.required,Validators.maxLength(5)]],
        state: [this.contactInformationData.homeAddress.state, [Validators.required]],
        county: [this.contactInformationData.homeAddress.county, [Validators.required]],
        district: [this.contactInformationData.homeAddress.district, [Validators.required]]
      }),
      sameMailingAddress: [this.contactInformationData.sameMailingAddressYN="Y"?true:false, [Validators.required]],
      mailingAddress: this.fb.group({
        addressLine1: [this.contactInformationData.mailingAddress.addressLine1, [Validators.required,Validators.maxLength(52)]],
        addressLine2: [this.contactInformationData.mailingAddress.addressLine2, [Validators.maxLength(22)]],
        city: [this.contactInformationData.mailingAddress.city, [Validators.required,Validators.maxLength(22)]],
        zipcode: [this.contactInformationData.mailingAddress.zipcode, [Validators.required,Validators.maxLength(5)]],
        state: [this.contactInformationData.mailingAddress.state, [Validators.required]],
        county: [this.contactInformationData.mailingAddress.County, [Validators.required]],
        district: [this.contactInformationData.mailingAddress.district, [Validators.required]]
      }),
      phoneNumber: this.fb.group({
        phoneNumber: [this.contactInformationData.phoneNumber.phoneNumber],
        phoneNumberType: [this.contactInformationData.phoneNumber.phoneNumberType],
        phoneNumberExt: [this.contactInformationData.phoneNumber.phoneNumberExt]
      }),
      altPhoneNumber:this.fb.group({
        phoneNumber: [this.contactInformationData.altPhoneNumber.phoneNumber],
        phoneNumberType: [this.contactInformationData.altPhoneNumber.phoneNumberType],
        phoneNumberExt: [this.contactInformationData.altPhoneNumber.phoneNumberExt]
      }),
      email:[this.contactInformationData.email, [CustomValidatorsService.validEmail]]
    });

  }

//  contactInfo:any = {}

  populateData(){
    /*
    ConstantsService.contactInfo = {"additionalInformation" : {"preferredLanguage" : "E" , "interpreterNeededYN" : true, "visuallyImpairedYN" : true, "hearingImpairedYN":true, "hearingImpairedType" : "A"}};
    ConstantsService.contactInfo.homeAddress = new Address("line-1", "line-2", "some-city", "MD", "Baltimore", "Eastern", "12345");
    ConstantsService.contactInfo.mailingAddress = new Address("line-11", "line-22", "some-city-2", "MD", "some-country-2", "some-district-2", "12345");
    ConstantsService.contactInfo.phoneNumber= new PhoneNumber("813-987-8055", "H", "12345");
    ConstantsService.contactInfo.altPhoneNumber= new PhoneNumber("888-866-8055", "W", "54321");
    */
    this.contactInformationForm.patchValue (this.contactInformationData);

    //this.additionalInformation.patchValue(this.additionalInformationData);
  }

  save(model){
    let contactInfo: any = {};
    contactInfo.additionalInformation=model.value.additionalInformation;
    contactInfo.homeAddress=model.value.homeAddress;
    contactInfo.mailingAddress=model.value.mailingAddress;
    contactInfo.phoneNumber=model.value.phoneNumber;
    contactInfo.altPhoneNumber=model.value.altPhoneNumber;
    contactInfo.sameMailingAddressYN=model.value.sameMailingAddressYN;
    contactInfo.email=model.value.email;

    ConstantsService.contactInfo=contactInfo;
    console.log(ConstantsService.contactInfo);

    console.log(this.constantsService.getContactInformation());
    console.log(this.constantsService.getAdditionalInformationById("12345"));
    this.next();
  }

  ngOnInit() {
   this.isHearingImpaired=true;
  //Load all the Lookups required for contact information
    this.populateFormDropDownData();
      //Load all the helptext required for contact information
    this.populateFormHelpTextData();

    this.shareService.addDataToMap('showVersion', true);
    this.shareService.addDataToMap('pageVersion', "V1");

    this.buildForm();
    this.populateData();
  }

private populateFormDropDownData() {
    let requestLookup=["PrimaryLanguage","HearingImpaired", "State", "County", "District"];

    this.constantsService.loadLookupData(requestLookup)
      .subscribe( data => {
          this.primaryLanguageDropdown = data.get("PrimaryLanguage");
          this.hearingImpairedDropdown = data.get("HearingImpaired");
          this.statesDropdown = data.get("States");
          this.countyDropdown = data.get("County");
          this.districtDropdown = data.get("District");
          this.phoneTypeDropdown = data.get("PhoneType")

        },
        error =>  this.errorMessage = <any>error);
  }
//Load all the helptext required for contact information
  private populateFormHelpTextData() {
    let requestSectionIDs = [ "ContactInformation"];

    this.constantsService.loadHelpTextData(this.constantsService.getText('screeningModule'), requestSectionIDs)
      .subscribe( data => {
          this.helptextContactInfo = data.get("ContactInformation")["0"].htmlHelpText;
        },
        error =>  this.errorMessage = <any>error);
  }
  public ngOnDestroy(): void {
    this.shareService.addDataToMap('showVersion', false);
    this.shareService.addDataToMap('pageVersion', null);
  }
  next() {
    this.router.navigate(['/screening/programSelection']);
    this.constantsService.changedStatusOnDefault('programStatus');
    this.constantsService.changedStatus('contactStatus',false);
  }


  back() {
    this.router.navigate(['/screening/clientRegisterationAddHouseholdMembersComponent/0']);
    this.constantsService.changedStatusOnDefault('clientStatus');
  }

  textOnly(event: any) {
    return (event.charCode >= 65 && event.charCode <= 90 || event.charCode >= 97 && event.charCode <= 122);
  }
  numberOnly(event: any) {
    return event.charCode >= 48 && event.charCode <= 57
  }




}
