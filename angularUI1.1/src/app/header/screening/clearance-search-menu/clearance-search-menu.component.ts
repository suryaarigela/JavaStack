import { Component, OnInit } from '@angular/core';
import { DataShareService } from "app/common/data-share.service";
import { ConstantsService } from "app/common/constants.service";
import { SearchResultService } from "app/common/search-result.services";
import { ApiManager } from "app/common/api-manager.service";
import { HouseholdMemberVO } from "app/Model/custom/household-member-vo.class";
import { HouseholdMember } from "app/Model/api/household-member.class";
import { AppUtilService } from 'app/common/app.util.service';

@Component({
  selector: 'app-clearance-search-menu',
  templateUrl: './clearance-search-menu.component.html',
  styleUrls: ['./clearance-search-menu.component.css'],
  providers: [SearchResultService]
})
export class ClearanceSearchMenuComponent implements OnInit {
  private householdMembersArray: HouseholdMember[];
  private clearanceSearchModel: HouseholdMember;

  constructor(private shareService: DataShareService, private constantsService: ConstantsService,
    private searchResultService: SearchResultService, private apiManager: ApiManager, private _utilService: AppUtilService) {
    if (this.shareService.getDataFromMap("clientSearchClearance")) {
      this.searchHouseholds();
      this.shareService.addDataToMap("clientSearchClearance", false);
      this.clearanceSearchModel = this.constantsService.getConstant('clearanceSearchModel');
    } else {
      this.clearanceSearchModel = this.constantsService.getConstant('householdEmptyModel');
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.shareService.addDataToMap("clientSearchClearance", false);
  }

  searchHouseholds() {
    this.shareService.addDataToMap('hideSearchDetails', true);
    this.apiManager.fetchData("householdMember3Url", undefined, ApiManager.JSONFILE, undefined).subscribe(res => {
      this.householdMembersArray = res,
        ConstantsService.householdMembers3 = this.householdMembersArray;
      //ref.detectChanges();
    });
    // this.constantsService.getParam('sex');
    //this.searchResultService.getDiffResults("client");
  }
}
