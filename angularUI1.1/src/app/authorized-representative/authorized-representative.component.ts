import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ConstantsService } from 'app/common/constants.service';
import { AuthorizedRepService } from "app/common/authorized-rep.service";

import { KeyValue } from 'app/Model/api/key-value.class';



@Component({
  templateUrl: './authorized-representative.component.html',
  styleUrls: ['./authorized-representative.component.css']
})
export class AuthorizedRepresentativeComponent implements OnInit {

  authRepForm: FormGroup;
  titleAlert: string = 'Required field';
  searchCaseNumber: object[];
  // DropDowns 
  suffixDD: Array<KeyValue> = new Array<KeyValue>();
  stateDD: Array<KeyValue> = new Array<KeyValue>();
  countyDD: Array<KeyValue> = new Array<KeyValue>();
  districtDD: Array<KeyValue> = new Array<KeyValue>();
  phoneTypeDD: Array<KeyValue> = new Array<KeyValue>();
  

  private readOnlyFields: boolean = false;

  constructor(
    private router: Router,
    private constantsService: ConstantsService,
    private fb: FormBuilder,
    private _authorizedService: AuthorizedRepService) {

    this.authRepForm = fb.group({
      'relation': ['',Validators.compose([Validators.required])],
      'type': ['',Validators.compose([Validators.required])],
      'firstName': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      'middleName': [null, Validators.compose([Validators.maxLength(12)])],
      'lastName': [null, Validators.compose([Validators.required, Validators.maxLength(18)])],
      'suffix': '',
      'line1_RA': [null, Validators.compose([Validators.required, Validators.maxLength(52)])],
      'line2_RA': [null, Validators.compose([Validators.maxLength(22)])],
      'city_RA': [null, Validators.compose([Validators.required, Validators.maxLength(22)])],
      'zip_RA': [null, Validators.compose([Validators.required, Validators.maxLength(5)])],
      'state_RA': [null, Validators.compose([Validators.required, Validators.maxLength(15)])],
      'county_RA': [null, Validators.compose([Validators.required, Validators.maxLength(10)])],
      'district_RA': [null, Validators.compose([Validators.required, Validators.maxLength(10)])],
      'p_number': '',
      'p_ext': '',
      'p_type': '',
    });

  }

  ngOnInit() {
    this.fillData();
  }

  private fillData(){
    let requestLookup=["Suffix","States", "County", "District", "PhoneType"];
    this.constantsService.loadLookupData(requestLookup)
      .subscribe(res =>
      {
        this.suffixDD = res.get("Suffix");
        this.stateDD = res.get("States");
        this.countyDD = res.get("County");
        this.districtDD = res.get("District"); 
        this.phoneTypeDD = res.get("PhoneType"); 
      },
      err => console.log('error: ' + err));
  }


  // nav 
  back() {
    this.router.navigate(['/screening/householdCircumstances']);
  }

  onSubmit(): void {
    this.router.navigate(['/screening/householdCircumstances']);
  }


  textOnly(event: any) {
    return (event.charCode >= 65 && event.charCode <= 90 || event.charCode >= 97 && event.charCode <= 122);
  }
  numberOnly(event: any) {
    return event.charCode >= 48 && event.charCode <= 57
  }

}
