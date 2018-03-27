import { DropDown } from 'app/Model/api/drop-down.class';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";


import { TooltipModule } from "ngx-tooltip";
import { ISearch } from "./../Model/SearchR";
import { AppUtilService } from 'app/common/app.util.service';
import { CustomValidatorsService } from 'app/common/custom-validators.service';
import { ConstantsService } from 'app/common/constants.service';
import { DataShareService } from 'app/common/data-share.service';
import { SearchResultService } from "app/common/search-result.services";

import { ScreeningHeaderComponent } from "app/header/screening.component";

@Component({
  selector: 'app-clearance-search',
  templateUrl: './clearance-search.component.html',
  styleUrls: ['./clearance-search.component.css'],
  providers: [SearchResultService, AppUtilService]
})
export class ClearanceSearchComponent implements OnInit {


  @Input() searchresults: ScreeningHeaderComponent;
  @Input('clientSearchResults') clientSearchResults: ISearch[];
  searched: boolean = false;
  productID: any = 1;
  pageCount: number = 3;
  currentPage: number = 0;

  PclientID: string;

  DropDowns: DropDown[];

  clientIndexID: any[];

  constructor(private router: Router, private shareService: DataShareService, private _utilService: AppUtilService,
    private constantsService: ConstantsService, private searchresultservice: SearchResultService) { }

  /*onclick() {
    this.searched = true;
    this.clientSearchResults = this.constantsService.getConstant("clearanceResultsHouseHolds");
    /*this.searchresultservice.getClientSearchResults(this.PclientID).
      subscribe(clientSearchResults => this.clientSearchResults = clientSearchResults,
      (err) => this.clientSearchResults = this.results);
  }*/
  getPages() {
    return new Array(this.pageCount);
  }
  setPreviousPage() {
    if (this.currentPage >= 0)--this.currentPage;
  }
  setNextPage() {
    if (this.currentPage < this.pageCount - 1)++this.currentPage;

  }

  ngOnInit() {
    this.shareService.addDataToMap('hideHeaderMenus', true);
    this.shareService.addDataToMap('hideSearchHeader', false);
    this.populateFormDropDownData();
  }

  private populateFormDropDownData() {
    let requestLookup = ["Suffix", "YesNo", "Sex", "Race"];
    this.constantsService.getLookupData(requestLookup).subscribe(res => this.DropDowns = res);
  }

  createNewRecord() {
    this.shareService.addDataToMap('clientIdForRegisteration', undefined);
    this.router.navigate(['/screening/clientRegistrationV1']);
  }

  ngOnDestroy() {
    this.shareService.addDataToMap('hideHeaderMenus', false);
    this.shareService.addDataToMap('hideSearchHeader', true);
    this.shareService.addDataToMap('hideSearchDetails', false);
  }
  editClient(entity: any[]) {
    this.shareService.addDataToMap('clientIdForRegisteration', entity);
    this.clientIndexID = entity;
    this.router.navigate(['/screening/clientRegistrationV1']);

  }
  back() {
    if (this.shareService.getDataFromMap('hideSearchDetails')) {
      this.router.navigate(['/screening/clientRegisterationAddHouseholdMembersComponent/2']);
    } else {
      this.router.navigate(['/screening/clientRegisterationAddHouseholdMembersComponent/0']);

    }
  }
  textOnly(event: any) {
    return (event.charCode >= 65 && event.charCode <= 90 || event.charCode >= 97 && event.charCode <= 122);
  }
  validatenumberOnly($event) {
    if (!CustomValidatorsService.numberOnly(event)) {
      event.preventDefault();
    }
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
}
