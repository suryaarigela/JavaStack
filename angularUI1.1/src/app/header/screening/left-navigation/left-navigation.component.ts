import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConstantsService } from "app/common/constants.service";
import { DataShareService } from "app/common/data-share.service";

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent implements OnInit {


  constructor(private shareService: DataShareService, private constantsService: ConstantsService, private router: Router,
  ) { }

  ngOnInit() {
  }
  customVerify() {
    
    let caseId = this.constantsService.getConstant("caseId");
    var householdMembers = this.constantsService.getHouseHoldsWithCaseId(caseId);
    console.log('customVerify' , caseId, householdMembers);
    if (householdMembers.length > 0) {
      householdMembers[0].verification.ssnVerificationModel.verificationDocumentCd = "NO";
      householdMembers[0].verification.dobVerificationModel.verificationDocumentCd = "NO";
      householdMembers[0].verification.ssnVerificationModel.verifiedYN = "Y";
      householdMembers[0].verification.dobVerificationModel.verifiedYN = "Y";
    }


    for (var i = 1; i < householdMembers.length; i++) {
      householdMembers[i].verification.ssnVerificationModel.verificationDocumentCd = "FV";
      householdMembers[i].verification.ssnVerificationModel.verificationAutoVerified = true;
      householdMembers[i].verification.ssnVerificationModel.verifiedYN = "N";

      householdMembers[i].verification.dobVerificationModel.verificationDocumentCd = "HC";
      householdMembers[i].verification.dobVerificationModel.verificationAutoVerified = true;
      householdMembers[i].verification.dobVerificationModel.verifiedYN = "N";
    }
  }
}
