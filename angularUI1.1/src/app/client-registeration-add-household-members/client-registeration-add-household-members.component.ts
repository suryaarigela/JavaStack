import { HouseholdMember } from 'app/Model/api/household-member.class';
import { HouseholdMemberVO } from './../Model/custom/household-member-vo.class';
import { ConstantsService } from './../common/constants.service';
import { Component, OnInit, OnDestroy, ViewChild, TemplateRef, Directive } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ScreeningHeaderComponent } from 'app/header/screening.component'
import { DataShareService } from "app/common/data-share.service";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileItem } from "ng2-file-upload";
import { AppUtilService } from 'app/common/app.util.service';
import { AppConfirmPopupComponent } from 'app/app-confirm-popup/app-confirm-popup.component';

export declare type ParsedResponseHeaders = {
  [headerFieldName: string]: string;
};
@Component({
  selector: 'app-client-registeration-add-household-members',
  templateUrl: './client-registeration-add-household-members.component.html',
  styleUrls: ['./client-registeration-add-household-members.component.css']
})
export class ClientRegisterationAddHouseholdMembersComponent implements OnInit, OnDestroy {
  @ViewChild('relationshipTmpl') relationshipTmpl: TemplateRef<any>;
  @ViewChild('nameTpl') nameTpl: TemplateRef<any>;
  @ViewChild('ssnTpl') ssnTpl: TemplateRef<any>;
  @ViewChild('sexTmpl') sexTmpl: TemplateRef<any>;
  @ViewChild('raceTmpl') raceTmpl: TemplateRef<any>;
  @ViewChild('ssnVerificationTmpl') ssnVerificationTmpl: TemplateRef<any>;
  @ViewChild('dobVerificationTmpl') dobVerificationTmpl: TemplateRef<any>;
  @ViewChild('deleteTmpl') deleteTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl') hdrTpl: TemplateRef<any>;
  @ViewChild(AppConfirmPopupComponent) ConfirmMsg: AppConfirmPopupComponent;

  private columns: any[];
  productID: any;
  disableNext: boolean;
  ssnLabel: String = "SSN";
  dobLabel: String = "DOB";
  relationshipLabel: String = "RELATIONSHIP";
  currentFiles: any;
  uploadProgress: any;
  fileUploading: Boolean = false;
  fileUploaded: Boolean = false;
  memberSelected: any;
  householdMembers: HouseholdMemberVO[] = [];
  public uploader: FileUploader = new FileUploader({ url: 'https://www.dropbox.com/request/SfTd9GjgQ0OA5XVJpSfF', autoUpload: true })
  @ViewChild('fileUploadElement')
  fileUploadElement: any;
  private clientIdIndex: number;

  constructor(private router: Router, private header: ScreeningHeaderComponent, private route: ActivatedRoute,
    private constantsService: ConstantsService, private shareService: DataShareService, private _utilService: AppUtilService) {
    let householdMemberList: HouseholdMember[] = this.constantsService.getHouseHoldsWithCaseId("452154");
    for (var house of householdMemberList) {
      this.householdMembers.push(new HouseholdMemberVO([], house));
    }


    console.log("client-reg-add-household-members householdMembers::", this.householdMembers);
  }

  ngOnInit() {
    /*for (var hm of this.householdMembers) {
      console.log(JSON.stringify(this._utilService.getToFromVo(hm, new HouseholdMember())));
    }*/
    this.columns = [{
      prop: "householdMember.householdMemberId", name: "Client ID",
    },
    {
      prop: "householdMember.personName", name: "Name", cellTemplate: this.nameTpl,
    },
    {
      prop: "householdMember.relationshipCd", name: "Relation", cellTemplate: this.relationshipTmpl,
    }, {
      prop: "householdMember.ssn", name: "SSN", cellTemplate: this.ssnTpl,
    }, {
      prop: "householdMember.dob", name: "DOB",
    }, {
      prop: "householdMember.gender", name: "Sex", cellTemplate: this.sexTmpl,
    },
    {
      prop: "householdMember.raceCds", name: "Race", cellTemplate: this.raceTmpl,
    }, {
      prop: "householdMember.verification.ssnVerificationModel", name: "SSN Verification", cellTemplate: this.ssnVerificationTmpl,
    }, {
      prop: "householdMember.verification.dobVerificationModel", name: "DOB Verification", cellTemplate: this.dobVerificationTmpl,
    },
    { prop: "", name: "", cellTemplate: this.deleteTmpl }
    ];


    this.shareService.addDataToMap('hideRunVerificationBelowMenu', false);
    if (this.productID == 0) {
      this.disableNext = true;
    } else {
      this.disableNext = false;
    }
    if (this.householdMembers && this.householdMembers.length > 0)
      this.productID = 2;
    else
      this.productID = this.route.snapshot.params['id'];
    if (this.productID == 2) {
      this.shareService.addDataToMap('showVersion', true);
      this.shareService.addDataToMap('pageVersion', "V2");
    }
  }
  retrieveGender(val) {
    this.constantsService.getDropdownValue(this.constantsService.getText('Sex'), val);
  }
  ngOnDestroy(): void {
    this.shareService.addDataToMap('hideRunVerificationBelowMenu', true);

    this.shareService.addDataToMap('showVersion', false);
    this.shareService.addDataToMap('pageVersion', null);
  }

  add() {

    //this.router.navigate(['/clearenceSearch']);
    this.shareService.addDataToMap("clientSearchClearance", false);
    ConstantsService.clearanceSearchModel = this.constantsService.getConstant("householdEmptyModel");
    this.router.navigate(['/screening/clearanceSearchComponent']);

  }

  editClient(clientId: string) {
    this.shareService.addDataToMap('clientIdForRegisteration', clientId);
    this.router.navigate(['/screening/clientRegistrationV1']);
  }

  deleteClientCallback(isSuccess: boolean) {
    if (isSuccess) {
      let index = this.clientIdIndex;
      let household = this.householdMembers[index];
      this.householdMembers.splice(index, 1);
      if (household && household.householdMember && household.householdMember.householdMemberId) {
        this.constantsService.removeHouseHoldIdFromCaseId(household.householdMember.householdMemberId, "452154");
      }
    }
  }

  deleteClient(index: number) {
    let personFullName = this.householdMembers[index].householdMember.personName;
    this.ConfirmMsg.showMessage("Are you sure you want to remove " + this._utilService.getFullName(personFullName) + " from this household?");
    this.clientIdIndex = index;
  }

  next() {
    this.router.navigate(['/screening/contactInformationV1']);
    this.constantsService.changedStatusOnDefault('contactStatus');
    this.constantsService.changedStatus('clientStatus', false);
  }
  back() {
    this.router.navigate(['/screening/initiateScreening']);
    this.constantsService.changedStatusOnDefault('initStatus');
  }
  changeProductId(id: number) {
    this.productID = id;
    this.changeAllFieldToReadMode();
  }


  changeFieldToEditMode(index: number, field: string) {
    if (this.householdMembers[index].editMode && this.householdMembers[index].editMode.includes(field))
      return;
    if (!this.householdMembers[index].editMode)
      this.householdMembers[index].editMode = [];
    this.householdMembers[index].editMode.push(field);
  }
  changeFieldToReadMode(index: number, field: string) {
    for (var i = this.householdMembers[index].editMode.length - 1; i >= 0; i--) {
      if (this.householdMembers[index].editMode[i] === field) {
        this.householdMembers[index].editMode.splice(i, 1);
      }
    }
  }
  changeAllFieldToReadMode() {
    for (var i = this.householdMembers.length - 1; i >= 0; i--) {
      this.householdMembers[i].editMode = []
    }
  }
  shouldShowField(index: number, field: string): boolean {
    if (this.householdMembers[index]) {
      return !(this.householdMembers[index].editMode && this.householdMembers[index].editMode.includes(field));
    }
  }
  setCurrentSelection(member: any, fileGroup: string) {
    // this.resetUpload();
    if (member.verification[fileGroup].verificationFileList) {
      this.currentFiles = member.verification[fileGroup].verificationFileList;
    }
    else {
      member.verification[fileGroup].verificationFileList = [];
      this.currentFiles = member.verification[fileGroup].verificationFileList;
    }
    this.memberSelected = this._utilService.getFullName(member.personName);
    console.log(this.memberSelected);
  }
  resetUpload() {
    console.log("reset");
    for (let entry of this.uploader.queue) {
      if (entry && entry.file && entry.file.name)
        this.currentFiles.push(entry.file.name);
    }
    this.uploader.clearQueue();
    this.fileUploadElement.nativeElement.value = "";
  }
  deleteFile(i: number) {
    this.currentFiles.splice(i, 1);
  }
  uploadFile(val: string) {
    if (val == "")
      return;

    var filePath = val.split("\\");

    this.fileUploading = true;
    this.uploadProgress = 0;
    var interval = setInterval(() => {
      this.uploadProgress += 10;
      if (this.uploadProgress == 100) {
        clearInterval(interval);
        this.fileUploaded = true;
        setTimeout(() => {
          this.fileUploading = false
          this.fileUploaded = false;
          this.currentFiles.push(filePath[filePath.length - 1]);
        }, 2000)

      }
    }, 100);
    this.fileUploadElement.nativeElement.value = "";
  }

}
